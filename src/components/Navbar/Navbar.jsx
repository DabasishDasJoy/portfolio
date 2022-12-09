import React from "react";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="absolute flex flex-col gap-5 justify-center items-center border-2 right-5 top-0 bottom-0">
      <div className="nav-item flex items-center rounded-3xl">
        <p className="nav-text overflow-hidden">About</p>
        <div className="nav-icon rounded-[50%] p-2 bg-gray-300">
          <FaHome></FaHome>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
