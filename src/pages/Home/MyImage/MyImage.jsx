import React from "react";
import { FiGithub } from "react-icons/fi";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import myImg from "../../../assets/1-01-removebg-preview.png";

const MyImage = () => {
  return (
    <div className="inline-block relative">
      <img src={myImg} alt="" className="z-10 relative w-full h-[700px]" />

      {/* Circle */}
      <div className="border-r-[2px] -rotate-12 rounded-[50%] w-[550px] h-[550px] absolute top-20 -left-6   border-gray-500"></div>

      {/* Social Icons */}
      <div className="z-50 rounded-[50%] w-[550px] h-[550px] absolute top-20 -left-6 text-black">
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.facebook.com/dabasishdas.joy/"}
          className="cursor-pointer border rounded-[50%] p-3 absolute right-[90px] top-5 bg-gray-300"
        >
          <ImFacebook></ImFacebook>
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.facebook.com/dabasishdas.joy/"}
          className="cursor-pointer border rounded-[50%] p-3 absolute -right-1 top-[150px] bg-gray-300"
        >
          <ImLinkedin2></ImLinkedin2>
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.facebook.com/dabasishdas.joy/"}
          className="cursor-pointer border rounded-[50%] p-3 absolute -right-3 top-[310px] bg-gray-300"
        >
          <FiGithub></FiGithub>
        </a>
      </div>

      {/* Second circle */}
      <div className="border-r-[1px] -rotate-12 rounded-[50%] w-[450px] h-[450px] absolute top-[150px] left-2   border-gray-600"></div>
      <div className="border-r-[1px] -rotate-12 rounded-[50%] w-[650px] h-[650px] absolute top-10 -left-16  border-gray-600"></div>
    </div>
  );
};

export default MyImage;
