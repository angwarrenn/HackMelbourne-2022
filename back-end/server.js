require("dotenv").config();

const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

app.get("/login", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
