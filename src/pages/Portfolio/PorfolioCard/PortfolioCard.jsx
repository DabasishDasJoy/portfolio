import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = () => {
  return (
    <div className="image-wrapper relative overflow-hidden">
      <img
        src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__480.jpg"
        alt=""
        className="blurred  zoom block w-full h-full object-cover object-center"
      />
      <div className="content slide-up fade absolute inset-0 flex flex-col justify-center p-5">
        <h3 className="text-2xl font-bold">Project Title</h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ut?
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
