// environment variables library
require("dotenv").config();

// setup express app and middlewares
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
const cors = require("cors");
app.use(cors());

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

const createEventUsersRecord = (users, event) => {
  const sql = `INSERT INTO eventusers (UserEmail, EventID) VALUES ('','')`;
};

app.post("/create-event", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const createdBy = req.body.email;

  const id = uuidv4();

  const sql = `INSERT INTO event (ID, Name, Description, CreatedBy) VALUES ('${id}','${name}','${description}','${createdBy}')`;

  connection.query(sql, (err) => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json({ success: true });
    }
  });

  // const users = req.body.users;
  //
  // users.forEach();
  //
  // const email = req.body.email;
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

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`listening on port ${process.env.PORT}`);
});
