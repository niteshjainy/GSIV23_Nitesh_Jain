import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div
      className="loader-container flex-align-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div id="box-outer">
        <div id="box-inner">
          <div id="box"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
