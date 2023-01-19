import React from "react";

const PageTitle = ({ children, subtitle }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="600" className="lg:mb-5 mb-2">
      <span className="text-primary flex items-center gap-2">
        {subtitle} <hr className="w-10 border-primary opacity-90" />
      </span>
      <h1 className="font-extrabold lg:text-[55px] text-2xl lg:leading-[72px] text-white">
        {children}
      </h1>
    </div>
  );
};

export default PageTitle;
