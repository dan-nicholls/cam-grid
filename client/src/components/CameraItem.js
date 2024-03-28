import React from "react";

function CameraItem({ camera }) {
  const imageUrl = camera.imageUrl || "/camera.webp";

  return (
    <div className="camera-item">
      <div className="camera-image-container">
        <img src={imageUrl} alt={`Camera ${camera.name}`} />
        <div className="overlay overlay-top">
          <p className="camera-name">{camera.name}</p>
        </div>
        <div className="overlay overlay-bottom">
          <p className="camera-ip">{camera.ip}</p>
        </div>
      </div>
    </div>
  );
}

export default CameraItem;
