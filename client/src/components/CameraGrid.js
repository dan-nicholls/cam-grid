import React, { useEffect, useState } from "react";
import CameraItem from "./CameraItem";

function CameraGrid() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await fetch("http://localhost:3002/api/cameras");
      const data = await response.json();
      setCameras(data);
    };

    fetchCameras();
  }, []);

  return (
    <div className="camera-grid">
      {cameras.map((camera) => <CameraItem key={camera.id} camera={camera} />)}
    </div>
  );
}

export default CameraGrid;
