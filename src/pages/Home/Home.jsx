import React from "react";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import myImg from "../../assets/1-01-removebg-preview.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="inline-block mt-32 relative">
        <img src={myImg} alt="" className="z-10 relative" />

        {/* Circle */}
        <div className="border-r-[1px] -rotate-12 rounded-[50%] w-[500px] h-[500px] absolute top-20 left-0 border-b-[1px] border-gray-500"></div>

        {/* Social Icons */}
        <div className="z-50 rounded-[50%] w-[500px] h-[500px] absolute top-20 left-0">
          <Link
            to={"https://www.facebook.com/dabasishdas.joy/"}
            className="cursor-pointer border rounded-[50%] p-3 absolute right-9 top-10 bg-primary"
          >
            <ImFacebook></ImFacebook>
          </Link>
          <Link
            // to={"https://www.facebook.com/dabasishdas.joy/"}
            className="cursor-pointer border rounded-[50%] p-3 absolute -right-3 top-[150px] bg-primary"
          >
            <ImFacebook></ImFacebook>
          </Link>
          <Link
            // to={"https://www.facebook.com/dabasishdas.joy/"}
            className="cursor-pointer border rounded-[50%] p-3 absolute -right-2 top-[250px] bg-primary"
          >
            <ImFacebook></ImFacebook>
          </Link>
        </div>

        {/* Second circle */}
        {/* <div className="border-r rounded-[50%] w-[300px] h-[300px] absolute top-20 left-28 -rotate-45 border-b"></div> */}
      </div>
    </div>
  );
};

export default Home;
