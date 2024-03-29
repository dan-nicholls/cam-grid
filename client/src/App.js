import React from "react";
import NavBar from "./components/NavBar";
import CameraGrid from "./components/CameraGrid";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <CameraGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
