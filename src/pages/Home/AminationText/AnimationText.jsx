import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimationText = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "MERN Stack Developer",
        1000,
        "React.js Developer",
        1000,
        "Web Devloper",
        1000,
      ]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: "3rem", fontWeight: "bold" }}
      wrapper="h1" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
};

export default AnimationText;
