"use client";

import { Icon } from "@iconify/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import tw from "tailwind-styled-components";

interface CoreValueItemProps {
  icon: string;
  text: string;
}

const CoreValueItem = ({ icon, text }: CoreValueItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#E47B0E] rounded-full p-1 lg:h-[24px] lg:w-[24px]  flex items-center justify-center">
        <Icon icon={icon} />
      </div>
      <span className="text-left">{text}</span>
    </div>
  );
};
const HomeMission = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 18000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="bg-bgtestimonials bg-no-repeat bg-cover bg-bottom myTestimonials lg:w-[85%] w-[90%] mx-auto rounded-[32px]  text-white font-roboto"
    >
      <SwiperSlide>
        <Wrapper>
          <Title>
            <span className="text-[#C9D0FC78]"> Our </span>Mission
          </Title>
          <Value>
            To provide a diverse range of client focused and cost-effective engineering & software
            solutions in the oil & gas, manufacturing, and maritime industry.
          </Value>
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper>
          <Title>
            <span className="text-[#C9D0FC78]"> Our </span>Vision
          </Title>
          <Value>
            To be the reliable indigenous company in the West African sub-region, delivering
            world-class engineering services and simulation software to the oil and gas industry.
          </Value>
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper>
          <Title>
            <span className="text-[#C9D0FC78]">Our</span> Core Values
          </Title>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mb-0 mb-8 text-xs lg:text-base">
            <CoreValueItem icon="zondicons:checkmark" text="Commitment to Quality Service" />
            <CoreValueItem icon="zondicons:checkmark" text="Integrity" />
            <CoreValueItem icon="zondicons:checkmark" text="Culture of Continuous Improvement" />
            <CoreValueItem icon="zondicons:checkmark" text="Building Lasting Relationships" />
          </div>
        </Wrapper>
      </SwiperSlide>
    </Swiper>
  );
};

const Wrapper = tw.div`lg:w-[50%] w-[80%] mx-auto text-center lg:pb-28 lg:pt-14 pb-0 pt-6`;
const Value = tw.p`lg:text-[20px] text-[14px] lg:leading-[2]`;
const Title = tw.h6`lg:text-[35px] text-[25px] lg:mb-5 mb-3`;

export default HomeMission;
