require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test-get", (req, res) => {
  res.json({ success: true });
});

app.post("/test-post", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/login", (req, res) => {
  res.json(req.body);
});

app.post("/signup", (req, res) => {
  res.json(req.body);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
