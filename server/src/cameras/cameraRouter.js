const express = require("express");
const router = express.Router();
const cameraController = require("./cameraController");

router.post("/", cameraController.createCamera);
router.get("/", cameraController.getAllCameras);

module.exports = router;
