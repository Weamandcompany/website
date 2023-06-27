"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <header className="px-0 md:px-6 md:mt-[95px]">
      <div className="container">
        <div className="bg-wdark rounded-none md:rounded-3xl pt-[74px] px-4 xs:px-5 sm:px-6 md:px-4 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-14 md:items-center lg:items-start">
            <div className="">
              <h3 className="text-white text-center md:text-left font-nunito font-extrabold leading-normal text-3xl mb-2">
                An Excellence Powered by Innovation.
              </h3>
              <p className="text-[13px] text-center md:text-left leading-loose sm:text-sm sm:leading-loose text-white font-normal">
                Welcome to Weam and Company Limited, where innovation thrives and solutions come to
                life. With our team of experts and a passion for excellence, we push boundaries and
                deliver remarkable outcomes. Harnessing cutting-edge technologies and creative
                thinking, we ignite innovation to shape a brighter future. Experience the power of
                Weam and Company Limited and let us inspire the solutions you've been searching for.
              </p>
              <div className="flex justify-center md:justify-start md:mb-0 mb-10">
                <a
                  href="#"
                  className="mt-8 btn-yellow font-poppins flex items-center gap-2 w-fit hover:opacity-80 px-7">
                  Contact Us
                  <Icon icon="ph:arrow-right-bold"></Icon>
                </a>
              </div>
            </div>

            <div className="">
              <Fade className={"opacity-0"} triggerOnce={true}>
                <Image src="/images/upload.png" width={1000} height={1000} alt="about us" />
              </Fade>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center w-24 -mb-4 pt-2.5 bg-white rounded-tr-[90%_5rem] rounded-tl-[90%_5rem] before:rounded">
              <button className="flex-shrink-0 btn-yellow p-0 h-11 w-11 rounded-full flex items-center justify-center">
                <Icon icon="ph:arrow-down-bold"></Icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
