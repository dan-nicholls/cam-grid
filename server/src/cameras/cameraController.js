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
    console.error("Error fetching all cameras in controller: ", err);
    res.status(500).send({ message: "Failed to fetch all cameras" });
  }
};

const getCameraById = async (req, res) => {
  try {
    const id = req.params.id;
    const camera = await cameraDal.findCameraById(id);
    if (camera) {
      res.json(camera);
    } else {
      res.status(404).json({ message: "Camera not found!" });
    }
  } catch (err) {
    console.error("Error fetching camera by ID in controller: ", err);
    res.status(500).json({ message: "Failed to fetch camera" });
  }
};

const updateCamera = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedCamera = await cameraDal.updateCamera(id, updateData);

    if (updatedCamera) {
      res.json(updatedCamera);
    } else {
      res.status(404).json({ message: "Camera not found!" });
    }
  } catch (err) {
    console.error("Error updating camera by ID in controller: ", err);
    res.status(500).json({ message: "Failed to update camera" });
  }
};

const deleteCamera = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await cameraDal.deleteCamera(id);

    if (success) {
      res.status(200).json({ message: "Camera successfully deleted" });
    } else {
      res.status(404).json({ message: "Camera not found!" });
    }
  } catch (err) {
    console.error("Error deleting camera by ID in controller: ", err);
    res.status(500).json({ message: "Failed to delete camera" });
  }
};

module.exports = {
  createCamera,
  getAllCameras,
  getCameraById,
  updateCamera,
  deleteCamera,
};
