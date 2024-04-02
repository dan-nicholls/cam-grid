const express = require("express");
const router = express.Router();
const cameraController = require("./cameraController");

router.post("/", cameraController.createCamera);
router.get("/", cameraController.getAllCameras);
router.get("/:id", cameraController.getCameraById);
router.patch("/:id", cameraController.updateCamera);
router.delete("/:id", cameraController.deleteCamera);

module.exports = router;
