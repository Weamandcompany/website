"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { CarouselImages, carouselData } from "@/utils/constants";
import tw from "tailwind-styled-components";

const HomeCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(showNextElement, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNextElement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData?.length);
  };

  return (
    <>
      <Wrapper className="bg-bgblueframe  bg-no-repeat bg-contain lg:block hidden">
        <div className="carousel relative">
          {carouselData.map((data, index) => (
            <div
              key={index}
              className={`fade-in w-[80%] mr-[0px] lg:top-[50px] top-[10px] right-[0px] lg:pr-12 pr-4 ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <h6 className="text-[#E47B0E] lg:text-sm text-[6px] font-poppins font-[500] lg:mb-3 mb-1">
                {data.title}
              </h6>
              <p className="lg:text-[30px] text-[8px] font-nunito font-[900] leading-[1.5] lg:mb-6 mb-1">
                {data.subtitle}
              </p>
              <p className="lg:text-sm lg:leading-8 text-[6px] font-nunito lg:mb-6 mb-2 ">
                {data.description}
              </p>
              <Button href="/about">
                About Us
                <Icon icon="ph:arrow-right-bold"></Icon>
              </Button>
            </div>
          ))}
        </div>
      </Wrapper>

      <div className="carousel lg:hidden absolute w-[100%] top-[1%] z-[100] pt-8 pb-5">
        {carouselData.map((data, index) => (
          <div
            key={index}
            className={`fade-in w-[90%] p-8 ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <h6 className="text-[#E47B0E] lg:text-sm text-[11px] font-poppins font-[500] lg:mb-3 mb-1">
              {data.title}
            </h6>
            <p className="lg:text-[30px] text-[14px]  text-white font-nunito font-[900] leading-[1.5] lg:mb-6 mb-1">
              {data.subtitle}
            </p>
            <p className="lg:text-sm text-[11px]   text-white lg:leading-8  font-nunito lg:mb-6 mb-2 ">
              {data.description}
            </p>
            <Button href="/about">
              About Us
              <Icon icon="ph:arrow-right-bold"></Icon>
            </Button>
          </div>
        ))}
      </div>

      <div className="lg:pt-[85px] pt-[3.5rem] lg:w-[76%] lg:mr-[0px] w-[90%] mx-auto">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="myswiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {CarouselImages?.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                alt={`CarouselImage${i}`}
                className="lg:rounded-tl-[126px] rounded-[10px]"
              />
            </SwiperSlide>
          ))}

          <div ref={prevRef} className="swiper-button-prev ">
            <Icon
              icon="gg:arrow-right"
              width={30}
              className="lg:w-full w-[50%]"
              hFlip={true}
            />
          </div>
          <div ref={nextRef} className="swiper-button-next">
            <Icon
              icon="gg:arrow-right"
              width={30}
              className="lg:w-full w-[50%]"
            />
          </div>
        </Swiper>
      </div>
    </>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-1  px-3 font-[400] lg:text-[13.5px] text-[7px] font-poppins flex items-center gap-2 w-fit hover:opacity-80`;
const Wrapper = tw.div`absolute lg:top-[20%] lg:w-[36.7%] lg:h-[70%] w-[43%] h-[50%] top-[6%] text-white z-[30]`;

export default HomeCarousel;
