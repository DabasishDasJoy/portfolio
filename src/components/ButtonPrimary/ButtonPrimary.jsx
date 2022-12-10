import React from "react";

const ButtonPrimary = ({ children, name }) => {
  return (
    <button className="flex items-center border rounded-full transition-colors delay-100 hover:bg-accent">
      <div className="bg-accent rounded-full p-3">{children}</div>
      <span className="mx-5">{name}</span>
    </button>
  );
};

export default ButtonPrimary;
