import React from "react";
import { FiGithub } from "react-icons/fi";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import myImg from "../../../assets/1-01-removebg-preview.png";

const MyImage = () => {
  return (
    <div className="inline-block relative">
      <img src={myImg} alt="" className="z-10 relative w-full lg:h-[700px]" />

      <div className="lg:block">
        {/* Circle */}
        <div className="border-r-[2px] -rotate-12 rounded-[50%] lg:w-[550px] w-[300px] h-[300px] lg:h-[550px] absolute lg:top-20 top-10 lg:-left-6 -left-1 border-gray-500"></div>

        {/* Social Icons */}
        <div className="z-40 rounded-[50%] lg:w-[550px] w-[300px] h-[300px] lg:h-[550px] absolute lg:top-20 top-10 lg:-left-6 -left-1 text-black">
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.facebook.com/dabasishdas.joy/"}
            className="social-icon right-10 lg:right-[90px]  top-1 lg:top-5 "
          >
            <ImFacebook></ImFacebook>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.facebook.com/dabasishdas.joy/"}
            className="social-icon  -right-2 top-16 lg:-right-1 lg:top-[150px]"
          >
            <ImLinkedin2></ImLinkedin2>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.facebook.com/dabasishdas.joy/"}
            className="social-icon lg:-right-3 lg:top-[310px] -right-2 top-36 "
          >
            <FiGithub></FiGithub>
          </a>
        </div>

        {/* Second circle */}
        <div className="lg:block hidden border-r-[1px] -rotate-12 rounded-[50%] w-[450px] h-[450px] absolute top-[150px] left-2   border-gray-600"></div>
        <div className="border-r-[1px] lg:block hidden -rotate-12 rounded-[50%] w-[650px] h-[650px] absolute top-10 -left-16  border-gray-600"></div>
      </div>
    </div>
  );
};

export default MyImage;
