import React from "react";

const PersonalInfoOption = ({ field, children }) => {
  return (
    <p className="text-xs leading-8 text-gray-400">
      {field}: <span className="text-white font-medium">{children}</span>
    </p>
  );
};

export default PersonalInfoOption;
