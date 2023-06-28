"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import Accordion from "@/components/common/accordion";
import { engineeringAccordions } from "@/utils/constants";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const EngineeringService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[3.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/enginnering1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Engineering Excellence: Transforming Ideas into Reality
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              We have an in-house multi-disciplined engineering team with an
              average of 25 years industry experience, and our engineering
              strength covers Feasibility studies, Conceptual Engineering,
              Front-End Engineering Design, Detailed Engineering Design, 2D & 3D
              As-Built Documentation for Greenfield and Brownfield projects of
              offshore, onshore (shallow & deepwater) and subsea facilities.
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
            <Accordion items={engineeringAccordions} />
          </Slide>
          <Zoom triggerOnce={true}>
            <Image
              src={"/images/enginnering2.svg"}
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

export default EngineeringService;
