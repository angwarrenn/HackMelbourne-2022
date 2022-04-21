const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "tcp://0.tcp.au.ngrok.io",
  port: "14112",
  user: "root",
  password: "Xd@CJet7gy$e}rw-",
  database: "newquora",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});
