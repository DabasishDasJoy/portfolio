import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = () => {
  return (
    <div className="image-wrapper relative overflow-hidden rounded-md">
      <img
        src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__480.jpg"
        alt=""
        className="blurred zoom block w-full h-full object-cover object-center"
      />
      {/* content */}
      <div className="content slide-up fade absolute inset-0">
        <div className="content-items absolute left-7 right-7">
          <h3 className="text-xl font-bold">Project Title</h3>
          <hr className="title-bar border-black bg-black h-[3px]" />
          <p className="text-sm">A service review website of an individual.</p>
          <div className="flex gap-5">
            <span className="text-xs rounded-full p-1 bg-primary text-white">
              React
            </span>
            <span className="text-xs rounded-full p-1 bg-primary text-white">
              Node
            </span>
            <span className="text-xs rounded-full p-1 bg-primary text-white">
              Express
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
