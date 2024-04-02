const db = require("../db");

const Camera = require("./cameraModel");

const findAll = async () => {
  return await Camera.findAll();
};

module.exports = {
  findAll,
};
