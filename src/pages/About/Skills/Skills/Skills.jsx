import React from "react";
import c from "../../../../assets/c++.png";
import css from "../../../../assets/css3.png";
import es6 from "../../../../assets/es6.png";
import html from "../../../../assets/html5.png";
import javascript from "../../../../assets/js.png";
import mongodb from "../../../../assets/mongodb.png";
import node from "../../../../assets/node_js.png";
import express from "../../../../assets/pngegg.png";
import react from "../../../../assets/React.png";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Skill from "../Skill/Skill";

const Skills = () => {
  const skills = [
    {
      title: "C/C++",
      image: c,
    },
    {
      title: "HTML5",
      image: html,
    },
    {
      title: "CSS3",
      image: css,
    },
    {
      title: "JavaScript",
      image: javascript,
    },
    {
      title: "ES6",
      image: es6,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
    {
      title: "Express JS",
      image: express,
    },
    {
      title: "React JS",
      image: react,
    },
    {
      title: "Node JS",
      image: node,
    },
  ];
  return (
    <section>
      <SectionTitle>Language & Skills</SectionTitle>
      <div className="grid lg:grid-cols-5 grid-cols-2 mx-auto gap-5">
        {skills.map((sk, idx) => (
          <Skill key={idx} sk={sk}></Skill>
        ))}
      </div>
    </section>
  );
};

export default Skills;
