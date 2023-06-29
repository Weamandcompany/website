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
              className={`fade-in w-[80%] 2xl:w-[65%] mr-[0px] lg:top-[50px] 2xl:top[70px] top-[10px] 2xl:left-32 right-[0px] lg:pr-12 2xl:pr-12 pr-4 ${
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

      <div className="carousel lg:hidden absolute  w-[100%] top-[4%] z-[100] pt-8 pb-5">
        <div className="relative flex items-center">
          <div>
            {carouselData.map((data, index) => (
              <div
                key={index}
                className={`fade-in w-[100%] p-8 ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h6 className="text-[#E47B0E] text-sm text-center font-poppins font-[500] lg:mb-3 mb-2">
                  {data.title}
                </h6>
                <p className="lg:text-[30px] text-[25px] text-center  text-white font-nunito font-[900] leading-[1.5] lg:mb-6 mb-2">
                  {data.subtitle}
                </p>
                <p className="text-sm  text-center  text-white lg:leading-8  font-nunito lg:mb-6 mb-3 ">
                  {data.description}
                </p>
                <div className="flex justify-center">
                  <Button href="/about">
                    About Us
                    <Icon icon="ph:arrow-right-bold"></Icon>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:pt-[85px] pt-[4.5rem] lg:w-[76%] lg:mr-[0px] w-[90%] mx-auto">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="myswiper 2xl:h-[515px] lg:h-[483px] h-[280px]"
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
                alt={`CarouselImage${i}`}
                className="lg:rounded-tl-[126px] lg:rounded-none rounded-[10px] lg:w-[100%] lg:h-[auto] h-[280px] w-[100%] object-cover"
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

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-2  px-3 font-[400] text-[13.5px] font-poppins flex items-center gap-2 w-fit hover:opacity-80`;
const Wrapper = tw.div`absolute lg:top-[20%]  lg:w-[36.7%] lg:h-[70%] w-[43%] xl:h-[80%] 2xl:h-[51%] h-[50%] top-[6%] text-white z-[30]`;

export default HomeCarousel;
