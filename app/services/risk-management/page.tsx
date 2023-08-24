"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import { Icon } from "@iconify/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { riskManagementData } from "@/utils/constants";

const RiskManagementService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/risk-palm.jpg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Risk Management
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              Weam and Company Limited provides comprehensive engineering
              services within technical safety and HSE risk assessment. Drawing
              on our years of industry experience, we combine a proactive and
              integrated multidisciplinary approach to create designs with a
              strong early-stage and continual focus on identifying and
              mitigating HSE risks. Our expert team consists of specialists
              within technical safety, loss prevention, risk assessment, fire
              and explosion analysis, and HSE management. We have an excellent
              track record in the delivery of specialist expertise and
              consultancy at all project stages.
            </p>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={true}>
            <ServiceSidebar />
          </Fade>
        </div>
      </div>
      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">
          Risk Management{" "}
        </h6>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 ">
          <div>
            <Slide direction="left" cascade triggerOnce={true}>
              {riskManagementData?.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 mb-4 items-start border-[1px] border-[#EEEEEE] rounded-[14px] p-4"
                >
                  <div className="rounded-[5px] bg-[#E47B0E] p-[2px]">
                    <Icon
                      icon="fluent:checkmark-12-filled"
                      className="text-white"
                      height={20}
                    />
                  </div>
                  <p className="text-[#0C1239] text-[16px] font-roboto font-[400]">
                    {item}
                  </p>
                </div>
              ))}
            </Slide>
          </div>
          <div>
            <Zoom triggerOnce={true}>
              <Image
                src={"/images/risk2.svg"}
                className="lg:block relative hidden rounded-lg mb-5"
                width={0}
                height={0}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="projectImage"
              />
            </Zoom>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RiskManagementService;
