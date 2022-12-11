import React from "react";

const Skill = ({ sk: { title, image } }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md py-3 ">
      <img
        src={image}
        alt=""
        className="w-[80px] h-[80px] rounded-full bg-white"
      />
      <p className="text-center font-semibold text-white text-md">{title}</p>
    </div>
  );
};

export default Skill;
