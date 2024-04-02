const cameraDal = require("./cameraDal");

const getAllCameras = async (req, res) => {
  try {
    const cameras = await cameraDal.findAll();
    res.json(cameras);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllCameras,
};
