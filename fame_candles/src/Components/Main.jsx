import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const Main = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <Navbar />
      <Home />
    </div>
  );
};

export default Main;
