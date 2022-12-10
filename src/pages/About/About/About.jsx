import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";

import ContactInfo from "../ContactInfo/ContactInfo";
import Education from "../Education/Education/Education";
import Skills from "../Skills/Skills/Skills";

const About = () => {
  return (
    <div className="bg-accent min-h-screen px-20 py-10">
      {/* header */}
      <PageTitle subtitle="Resume">About Me</PageTitle>

      {/* Contact */}
      <ContactInfo></ContactInfo>
      <Skills></Skills>
      <Education></Education>
    </div>
  );
};

export default About;
