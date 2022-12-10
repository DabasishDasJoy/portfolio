import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h3 className="font-bold text-3xl leading-[72px] text-white my-10">
      {children}
    </h3>
  );
};

export default SectionTitle;
