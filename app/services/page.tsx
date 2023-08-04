"use client";

import ServiceItem from "@/components/common/serviceItem";
import PageLayout from "@/layouts/PageLayout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Bounce } from "react-awesome-reveal";
import tw from "tailwind-styled-components";
import { Fade, Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <PageLayout>
      <>
        <div className="lg:mt-[6.5rem] lg:pt-0 pt-[4.5rem] relative ">
          <Fade triggerOnce={true}>
            <Image
              src="/images/service.svg"
              alt="service"
              width={0}
              height={0}
              style={{ width: "32%" }}
              className="mx-auto absolute right-[6%] top-[12%] lg:block hidden"
            />
          </Fade>
          <div className="bg-[#0C1239] lg:py-[5.5rem] lg:px-32 py-8  px-5 lg:rounded-r-[42px]  lg:w-[75%] w-[100%] text-white ">
            <Slide cascade triggerOnce={true}>
              <div className="lg:w-[75%] font-nunito">
                <Fade triggerOnce={true}>
                  <Image
                    src="/images/service.svg"
                    alt="service"
                    width={0}
                    height={0}
                    style={{ width: "100%" }}
                    className="mx-auto lg:hidden block mb-5 h-[400px] object-cover rounded-lg"
                  />
                </Fade>
                <h6 className=" font-[900] lg:text-[40px] text-[25px] lg:text-left text-center leading-[1.4]">
                  Our Dynamic Services at Weam and Company Limited
                </h6>
                <p className="lg:text-[16px] lg:my-8 my-4 lg:leading-9 lg:text-left text-center">
                  With a customer-centric approach, we deliver tailored solutions for digital
                  transformation, process optimization, and more. Partner with our experienced team
                  to unlock new opportunities and drive growth. Explore our comprehensive services
                  today and experience the power of Weam and Company Limited.
                </p>

                <div className="flex lg:justify-start justify-center">
                  <Button
                    href="/contact"
                    className="font-poppins  flex items-center justify-center gap-2 w-fit hover:opacity-80 ">
                    Contact Us <Icon icon="ph:arrow-right-bold"></Icon>
                  </Button>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="bg-bgservice bg-no-repeat lg:px-32 px-5 lg:pt-10 lg:py-14 pt-10 ">
          <h6 className="text-[#E47B0E] lg:text-[15px] text-sm font-poppins font-[500] mb-3">
            What We Do
          </h6>
          <p className="lg:text-[33px] text-[25px] lg:w-[85%] font-nunito font-[900] leading-[1.5] mb-2">
            Our Services{" "}
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 mt-12">
            <Bounce cascade triggerOnce={true}>
              <ServiceItem
                title="Engineering"
                description="We have an in-house multi-disciplined engineering team with an average of 25 years industry..."
                icon="/images/icon1.svg"
                link="/services/engineering"
              />
              <ServiceItem
                title="Project Management Consulting"
                description="We offer Project Management Consulting services on engineering projects for onshore and offshore..."
                icon="/images/icon6.svg"
                link="/services/project-management"
              />
              <ServiceItem
                title="Software Solutions and Integration"
                description="We offer end-to-end software solutions. From sales to deployment and ongoing support"
                icon="/images/icon2.svg"
                link="/services/software"
              />
              <ServiceItem
                title="Training"
                description="Engineering Design Software/ Process Simulation Training"
                icon="/images/icon4.svg"
                link="/services/training"
              />
              <ServiceItem
                title="Simulation Studies"
                description="Our expertise in steady state and dynamic simulation studies allows us to analyze and optimize complex systems, through the utilization of advanced modeling and simulation techniques"
                icon="/images/icon5.svg"
                link="/services/simulation-studies"
              />
              <ServiceItem
                title="Cloud Consulting"
                description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
                icon="/images/icon3.svg"
                link="/services/cloud-consulting"
              />
              <ServiceItem
                title="Risk Management"
                description="We offer end-to-end software solutions. From sales to deployment and ongoing support"
                icon="/images/icon7.svg"
                link="/services/risk-management"
              />
            </Bounce>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-3 px-4 font-[600] text-[14px] font-roboto flex items-center gap-2 w-fit hover:opacity-80`;
export default Services;
