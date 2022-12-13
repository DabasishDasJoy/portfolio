import emailjs from "@emailjs/browser";
import { motion, useIsPresent } from "framer-motion";
import React, { useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { MdCall, MdLocationOn } from "react-icons/md";
import swal from "sweetalert";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import PageTitle from "../../../components/PageTitle/PageTitle";

const Contact = () => {
  const form = useRef();
  const isPresent = useIsPresent();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_service_id,
        process.env.REACT_APP_template_id,
        form.current,
        process.env.REACT_APP_public_key
      )
      .then(
        (result) => {
          if (result.status === 200) {
            swal(
              "Thanks for Contacting Me.",
              "I will reach you out soon.",
              "success"
            );
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-accent min-h-screen px-20 py-10">
      <PageTitle subtitle={"Contact Me"}>Let's Discuss</PageTitle>

      <section
        data-aos="zoom-in"
        data-aos-duration="600"
        className="text-white flex my-10"
      >
        <div className="flex flex-col gap-5 text-sm">
          <h6 className="text-xl font-bold">Please Feel Free to Let Me Know</h6>
          <p className="">
            If you have any queries, please feel free to let me know.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MdLocationOn className="w-6 h-6" />
              <p>Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <MdCall className="w-6 h-6" />
              <p>+880 1571 763498</p>
            </div>
            <div className="flex items-center gap-2">
              <GrMail className="w-6 h-6" />
              <p>dabasish.joy9@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/dabasishdas.joy/"
              target={"_blank"}
              rel="noreferrer"
              className="border hover:bg-primary transition-all delay-75 p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/DabasishDasJoy"
              target={"_blank"}
              rel="noreferrer"
              className="border hover:bg-primary transition-all delay-75 p-3 rounded-full"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dabasishjoy/"
              target={"_blank"}
              rel="noreferrer"
              className="border hover:bg-primary transition-all delay-75 p-3 rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col w-full px-10"
        >
          <div className="grid grid-cols-6 gap-5 text-white">
            <div className="col-span-full sm:col-span-3">
              <input
                id="Name"
                name="user_name"
                type="text"
                placeholder="Name"
                className="w-full rounded-full px-3 py-2 bg-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full rounded-full px-3 py-2 bg-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div className="col-span-full">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-full px-3 py-2 bg-gray-700 placeholder:text-gray-300"
              />
            </div>
            <div className="col-span-full">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full h-[200px] rounded-xl px-3 py-2 bg-gray-700 placeholder:text-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="mt-5">
            <ButtonPrimary type="submit" name={"Send Me"}>
              <FaTelegramPlane />
            </ButtonPrimary>
          </div>
        </form>
      </section>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 bg-accent z-10"
      />
    </div>
  );
};

export default Contact;
