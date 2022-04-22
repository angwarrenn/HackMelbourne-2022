// environment variables library
require("dotenv").config();

// setup express app and middlewares
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = `SELECT password FROM user WHERE email='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ success: false, error: err });
      return;
    }

    const hash = result[0].password;

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

      const sql = `INSERT INTO user (email, password) VALUES ('${email}','${hash}')`;

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

  const email = req.body.email;

  res.json({ success: true });
});

app.post("/retrieve-events", (req, res) => {
  const email = req.body.email;

  res.json({ success: true });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`listening on port ${process.env.PORT}`);
});
