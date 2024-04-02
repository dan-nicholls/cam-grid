const cameraDal = require("./cameraDal");

const createCamera = async (req, res) => {
  try {
    const cameraData = req.body;
    const camera = await cameraDal.createCamera(cameraData);
    res.status(201).json(camera);
  } catch (err) {
    console.error("Error creating camera in controller: ", err);
    res.status(500).json({ message: "Failed to create camera" });
  }
};

const getAllCameras = async (req, res) => {
  try {
    const cameras = await cameraDal.findAllCameras();
    res.json(cameras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createCamera,
  getAllCameras,
};
