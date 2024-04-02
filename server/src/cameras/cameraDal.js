const db = require("../db");

const Camera = require("./cameraModel");

const createCamera = async (cameraData) => {
  try {
    const camera = await Camera.create(cameraData);
    return camera;
  } catch (err) {
    console.error("Error creating camera: ", err);
    throw err;
  }
};

const findAllCameras = async () => {
  try {
    const cameras = await Camera.findAll();
    return cameras;
  } catch (err) {
    console.error("Error finding all cameras: ", err);
    throw err;
  }
};

const findCameraById = async (id) => {
  try {
    const camera = await Camera.findByPk(id);
    return camera;
  } catch (err) {
    console.error("Error finding camera by id: ", err);
    throw err;
  }
};

const updateCamera = async (id, updateData) => {
  try {
    const [updated] = await Camera.update(updateData, { where: { id: id } });
    if (updated) {
      const updatedCamera = await Camera.findByPk(id);
      return updatedCamera;
    }
    throw new Error(`Camera with ID ${id} not found!`);
  } catch (err) {
    console.error("Error updating camera by id: ", err);
    throw err;
  }
};

const deleteCamera = async (id) => {
  try {
    const deleted = await Camera.destroy({ where: { id: id } });
    if (deleted) {
      return true;
    }
    throw new Error(`Camera with ID ${id} not found!`);
  } catch (err) {
    console.error("Error deleting camera with id: ", err);
  }
};

module.exports = {
  createCamera,
  findAllCameras,
  findCameraById,
  updateCamera,
  deleteCamera,
};
