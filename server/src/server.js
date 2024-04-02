const express = require("express");
const cors = require("cors");
const sequilize = require("./db");

const cameraRouter = require("./cameras/cameraRouter");

const app = express();
const port = 3002;
const host = "0.0.0.0";

app.use(cors());
app.use("/api/cameras", cameraRouter);

app.get("/", (req, res) => {
  res.send("cam-grid API reached.");
});

sequilize.sync().then(() => {
  app.listen(port, host, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}).catch((err) => {
  console.log("Unable to connect to the DB");
});
