import React from "react";

function CameraItem({ camera }) {
  const imageUrl = camera.imageUrl || "/camera.webp";

  const handleCopyToClipboard = async () => {
    if (camera.rtsp) {
      try {
        await navigator.clipboard.writeText(camera.rtsp);
        alert("RTSP URL copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <div className="camera-item" onClick={handleCopyToClipboard}>
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
