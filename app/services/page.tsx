"use client";

import ServiceItem from "@/components/common/serviceItem";
import Contact from "@/components/contact";
import React from "react";
import { Bounce } from "react-awesome-reveal";

const Services = () => {
  return (
    <>
      <div className="bg-heroservice bg-no-repeat bg-cover lg:py-[5.5rem] py-14 lg:mt-[5.5rem]">
        <h6 className="lg:text-[34px] text-[25px] font-[500] font-poppins text-white lg:px-32 px-10">
          Services
        </h6>
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
              icon="icon1.svg"
            />
            <ServiceItem
              title="Software Solutions and Integration"
              description="Lorem ipsum dolor sit amet consectetur. Est accumsan nulla neque at arcu proin placerat. Auctor."
              icon="icon11.svg"
            />
            <ServiceItem
              title="Cloud Consulting"
              description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
              icon="icon111.svg"
            />
            <ServiceItem
              title="Engineering"
              description="We have an in-house multi-disciplined engineering team with an average of 25 years industry..."
              icon="icon1.svg"
            />
            <ServiceItem
              title="Software Solutions and Integration"
              description="Lorem ipsum dolor sit amet consectetur. Est accumsan nulla neque at arcu proin placerat. Auctor."
              icon="icon11.svg"
            />
            <ServiceItem
              title="Cloud Consulting"
              description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
              icon="icon111.svg"
            />
            <ServiceItem
              title="Cloud Consulting"
              description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
              icon="icon111.svg"
            />
          </Bounce>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Services;
