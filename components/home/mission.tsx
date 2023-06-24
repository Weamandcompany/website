"use client";

import { Icon } from "@iconify/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeMission = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="myTestimonials w-[85%] mx-auto rounded-[32px]  text-white font-roboto"
      style={{
        backgroundImage: "url('Testimonials.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <SwiperSlide>
        <div className="lg:w-[50%] w-[80%] mx-auto text-center lg:pb-28 lg:pt-14 pb-0 pt-6">
          <h6 className="lg:text-[35px] text-[25px] lg:mb-5 mb-3">
            <span className="text-[#C9D0FC78]"> Our </span>Mission
          </h6>
          <p className="lg:text-[20px] text-[14px] lg:leading-[2]">
            To provide a diverse range of client focused and cost-effective
            engineering & software solutions in the oil & gas, manufacturing,
            and maritime industry.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="lg:w-[50%] w-[80%] mx-auto text-center lg:pb-28 lg:pt-14 pb-0 pt-6">
          <h6 className="lg:text-[35px] text-[25px] lg:mb-5 mb-3">
            <span className="text-[#C9D0FC78]"> Our </span>Vision
          </h6>
          <p className="lg:text-[20px]  text-[14px] lg:leading-[2]">
            To be the reliable indigenous company in the West African
            sub-region, delivering world-class engineering services and
            simulation software to the oil and gas industry.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:w-[50%] w-[80%] mx-auto text-center lg:pb-28 lg:pt-14 pb-20 pt-6">
          <h6 className="lg:text-[35px] text-[25px] lg:mb-5 mb-3">
            <span className="text-[#C9D0FC78]"> Our </span>Core Values
          </h6>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 text-xs lg:text-base">
            <div className="flex items-center gap-2">
              <div className="bg-[#E47B0E] rounded-full p-1 lg:h-[24px] lg:w-[24px]  flex items-center justify-center">
                <Icon icon="zondicons:checkmark"></Icon>
              </div>
              Commitment to Quality Service
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E47B0E] rounded-full p-1 lg:h-[24px] lg:w-[24px]  flex items-center justify-center">
                <Icon icon="zondicons:checkmark"></Icon>
              </div>
              Integrity{" "}
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E47B0E] rounded-full p-1 lg:h-[24px] lg:w-[24px]  flex items-center justify-center">
                <Icon icon="zondicons:checkmark"></Icon>
              </div>
              Culture of continous improvement{" "}
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E47B0E] rounded-full p-1 lg:h-[24px] lg:w-[24px]  flex items-center justify-center">
                <Icon icon="zondicons:checkmark"></Icon>
              </div>
              Building lasting Relationship{" "}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeMission;
