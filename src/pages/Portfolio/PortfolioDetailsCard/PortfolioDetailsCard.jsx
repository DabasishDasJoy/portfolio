import React from "react";
import { BiCategory, BiLink } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
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
    <div className="relative flex flex-col gap-3 text-white p-5 rounded-md w-[800px] h-[700px] bg-accent overflow-y-scroll">
      <div className="absolute top-0 right-0 px-4 py-2 border rounded-[50%]">
        {children}
      </div>
      <h3 className="text-3xl text-white">{projectTitle}</h3>
      <div className="flex  flex-col gap-2">
        <small className="flex gap-2 items-center">
          <CgFileDocument />
          About: {subtitle}
        </small>
        <small className="flex gap-2 items-center">
          <BiCategory />
          Category:
        </small>
        <small className="flex gap-2 items-center">
          <FaCodeBranch />
          Tech Stack: {techologies}
        </small>
        <small className="flex gap-2 items-center">
          <BiLink />
          Preview: <a href={preview}>Live website</a>
        </small>
        <small className="flex gap-2 items-center">
          <BsCodeSlash />
          GitHub Client: <a href={clientSide}>View Source Code</a>
        </small>
        <small className="flex gap-2 items-center">
          <BsCodeSlash />
          GitHub Server: <a href={serverSide}> View Source Code</a>
        </small>
      </div>

      <div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1280: {
              width: 1290,
              slidesPerView: 1,
            },
          }}
          spaceBetween={5}
          autoplay
          navigation
          className="categoriesSwipper"
        >
          {images.map((img) => (
            <SwiperSlide className="text-white">
              <img src={img} alt="" className="h-[500px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>{description}</div>
      <div>
        <h5 className="text-xl">Features: </h5>
        <ul>
          {features.map((feature) => (
            <li>•{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioDetailsCard;
