import React from "react";
import { GoBriefcase } from "react-icons/go";
const EducationCard = ({
  education: { duration, major, institute, location },
}) => {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="600"
      className="border-l relative px-6"
    >
      {/* {animate || (!animat  e && setAnimate(!animate))} */}
      <div className="absolute -top-1 left-[-20px] border rounded-full p-2 bg-primary">
        <GoBriefcase />
      </div>
      <span className="border rounded-full text-xs px-2 bg-gray-500">
        {duration}
      </span>
      <h3 className="text-md">{major}</h3>
      <p className="text-sm mt-3">{institute}</p>
      <p className="text-sm">{location}</p>
    </div>
  );
};

export default EducationCard;
