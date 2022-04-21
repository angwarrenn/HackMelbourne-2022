const mysql = require("mysql2");

// Create connection
const connection = mysql.createConnection({
  host: "tcp://0.tcp.au.ngrok.io",
  port: "14112",
  user: "root",
  password: "Xd@CJet7gy$e}rw-",
  database: "newquora",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

let sql = "SELECT * FROM admin";

connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end();
