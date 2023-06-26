import { Icon } from "@iconify/react";
import React from "react";
import tw from "tailwind-styled-components";

const ContactForm = () => {
  return (
    <div className="bg-bgcontactform bg-no-repeat bg-cover rounded-[8px] lg:p-12 p-4  ">
      <h6 className="text-[#1C1C1C] font-roboto text-[24px] font-bold">
        Contact With Us{" "}
      </h6>
      <p className="text-[#61657E] text-[12px] font-sans mt-1 lg:mb-8 mb-3">
        Send us a message and we&apos;ll respond as soon as possible{" "}
      </p>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <Input placeholder="Name*" />
        <Input placeholder="Email*" />
      </div>
      <Input placeholder="Subject" className="w-full mb-4" />
      <Textarea placeholder="Your Message here" rows={8} />

      <Button href="/about">
        Send Message <Icon icon="ph:arrow-right-bold"></Icon>
      </Button>
    </div>
  );
};

const Button = tw.a`bg-[#E47B0E] justify-center w-full text-white rounded-[3px] lg:py-3 lg:px-8 py-2 px-4 font-[400] text-[13.5px] font-poppins flex items-center gap-2 hover:opacity-80`;
const Input = tw.input`border-[1px] border-[#F4F6FF] p-[.6rem] outline-0 rounded-[9px] placeholder:text-xs text-sm`;
const Textarea = tw.textarea`border-[1px] border-[#F4F6FF] p-[.6rem] outline-0 rounded-[9px] placeholder:text-xs text-sm mb-4 w-full`;
export default ContactForm;
