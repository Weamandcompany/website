"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import Accordion from "@/components/common/accordion";
import { simulationStudiesAccordions } from "@/utils/constants";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const SimulationStudiesService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/simulation1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Simulation Studies{" "}
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              At Weam and Company Limited, we specialize in harnessing the power
              of simulation studies to revolutionize the field of engineering.
              Through cutting-edge software and advanced modeling techniques, we
              offer comprehensive solutions that enable businesses to gain
              critical insights, optimize designs, and make informed decisions.
              Our team of skilled engineers combines technical expertise with
              innovative thinking to simulate real-world scenarios and
              accurately predict the behavior and performance of complex
              systems. Whether it&apos;s structural analysis, fluid dynamics, or
              electromagnetic simulations, our simulation studies empower
              clients to mitigate risks, enhance efficiency, and drive
              sustainable growth. Step into the future of engineering with us
              and unlock the potential of simulation studies to solve
              tomorrow&apos;s challenges today.
            </p>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={false}>
            <ServiceSidebar />
          </Fade>
        </div>
      </div>
      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">
          Our Service Process{" "}
        </h6>
        <div className="grid lg:grid-cols-2 gap-12 ">
          <Slide direction="left" cascade triggerOnce={true}>
            <Accordion items={simulationStudiesAccordions} />
          </Slide>
          <Zoom triggerOnce={true}>
            <Image
              src={"/images/simulation2.svg"}
              className="lg:block relative hidden rounded-lg mb-5"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="projectImage"
            />
          </Zoom>
        </div>
      </div>
    </PageLayout>
  );
};

export default SimulationStudiesService;
