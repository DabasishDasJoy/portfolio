import React from "react";
import Introduction from "../Introduction/Introduction";
import MyImage from "../MyImage/MyImage";

const Home = () => {
  return (
    <div className="min-h-screen bg-black grid gap-10 px-5 lg:grid-cols-7 overflow-hidden">
      <div className="flex items-end col-span-3">
        <MyImage></MyImage>
      </div>
      <div className="flex items-center col-span-4">
        <Introduction></Introduction>
      </div>
    </div>
  );
};

export default Home;
