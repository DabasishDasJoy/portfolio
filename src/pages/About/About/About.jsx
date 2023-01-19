import { motion } from "framer-motion";
import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContactInfo from "../ContactInfo/ContactInfo";
import Education from "../Education/Education/Education";
import Skills from "../Skills/Skills/Skills";

const About = () => {
  return (
    <motion.div className="bg-accent min-h-screen section">
      {/* header */}

      <PageTitle subtitle="Resume">About Me</PageTitle>

      {/* Contact */}
      <ContactInfo></ContactInfo>
      <Skills></Skills>
      <Education></Education>
    </motion.div>
  );
};

export default About;
