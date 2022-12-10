import React from "react";
import { FaDownload } from "react-icons/fa";
import img from "../../../assets/IMG_5524.jpg";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import PersonalInfoOption from "../../../components/PersonalInfoOption/PersonalInfoOption";

const ContactInfo = () => {
  return (
    <section className="grid grid-cols-2 gap-20 my-10">
      {/* image */}
      <div className="">
        <img
          src={img}
          alt=""
          className="img-full h-full object-cover rounded-md"
        />
      </div>

      {/* Informations */}
      <div className="text-white flex flex-col gap-5">
        {/* Intro */}
        <div>
          <h4 className="font-semibold text-2xl leading-10">
            I am Dabasish Das Joy
          </h4>
          <p>A passionate full stack developer</p>
          <p className="text-gray-400 mt-2">
            <small className="">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfol
            </small>
          </p>
        </div>

        <hr className="border-gray-500" />

        {/* Infos */}
        <div>
          <h5 className="uppercase font-semibold text-md leading-7">
            Personal Info
          </h5>
          <div className="grid grid-cols-2">
            <PersonalInfoOption field="Name">
              Dabasish Das Joy
            </PersonalInfoOption>
            <PersonalInfoOption field="Address">
              Chattogram, Bangladesh
            </PersonalInfoOption>
            <PersonalInfoOption field="Phone">
              +880 1571 763698
            </PersonalInfoOption>
            <PersonalInfoOption field="Email">
              dabasish.joy9@gmail.com
            </PersonalInfoOption>
            <PersonalInfoOption field="Nationality">
              Bangladeshi
            </PersonalInfoOption>
            <PersonalInfoOption field="Language">
              Bengali, English, Hindi
            </PersonalInfoOption>
          </div>
        </div>
        <div>
          <ButtonPrimary name={"Resume"}>
            <FaDownload />
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
