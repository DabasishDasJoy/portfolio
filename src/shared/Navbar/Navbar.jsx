import React, { useState } from "react";
import { FaBars, FaBloggerB, FaHome, FaUserAlt } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavItem from "../../components/NavItem/NavItem";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="fixed flex flex-col items-end justify-center z-50 lg:right-5 lg:left-auto left-0 right-0 top-0 lg:bottom-0">
      <div className="lg:flex hidden flex-col gap-5 items-end">
        <NavItem navigate="/" name={"Home"}>
          <FaHome />
        </NavItem>
        <NavItem navigate="/about" name={"About"}>
          <FaUserAlt />
        </NavItem>
        <NavItem navigate="/portfolio" name={"Portfolio"}>
          <GoBriefcase />
        </NavItem>
        <NavItem navigate="/contact" name={"Contact"}>
          <IoIosMail />
        </NavItem>
        <NavItem navigate="/blogs" name={"Blogs"}>
          <FaBloggerB />
        </NavItem>
      </div>
      <div className="lg:hidden text-white p-2 flex justify-center items-center">
        <button className="p-1 m-1" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {/* Menubar side */}
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-[100%]"
        } bg-accent absolute top-0 bottom-0 right-0 h-screen z-50 text-white w-[60%] menu-bar lg:hidden`}
      >
        <div className="p-2 text-left">
          <button
            className="border rounded-full p-1"
            onClick={() => setOpen(!open)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 h-[50%]">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/blogs"}>Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
