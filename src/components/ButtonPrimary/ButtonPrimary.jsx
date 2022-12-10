import React from "react";

const ButtonPrimary = ({ children, name }) => {
  return (
    <button className="flex items-center border rounded-full transition-colors delay-100 hover:bg-primary">
      <div className="bg-primary rounded-full p-3">{children}</div>
      <span className="mx-5 text-sm leading-7">{name}</span>
    </button>
  );
};

export default ButtonPrimary;
