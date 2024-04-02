const express = require("express");
const router = express.Router();
const cameraController = require("./cameraController");

router.get("/", cameraController.getAllCameras);
// router.get("/random", cameraController.getRandomCamera);

module.exports = router;
