"use client";

import { Icon } from "@iconify/react";
import React from "react";
import tw from "tailwind-styled-components";

const Contact = () => {
  return (
    <div className="lg:px-32 px-10 py-16">
      <div
        style={{
          backgroundImage: "url('bgcontact.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" rounded-[24px] lg:px-32 p-10 lg:py-16 flex justify-end items-center "
      >
        <div className="lg:w-[50%]">
          <h6 className="font-[900] text-white lg:text-[30px] text-[20px] font-nunito">
            Want to know more about us?
          </h6>
          <p className="font-[500] text-white lg:text-[15px] text-xs font-roboto mt-4 lg:mb-10 mb-8">
            If you have any questions or need assistance, please do not hesitate
            to contact our support team.
          </p>
          <div className="lg:flex grid lg:gap-8 gap-4 items-center">
            <BtnDownload href="Weam-official.pdf" download={true}>
              <Icon icon="subway:download-3"></Icon> Download Company&apos;s
              Profile
            </BtnDownload>
            <BtnContact href="#">Contact Us</BtnContact>
          </div>
        </div>
      </div>
    </div>
  );
};

const BtnDownload = tw.a`bg-[#fff] border-[1px] border-[#000] text-[#434343] rounded-[12px] py-3 px-6 font-[400] lg:text-[15px] text-xs font-poppins flex items-center gap-2 w-fit hover:opacity-80`;
const BtnContact = tw.a`border-[1px] border-white text-[#fff] rounded-[12px] py-3 px-6 font-[400] lg:text-[15px] text-xs font-inter  w-fit hover:opacity-80`;
export default Contact;
