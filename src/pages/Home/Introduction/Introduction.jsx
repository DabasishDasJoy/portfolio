import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import AnimationText from "../AminationText/AnimationText";

const Introduction = () => {
  return (
    <div className="text-white">
      <h3 className="text-2xl leading-8">
        Hi, I am <span className="text-primary font-bold">Dabsish Das Joy</span>
      </h3>
      <AnimationText></AnimationText>
      <p>
        I am passionate about building excellent software that improves <br />{" "}
        the lives of those around me.
      </p>
      <div className="flex gap-5 mt-10">
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://drive.google.com/file/d/1_6YKqL6PbPJ4cWalHFezTsufF9gbXqC7/view?usp=sharing"
        >
          <ButtonPrimary name={"Resume"}>
            <FaDownload />
          </ButtonPrimary>
        </a>
        <ButtonPrimary name={"Hire Me"}>
          <AiOutlineArrowRight />
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Introduction;
