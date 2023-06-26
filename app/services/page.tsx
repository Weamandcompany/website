"use client";

import ServiceItem from "@/components/common/serviceItem";
import Contact from "@/components/contact";
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
        <div className="lg:mt-[6.5rem] relative ">
          <Fade triggerOnce={false}>
            <Image
              src="/images/service.svg"
              alt="service"
              width={0}
              height={0}
              style={{ width: "32%" }}
              className="mx-auto hover:opacity-80 absolute right-[6%] top-[10%]"
            />
          </Fade>
          <div className="bg-[#0C1239] lg:py-[5.5rem] lg:px-32 py-14  px-10 rounded-r-[42px]  w-[75%] text-white ">
            <Slide cascade triggerOnce={false}>
              <div className="w-[70%] font-nunito">
                <h6 className=" font-[900] lg:text-[40px] leading-[1.4]">
                  Unleashing Possibilities: Our Dynamic Services at Weam and
                  Company Limited
                </h6>
                <p className="text-[16px] my-8">
                  Our dynamic services at Weam and Company Limited empower your
                  success. With a customer-centric approach, we deliver tailored
                  solutions for digital transformation, process optimization,
                  and more. Partner with our experienced team to unlock new
                  opportunities and drive growth. Explore our comprehensive
                  services today and experience the power of Weam and Company
                  Limited.
                </p>
                <Button
                  href="/contact"
                  className="font-poppins flex items-center gap-2 w-fit hover:opacity-80 "
                >
                  Contact Us <Icon icon="ph:arrow-right-bold"></Icon>
                </Button>
              </div>
            </Slide>
          </div>
        </div>
        <div className="bg-bgservice bg-no-repeat lg:px-32 px-10 lg:pt-10 py-14 ">
          <h6 className="text-[#E47B0E] lg:text-[15px] text-sm font-poppins font-[500] mb-3">
            What We Do
          </h6>
          <p className="lg:text-[33px] text-[25px] lg:w-[85%] font-nunito font-[900] leading-[1.5] mb-2">
            Our Services{" "}
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 mt-12">
            <Bounce cascade triggerOnce={true}>
              <ServiceItem
                title="Engineering"
                description="We have an in-house multi-disciplined engineering team with an average of 25 years industry..."
                icon="/images/icon1.svg"
              />
              <ServiceItem
                title="Software Solutions and Integration"
                description="Lorem ipsum dolor sit amet consectetur. Est accumsan nulla neque at arcu proin placerat. Auctor."
                icon="/images/icon11.svg"
              />
              <ServiceItem
                title="Cloud Consulting"
                description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
                icon="/images/icon111.svg"
              />
              <ServiceItem
                title="Engineering"
                description="We have an in-house multi-disciplined engineering team with an average of 25 years industry..."
                icon="/images/icon1.svg"
              />
              <ServiceItem
                title="Software Solutions and Integration"
                description="Lorem ipsum dolor sit amet consectetur. Est accumsan nulla neque at arcu proin placerat. Auctor."
                icon="/images/icon11.svg"
              />
              <ServiceItem
                title="Cloud Consulting"
                description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
                icon="/images/icon111.svg"
              />
              <ServiceItem
                title="Cloud Consulting"
                description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
                icon="/images/icon111.svg"
              />
            </Bounce>
          </div>
        </div>
        <Contact />
      </>
    </PageLayout>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-2 px-4 font-[600] text-[14px] font-roboto flex items-center gap-2 w-fit hover:opacity-80`;
export default Services;
