import React from "react";

const PageTitle = ({ children, subtitle }) => {
  return (
    <div className="">
      <p className="text-primary flex items-center gap-2">
        {subtitle} <hr className="w-10 border-primary opacity-90" />
      </p>
      <h1 className="font-bold text-[55px] leading-[72px] text-white">
        {children}
      </h1>
    </div>
  );
};

export default PageTitle;
