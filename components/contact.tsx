"use client";

import { Icon } from "@iconify/react";
import React from "react";
import tw from "tailwind-styled-components";

const Contact = () => {
  return (
    <div className="lg:px-32 px-5 py-12 lg:py-16">
      <div className="bg-bgcontact bg-no-repeat bg-cover rounded-[24px] lg:px-32 p-10 lg:py-16 flex justify-end items-center ">
        <div className="lg:w-[50%]">
          <h6 className="font-[900] text-white lg:text-[30px] text-[20px] font-nunito lg:text-left text-center">
            Want to know more about us?
          </h6>
          <p className="font-[500] text-white lg:text-[15px] text-xs font-roboto mt-4 lg:mb-10 mb-8 leading-8 lg:text-left text-center">
            If you have any questions or need assistance, please do not hesitate
            to contact our support team.
          </p>
          <div className="lg:flex grid lg:gap-8 gap-4 items-center">
            <BtnDownload href="Weam-official.pdf" download={true}>
              <Icon icon="subway:download-3"></Icon> Download Company&apos;s
              Profile
            </BtnDownload>
            <BtnContact href="/contact">Contact Us</BtnContact>
          </div>
        </div>
      </div>
    </div>
  );
};

const BtnDownload = tw.a`bg-[#fff] border-[1px] border-[#000] text-[#434343] justify-center rounded-[8px] py-3 px-6 font-[400] lg:text-[15px] text-xs font-inter flex items-center gap-2 lg:w-fit w-full  hover:opacity-80`;
const BtnContact = tw.a`border-[1px] border-white text-[#fff] rounded-[8px] py-3 px-6 font-[400] lg:text-[15px] text-xs bg-[#434343] font-inter  text-center lg:w-fit w-full hover:opacity-80`;
export default Contact;
