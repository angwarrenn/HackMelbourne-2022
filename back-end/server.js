// environment variables library
require("dotenv").config();

// initialize mysql connection
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
connection.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("MySql Connected...");
});

// setup express app
const express = require("express");
const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
const cors = require("cors");
app.use(cors());

// initialize server
const server = app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`listening on port ${process.env.PORT}`);
});

// socket io
const { Server } = require("socket.io");
const io = new Server(server);

app.set("socketio", io);

// bcrypt library
const bcrypt = require("bcrypt");

// uuid library
const { v4: uuidv4 } = require("uuid");

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = `SELECT Password FROM user WHERE Email='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ success: false, error: err });
      return;
    }

    if (result.length === 0) {
      res.json({ success: false });
      return;
    }

    const hash = result[0].Password;

    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        res.json({ success: false, error: err });
        return;
      }

      if (result === true) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    });
  });
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(
    password,
    parseInt(process.env.BCRYPT_SALTROUNDS),
    (err, hash) => {
      if (err) {
        res.json({ success: false, error: err });
        return;
      }

      const sql = `INSERT INTO user (Email, Password) VALUES ('${email}','${hash}')`;

      connection.query(sql, (err) => {
        if (err) {
          res.json({ success: false, error: err });
          return;
        }

        res.json({ success: true });
      });
    }
  );
});

app.post("/create-event", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const createdBy = req.body.email;
  const date = req.body.date;
  const users = req.body.users;

  const id = uuidv4();

  let sql = `INSERT INTO event (ID, Name, Description, CreatedBy, Date) VALUES ('${id}','${name}','${description}','${createdBy}', '${date}')`;

  connection.query(sql, (err) => {
    if (err) {
      res.json({ success: false, error: err });
      return;
    }

    sql = "INSERT INTO eventusers (UserEmail, EventID) VALUES";

    for (let i = 0; i < users.length; i++) {
      sql += ` ('${users[i]}', '${id}')`;

      if (i < users.length - 1) {
        sql += ",";
      }
    }

    connection.query(sql, (err) => {
      if (err) {
        res.json({ success: false, error: err });
        return;
      }

      sql = "INSERT INTO eventtime (ID, EventID) VALUES";

      for (let i = 0; i < 24; i++) {
        sql += ` ('${i}', '${id}')`;

        if (i < 23) {
          sql += ",";
        }
      }
      connection.query(sql, (err) => {
        if (err) {
          res.json({ success: false, error: err });
          return;
        }

        res.json({ success: true });
      });
    });
  });
});

app.post("/retrieve-events", (req, res) => {
  const email = req.body.email;

  const sql = `SELECT * FROM event WHERE CreatedBy='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json({ success: true, result: result });
    }
  });
});

app.post("/event-vote", (req, res) => {
  const email = req.body.email;
  const eventId = req.body.id;

  const sql = `SELECT * FROM event WHERE CreatedBy='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json({ success: true, result: result });
    }
  });
});

io.on("connection", (socket) => {
  const eventId = socket.handshake.query.id;
  socket.join(eventId);

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });

  socket.on("vote", (body) => {
    body = JSON.parse(body);

    let sql = `INSERT INTO userrecordeventtime (UserEmail, EventTimeID, EventID) VALUES ('${body.email}','${body.time}','${eventId}')`;

    connection.query(sql, (err, result) => {
      if (err) {
        io.to(eventId).emit("update", { success: false, error: err });
        return;
      }

      sql = `SELECT * FROM userrecordeventtime WHERE EventID='${eventId}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          io.to(eventId).emit("update", { success: false, error: err });
        } else {
          io.to(eventId).emit("update", { success: true, result: result });
        }
      });
    });
  });
});
