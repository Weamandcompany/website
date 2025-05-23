"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footernav from "./footernav";

const Footer = () => {
  return (
    <div className="bg-[#0F1437] ">
      <Footernav />
      <div className="bg-[#131944] p-8  lg:mx-32 mx-5 lg:mb-[3.5rem] lg:mt-[2.5rem] my-6 mb-10 rounded-[4px] lg:flex items-center justify-between font-poppins text-white gap-24">
        <div className="lg:flex items-start gap-6 lg:w-[85%]">
          {" "}
          <Image
            src={"/images/wm-logo.png"}
            height={0}
            width={0}
            className="h-[80px] w-auto"
            alt="logo"
          />
          <p className="font-roboto text-white/75 text-[13px] leading-6 lg:w-[65%]">
            Weam and Company Limited, established in 1985, is an ISO 9001:2015
            and COREN certified Engineering, Procurement, Construction,
            Installation and Commissioning (EPCIC) company, providing a diverse
            range of client-focused and cost-effective engineering solutions in
            the Oil & Gas, Energy and manufacturing industries.
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
      <div className="bg-[#131944] lg:flex grid justify-center items-center lg:text-left text-center lg:px-32 px-10 py-4 text-white/75 font-poppins">
        <p className="text-sm lg:order-1 order-2 text-center">
          &copy; Copyright {new Date().getFullYear()} Weam and Company Limited.
        </p>
      </div>
    </div>
  );
};

export default Footer;
