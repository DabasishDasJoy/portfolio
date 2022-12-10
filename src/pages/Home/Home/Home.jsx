import React from "react";
import Introduction from "../Introduction/Introduction";
import MyImage from "../MyImage/MyImage";

const Home = () => {
  return (
    <div className="min-h-screen bg-black grid grid-cols-7 overflow-hidden">
      <div className="flex items-end pl-10  col-span-3">
        <MyImage></MyImage>
      </div>
      <div className="flex items-center px-10 col-span-4">
        <Introduction></Introduction>
      </div>
    </div>
  );
};

export default Home;
