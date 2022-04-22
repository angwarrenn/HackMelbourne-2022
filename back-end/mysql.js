require("dotenv").config();

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
