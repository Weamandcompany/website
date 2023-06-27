"use client";

import React from "react";
import { Bounce } from "react-awesome-reveal";
import ServiceItem from "@/components/common/serviceItem";
import Link from "next/link";

const HomeServices: React.FC = () => {
  return (
    <div className="bg-[#F9F4FF] lg:px-32 px-5 lg:py-20 py-10 mt-14">
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
        <Bounce cascade triggerOnce={true}>
          <ServiceItem
            title="Engineering"
            description="We have an in-house multi-disciplined engineering team with an average of 25 years industry..."
            icon="/images/icon1.svg"
          />
          <ServiceItem
            title="Software Solutions and Integration"
            description="We offer end-to-end software solutions. From sales to deployment and ongoing support"
            icon="/images/icon2.svg"
          />
          <ServiceItem
            title="Cloud Consulting"
            description="Our consultancy works closely with businesses to develop a customized cloud strategy aligned with their..."
            icon="/images/icon3.svg"
          />
        </Bounce>
      </div>

      <div className="flex justify-end">
        <Link
          href="/services"
          className="font-poppins text-[14px] font-[400] mb-8 hover:underline"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
