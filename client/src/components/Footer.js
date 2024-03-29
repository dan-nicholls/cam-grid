import React from "react";

function StickyFooter() {
  const handleRandomCamera = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/cameras/random");
      const camera = await response.json();
      await navigator.clipboard.writeText(camera.rtsp);
      alert("Random camera info copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="footer">
      <button onClick={handleRandomCamera}>Random RTSP</button>
    </div>
  );
}

export default StickyFooter;
