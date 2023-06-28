"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import Accordion from "@/components/common/accordion";
import { projectManagementAccordions } from "@/utils/constants";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { managementProjects } from "@/utils/projects";

const ProjectManagementService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[3.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/projectmanagement1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Efficiently Navigate the Path to Success: Expert Project Management Solutions.{" "}
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              Weam and Company Limited excels in project management, delivering exceptional
              solutions across industries. With a dedicated team of experienced project managers, we
              ensure successful project completion within budget and timeline. Our collaborative
              approach, proactive problem-solving, and commitment to quality make us the preferred
              partner for seamless project management. Trust us to bring your projects to fruition
              with excellence.
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
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">Our Operations </h6>
        <div className="grid lg:grid-cols-2 gap-12 ">
          <Slide direction="left" cascade triggerOnce={true}>
            <Accordion items={projectManagementAccordions} />
          </Slide>
          <Zoom triggerOnce={true}>
            <Image
              src={"/images/projectmanagement2.svg"}
              className="lg:block relative hidden rounded-lg mb-5"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="projectImage"
            />
          </Zoom>
        </div>

        <div className="max-w-4xl mx-auto mt-14">
          <Accordion defaultIndex={0} items={managementProjects} />
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectManagementService;
