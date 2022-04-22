require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create connection
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// connect to mysql
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

const bcrypt = require("bcrypt");

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = `SELECT password FROM user WHERE email='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ success: false, error: err });
    }

    const hash = result[0].password;

    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        res.json({ success: false, error: err });
      }

      if (result === true) {
        res.json({ success: true });
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
      }

      const sql = `INSERT INTO user (email, password) VALUES ('${email}','${hash}')`;

      connection.query(sql, (err) => {
        if (err) {
          res.json({ success: false, error: err });
        }

        res.json({ success: true });
      });
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
