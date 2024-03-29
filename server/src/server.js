const express = require("express");
const cors = require("cors");

const app = express();
const port = 3002;
const host = "0.0.0.0";

app.use(cors());

const cameras = require("./cameras.json");

const cameras = app.get("/api/cameras", (req, res) => {
  res.json(cameras);
});

app.get("/", (req, res) => {
  res.send("cam-grid API reached.");
});

app.listen(port, host, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
