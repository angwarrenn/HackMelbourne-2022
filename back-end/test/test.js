require("dotenv").config();

const express = require("express");
const app = express();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["*"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("update", (obj) => {
    console.log("update: " + obj);
  });

  socket.on("update", (obj) => {
    io.emit("update", obj);
  });
});

const { createTodo, readTodo, updateTodo, deleteTodo, listTodo } =
  createTodoHandlers(components);
