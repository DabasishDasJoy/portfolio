import React from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import EducationCard from "../EducationCard/EducationCard";

const Education = () => {
  const educationDetails = [
    {
      duration: "2017 - 2022",
      institute: "Port City International University",
      major: "Bachelor of Science in Computer Science & Engineering",
      location: "Chattogram, Bangladesh",
    },
    {
      duration: "2013 - 2016",
      institute: "Gachhbaria Govt. College",
      major: "Higher Secondary",
      location: "Chattogram, Bangladesh",
    },
    {
      duration: "2010 - 2013",
      institute: "Lama Govt. High School",
      major: "Secondary",
      location: "Bandarban, Bangladesh",
    },
  ];
  return (
    <div className="text-white">
      <SectionTitle>Education</SectionTitle>
      <div className="mx-10 grid grid-cols-2 gap-10">
        {educationDetails.map((education, idx) => (
          <EducationCard key={idx} education={education}></EducationCard>
        ))}
      </div>
    </div>
  );
};

export default Education;
