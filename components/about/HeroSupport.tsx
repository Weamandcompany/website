"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSupport = () => {
  return (
    <section className="pt-10 pb-16 px-4 xs:px-5 sm:px-6">
      <div
        style={{
          backgroundImage: "url('images/narrow-rects.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-20">
        <div className="lg:px-24 px-10 grid lg:grid-cols-2 grid-cols-1 gap-16  items-center">
          <Slide cascade triggerOnce={false}>
            {" "}
            <div className="lg:w-[85%]">
              <h6 className="text-[#E47B0E] lg:text-[15px] text-sm font-poppins font-[500] mb-3">
                An Excellence Powered By Innovation
              </h6>
              <h3 className="text-hcolor-dark font-nunito font-[900] leading-[1.5] text-2xl md:text-3xl mb-2">
                Driving Excellence: Unleashing the Power of Seamless Operations.
              </h3>
              <p className="text-sm font-nunito mb-6 leading-[2.5]">
                Weam and Company Limited, established in 1985, is an ISO 9001:2015 and COREN
                certified Engineering, Procurement, Construction, Installation and Commissioning
                (EPCIC) company, providing a diverse range of client-focused and cost-effective
                engineering solutions in the oil, gas and manufacturing industries.
              </p>
              <a href="#" className="font-poppins flex items-center gap-2 w-fit hover:opacity-80">
                Learn More
                <Icon icon="ph:arrow-right-bold"></Icon>
              </a>
            </div>
          </Slide>

          <Fade triggerOnce={false}>
            {" "}
            <Image
              src="experience2.svg"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt={`experience`}
              className="lg:mt-12"
            />
          </Fade>
        </div>
      </div>
      <div className="container"></div>
    </section>
  );
};

export default HeroSupport;
