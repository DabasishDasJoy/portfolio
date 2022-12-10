import React from "react";
import AnimationText from "../AminationText/AnimationText";

const Introduction = () => {
  return (
    <div className="text-white">
      <h3 className="text-2xl leading-8">
        Hi, I am <span className="text-accent font-bold">Dabsish Das Joy</span>
      </h3>
      <AnimationText></AnimationText>
      <p>
        I am passionate about building excellent software that improves <br />{" "}
        the lives of those around me.
      </p>
    </div>
  );
};

export default Introduction;
