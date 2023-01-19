import { motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import AnimationText from "../AminationText/AnimationText";

const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const Introduction = () => {
  return (
    <motion.div className="">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
        className="text-base"
      >
        <p>
          Hi There,{" "}
          <span>
            I am{" "}
            <span className="text-xl text-primary font-bold">
              Dabsaish Das Joy
            </span>
          </span>
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <AnimationText></AnimationText>
      </motion.div>
      <motion.p variants={itemVariants}>
        I am passionate about building excellent software that improves <br />{" "}
        the lives of those around me.
      </motion.p>

      <motion.div variants={itemVariants} className="flex lg:gap-5 gap-5 mt-10">
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://drive.google.com/file/d/1_6YKqL6PbPJ4cWalHFezTsufF9gbXqC7/view?usp=sharing"
        >
          <ButtonPrimary name={"Resume"}>
            <FaDownload />
          </ButtonPrimary>
        </a>
        <Link to={"/contact"}>
          <ButtonPrimary name={"Hire Me"}>
            <AiOutlineArrowRight />
          </ButtonPrimary>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
