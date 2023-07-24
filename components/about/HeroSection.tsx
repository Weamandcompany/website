"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className="container lg:w-full md:w-[90%] mx-auto">
      <div className="bg-[#F4F6FF] rounded-none md:rounded-3xl pt-[100px] md:pt-[74px] pb-16 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-14 md:items-center lg:items-center">
          <div className="">
            <Slide duration={700} triggerOnce={true}>
              <h3 className="text-wdark text-center md:text-left font-nunito font-extrabold lg:text-[40px] text-[25px] leading-[1.4] mb-4">
                Excellence Powered by Innovation.
              </h3>

              <p className="font-nunito text-[14px] text-center md:text-left leading-[2.5] sm:text-[15px] sm:leading-[2.5] text-wdark font-semibold">
                Welcome to Weam and Company Limited, where innovation thrives and solutions come to
                life. With our team of experts and a passion for excellence, we push boundaries and
                deliver remarkable outcomes. Harnessing cutting-edge technologies and creative
                thinking, we ignite innovation to shape a brighter future. Experience the power of
                Weam and Company Limited and let us inspire the solutions you&apos;ve been searching
                for.
              </p>
            </Slide>
            <div className="flex justify-center md:justify-start md:mb-0 mb-10">
              <a
                href="#"
                className="mt-8 btn-yellow font-poppins flex items-center gap-2 w-fit hover:opacity-80 px-7">
                Contact Us
                <Icon icon="ph:arrow-right-bold"></Icon>
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/images/about.png"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt={`about us`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
