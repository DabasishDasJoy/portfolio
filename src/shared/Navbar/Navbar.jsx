import React from "react";
import { FaBloggerB, FaHome, FaUserAlt } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import NavItem from "../../components/NavItem/NavItem";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex flex-col gap-5 justify-center items-end right-5 top-0 bottom-0">
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
