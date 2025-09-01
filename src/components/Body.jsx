import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
