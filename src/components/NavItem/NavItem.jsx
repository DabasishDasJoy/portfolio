import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ children, navigate, name }) => {
  return (
    <div className="nav-item flex items-center  rounded-3xl">
      <p className="nav-text overflow-hidden text-white font-medium">{name}</p>
      <Link
        to={navigate}
        className="nav-icon rounded-[50%] p-3 bg-gray-300 hover:bg-primary hover:text-white"
      >
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
