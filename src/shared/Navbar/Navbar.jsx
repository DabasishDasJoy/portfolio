import React from "react";
import { FaBloggerB, FaHome, FaUserAlt } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import NavItem from "../../components/NavItem/NavItem";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="fixed z-40 flex lg:flex-col gap-5 justify-center items-end lg:right-5 lg:left-auto left-0 right-0 top-0 lg:bottom-0">
      <NavItem navigate="/" name={"Home"}>
        <FaHome />
      </NavItem>
      <NavItem navigate="/about" name={"About"}>
        <FaUserAlt />
      </NavItem>
      <NavItem navigate="/blogs" name={"Blogs"}>
        <FaBloggerB />
      </NavItem>
      <NavItem navigate="/portfolio" name={"Portfolio"}>
        <GoBriefcase />
      </NavItem>
      <NavItem navigate="/contact" name={"Contact"}>
        <IoIosMail />
      </NavItem>
    </div>
  );
};

export default Navbar;
