"use client";

import Image from "next/image";
import React from "react";
import { Bounce } from "react-awesome-reveal";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="relative">
      <div className="bg-[#DDDFFF] py-[3.7rem] rounded-[8px] absolute top-[18%] w-full"></div>

      <div
        id="content__wrapper"
        className="content overflow-hidden relative flex"
      >
        <div className="content__inner">
          <div className="content__inner-wrapper pb-8 pr-0 px-8 py-5 text-[#0C1239] bg-white z-[2000] relative mx-10 rounded-[8px] mb-8 h-[210px]">
            <h6 className="font-roboto font-[600] text-[16px]">{title}</h6>
            <p className="font-roboto pr-8 font-[400] text-[13px] mt-3 mb-6">
              {description}
            </p>
            <a href="#" className="font-poppins text-[13px] font-[400] mb-8">
              Read More
            </a>
            <div className="content__toggle2 flex justify-end cursor-pointer">
              <Image
                src={icon}
                width={0}
                height={0}
                style={{ width: "30%", height: "auto" }}
                alt={`icon`}
                className="absolute bottom-[0px] mt-12 right-0 rounded-br-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeServices: React.FC = () => {
  return (
    <div className="bg-[#F9F4FF] lg:px-32 px-10 lg:py-20 py-14 mt-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-6">
        <h6 className="text-[#0C1239] font-nunito font-[900] lg:text-[32px] text-[25px]">
          Efficiency at its Finest: Streamlining Processes for Optimal Results.
        </h6>
        <p className="text-[#61657E] font-roboto font-[600] lg:text-[16px] leading-[2]">
          &ldquo;Unleashing operational excellence through streamlined
          processes, cutting-edge technology, and a skilled workforce. We exceed
          expectations and drive results with a proven track record of
          success.&rdquo;
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 gap-4 mt-12">
        <Bounce  cascade triggerOnce={true}>
          {" "}
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
        </Bounce>
      </div>
    </div>
  );
};

export default HomeServices;
