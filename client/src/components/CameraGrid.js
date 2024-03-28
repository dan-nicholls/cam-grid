import React from "react";
import CameraItem from "./CameraItem";

function CameraGrid() {
  const cameras = [{
    id: 1,
    ip: "192.168.0.1",
    name: "Camera #1",
    rtsp: "rtsp://192.168.0.1/test",
    imageUrl: "",
  }, {
    id: 2,
    ip: "192.168.0.2",
    name: "Camera #2",
    rtsp: "rtsp://192.168.0.2/test",
    imageUrl: "",
  }, {
    id: 3,
    ip: "192.168.0.3",
    name: "Camera #3",
    rtsp: "rtsp://192.168.0.3/test",
    imageUrl: "",
  }];

  return (
    <div className="camera-grid">
      {cameras.map((camera) => <CameraItem key={camera.id} camera={camera} />)}
    </div>
  );
}

export default CameraGrid;
