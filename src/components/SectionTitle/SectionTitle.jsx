import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h3 className="font-bold lg:text-xl text-lg leading-[72px] text-white lg:my-10 my-4">
      {children}
    </h3>
  );
};

export default SectionTitle;
