import React from "react";

const Skill = ({ sk: { title, image } }) => {
  return (
    <div
      data-aos="zoom-in-right"
      className="flex flex-col items-center justify-center gap-2 rounded-md py-3 "
    >
      <img
        src={image}
        alt=""
        className="w-[60px] h-[60px] rounded-full bg-white"
      />
      <p className="text-center font-semibold text-white text-md">{title}</p>
    </div>
  );
};

export default Skill;
