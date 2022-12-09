import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col gap-5 justify-center items-end right-5 top-0 bottom-0">
      <div className="nav-item flex items-center rounded-3xl">
        <p className="nav-text overflow-hidden">Home</p>
        <Link to={"/"} className="nav-icon rounded-[50%] p-2 bg-gray-300">
          <FaHome></FaHome>
        </Link>
      </div>
      <div className="nav-item flex items-center rounded-3xl">
        <p className="nav-text overflow-hidden">Blog</p>
        <Link className="nav-icon rounded-[50%] p-2 bg-gray-300">
          <FaHome></FaHome>
        </Link>
      </div>
      <div className="nav-item flex items-center rounded-3xl">
        <p className="nav-text overflow-hidden">Portfolio</p>
        <Link className="nav-icon rounded-[50%] p-2 bg-gray-300">
          <FaHome></FaHome>
        </Link>
      </div>
      <div className="nav-item flex items-center rounded-3xl">
        <p className="nav-text overflow-hidden">Skills</p>
        <Link className="nav-icon rounded-[50%] p-2 bg-gray-300">
          <FaHome></FaHome>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
