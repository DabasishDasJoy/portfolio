import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({
  project: { _id, thumnail, projectTitle, subtitle },
}) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="600"
      className="image-wrapper relative overflow-hidden rounded-md text-white"
    >
      <img
        src={thumnail}
        alt=""
        className="blurred zoom block w-full object-cover object-center"
      />
      {/* content */}
      <div className="content slide-up fade absolute inset-0">
        <div className="content-items absolute left-7 right-7">
          <h3 className="text-xl font-bold">{projectTitle}</h3>
          <hr className="title-bar border-white bg-white h-[3px]" />
          <p className="text-md my-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
