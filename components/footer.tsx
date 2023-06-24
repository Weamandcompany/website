"use client";

import { footerQuickLinks, footerServices } from "@/utils/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0F1437] ">
      <div className="lg:px-32 p-10 lg:pt-16 grid lg:grid-cols-10 grid-cols-1 gap-6 lg:gap-24">
        <div className="col-span-3">
          <h6 className="text-white font-poppins text-lg mb-4">About Us</h6>
          <p className="font-roboto text-[#B8B8B8] text-xs">
            Weam and Company Limited, established in 1985, is an ISO 9001:2015
            and COREN certified Engineering, Procurement, Construction,
            Installation and Commissioning (EPCIC) company, providing a diverse
            range of client-focused and cost-effective engineering solutions in
            the oil, gas and manufacturing industries
          </p>
        </div>{" "}
        <div className="col-span-2">
          {" "}
          <h6 className="text-white font-poppins text-lg mb-4">
            Our Services{" "}
          </h6>
          {footerServices?.map((item, i) => (
            <Link
              key={i}
              href={item?.link}
              className="flex gap-3 mb-3 hover:text-[#E47B0E] text-[#B8B8B8] text-xs items-center"
            >
              <Icon icon={"ep:d-arrow-right"}></Icon> {item?.name}
            </Link>
          ))}
        </div>{" "}
        <div className="col-span-2">
          <h6 className="text-white font-poppins text-lg mb-4">Quick Links </h6>
          {footerQuickLinks?.map((item, i) => (
            <Link
              key={i}
              href={item?.link}
              className="flex gap-3 mb-3 hover:text-[#E47B0E] text-[#B8B8B8] text-xs items-center"
            >
              <Icon icon={"ep:d-arrow-right"}></Icon> {item?.name}
            </Link>
          ))}
        </div>
        <div className="col-span-3">
          <h6 className="text-white font-poppins text-lg mb-4">
            Instagram Posts
          </h6>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#D0D0D0] h-[82px] w-[90px] rounded"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#131944] p-8 lg:mx-32 mx-5 lg:my-20 my-6 rounded-[4px] flex items-center justify-between font-poppins text-white">
        <Image src={"logowhite.svg"} height={56.07} width={77.45} alt="logo" />
        <div className="flex items-center gap-6">
          Find us on:{" "}
          <Link href={"/"}>
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
