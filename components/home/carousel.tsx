"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { CarouselImages, carouselData } from "@/utils/constants";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(showNextElement, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNextElement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData?.length);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('blueframe.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          // width: "36.7%",
          // height: "70%",
        }}
        className="absolute lg:top-[20%] lg:w-[36.7%] lg:h-[70%] w-[43%] h-[50%] top-[6%] text-white z-[30]"
      >
        <div className="carousel relative">
          {carouselData.map((data, index) => (
            <div
              key={index}
              className={`fade-in w-[80%] mr-[0px] lg:top-[50px] top-[10px] right-[0px] lg:pr-12 pr-4 ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <h6 className="text-[#E47B0E] lg:text-sm text-[7px] font-poppins font-[500] lg:mb-3 mb-1">
                {data.title}
              </h6>
              <p className="lg:text-[30px] text-[9px] font-nunito font-[900] leading-[1.5] lg:mb-6 mb-2">
                {data.subtitle}
              </p>
              <p className="lg:text-sm text-[7px] font-nunito lg:mb-6 mb-3 leading-[1.7]">
                {data.description}
              </p>
              <a
                href="#"
                className="bg-[#E47B0E] text-white rounded-[3px] py-1 px-4 lg:py-3 lg:px-8 font-[400] lg:text-[13.5px] text-[8px] font-poppins flex items-center gap-2 w-fit hover:opacity-80"
              >
                About Us
                <Icon icon="ph:arrow-right-bold"></Icon>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:pt-[85px] pt-10 w-[76%] mr-[0px] mx-auto">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 500000,
            disableOnInteraction: true,
          }}
          className="myswiper"
        >
          {CarouselImages?.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                alt={`CarouselImage${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel;
