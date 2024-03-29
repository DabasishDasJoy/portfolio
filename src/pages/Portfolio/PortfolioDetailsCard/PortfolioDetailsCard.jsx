import React from "react";
import { BiLink } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const PortfolioDetailsCard = ({
  children,
  project: {
    projectTitle,
    subtitle,
    description,
    techologies,
    preview,
    serverSide,
    clientSide,
    features,
    images,
  },
}) => {
  return (
    <div className="relative flex flex-col gap-5 lg:m-0 m-2 lg:p-10 px-2 py-5 overflow-y-auto rounded-md lg:w-[900px] lg:h-[700px] h-[600px] bg-accent">
      <div className="absolute top-1 right-1">{children}</div>

      {/* heading */}
      <div>
        <h3 className="text-xl text-white m-0">{projectTitle}</h3>
        <h5 className="text-sm">{subtitle}</h5>
      </div>
      <hr className="border-white" />

      {/* Info */}
      <div className="flex  flex-col gap-2 text-gray-300">
        <div className="grid lg:grid-cols-2 gap-2 ">
          <small className="flex gap-2 items-center">
            <BiLink />
            Preview:{" "}
            <a className="text-primary underline" href={preview}>
              Live website
            </a>
          </small>
          <small className="flex gap-2 items-center">
            <BsCodeSlash />
            GitHub Client:{" "}
            <a className="text-primary underline" href={clientSide}>
              View Source Code
            </a>
          </small>
          <small className="flex gap-2 items-center">
            <BsCodeSlash />
            GitHub Server:{" "}
            <a className="text-primary underline" href={serverSide}>
              {" "}
              View Source Code
            </a>
          </small>
        </div>
        <small className="flex gap-2 items-center">
          <FaCodeBranch />
          Tech Stack: <span className="font-semibold">{techologies}</span>
        </small>
      </div>

      {/* slider */}
      <div>
        <Swiper
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   768: {
          //     width: 768,
          //     slidesPerView: 1,
          //   },
          //   1280: {
          //     width: 1290,
          //     slidesPerView: 1,
          //   },
          // }}
          spaceBetween={5}
          autoplay
          navigation
          className="categoriesSwipper"
        >
          {images.map((img) => (
            <SwiperSlide className="text-white">
              <img src={img} alt="" className="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desc */}
      <p className="text-sm text-gray-300">{description}</p>

      {/* Features */}
      <div className="text-gray-300">
        <h5 className="text-md">Features: </h5>
        <ul className=" text-sm">
          {features.map((feature) => (
            <li className="">• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioDetailsCard;
