"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0F1437] ">
      <div className="lg:px-32 p-3 lg:py-10"></div>

      <div className="bg-[#131944] p-8  lg:mx-32 mx-5 lg:mb-[4.5rem] my-6 mb-10 rounded-[4px] lg:flex items-center justify-between font-poppins text-white gap-24">
        <div className="lg:flex items-start gap-6 lg:w-[85%]">
          {" "}
          <Image
            src={"/images/logowhite.svg"}
            height={56.07}
            width={77.45}
            alt="logo"
          />
          <p className="font-roboto text-[#FFFFFF] text-xs leading-6 lg:w-[65%]">
            Weam and Company Limited, established in 1985, is an ISO 9001:2015
            and COREN certified Engineering, Procurement, Construction,
            Installation and Commissioning (EPCIC) company, providing a diverse
            range of client-focused and cost-effective engineering solutions in
            the oil, gas and manufacturing industries
          </p>
        </div>
        <div className="flex items-center gap-6 lg:w-[15%] lg:mt-0 mt-8">
          Find us on:{" "}
          <Link
            href={"https://ng.linkedin.com/company/weam-and-company"}
            target="_blank"
          >
            <Icon
              icon={"ri:linkedin-fill"}
              className="text-[#E47B0E] p-[7px] bg-white h-[32px] w-[32px] rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#131944] lg:flex grid justify-center items-center lg:justify-between lg:text-left text-center lg:px-32 px-10 py-4 text-white font-poppins">
        <p className="text-[12px] lg:order-1 order-2">
          © Copyright {new Date().getFullYear()}. All Right Reserved
        </p>
        <div className="flex items-center gap-12 justify-center lg:order-2 order-1">
          <p className="text-[12px] text-[Orange]">Privacy Policy </p>
          <p className="text-[12px]">Terms & Conditions </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
