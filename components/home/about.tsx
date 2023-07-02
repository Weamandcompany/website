"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import tw from "tailwind-styled-components";

const HomeAbout = () => {
  return (
    <div className="bg-bgabout bg-no-repeat bg-cover lg:py-20 py-12 lg:mt-0 mt-12">
      <div className="lg:px-24 px-5 grid lg:grid-cols-2 grid-cols-1 gap-16  items-center">
        <Slide cascade triggerOnce={true}>
          {" "}
          <div className="lg:w-[85%]">
            <h6 className="text-[#E47B0E] lg:text-[15px] text-sm font-poppins font-[500] mb-3">
              About Our Company
            </h6>
            <p className="lg:text-[33px] text-[25px] lg:w-[85%] font-nunito font-[900] leading-[1.5] mb-2">
              WEAM AND COMPANY LIMITED
            </p>
            <p className="text-sm font-nunito mb-6 leading-[2.5]">
              Weam and Company Limited, established in 1985, is an ISO 9001:2015
              and COREN certified Engineering, Procurement, Construction,
              Installation and Commissioning (EPCIC) company, providing a
              diverse range of client-focused and cost-effective engineering
              solutions in the oil, gas and manufacturing industries.
            </p>
            <Button href="/about">
              Learn More
              <Icon icon="ph:arrow-right-bold"></Icon>
            </Button>
          </div>
        </Slide>

        <Fade triggerOnce={true}>
          {" "}
          <Image
            src="/images/experience.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt={`experience`}
            className="lg:mt-12"
          />
        </Fade>
      </div>
    </div>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-2 px-4 font-[400] text-[13.5px] font-poppins flex items-center gap-2 w-fit hover:opacity-80`;

export default HomeAbout;
