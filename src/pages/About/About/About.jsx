import { motion, useIsPresent } from "framer-motion";
import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContactInfo from "../ContactInfo/ContactInfo";
import Education from "../Education/Education/Education";
import Skills from "../Skills/Skills/Skills";

const About = () => {
  const isPresent = useIsPresent();
  return (
    <motion.div className="bg-accent min-h-screen lg:px-20 px-2 lg:py-10 py-5">
      {/* header */}

      <PageTitle subtitle="Resume">About Me</PageTitle>

      {/* Contact */}
      <ContactInfo></ContactInfo>
      <Skills></Skills>
      <Education></Education>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-accent z-10"
      />
    </motion.div>
  );
};

export default About;
