"use client";

import Contact from "@/components/contact";
import React from "react";
import PageLayout from "@/layouts/PageLayout";

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="bg-heroservice bg-no-repeat bg-cover lg:py-[5.5rem] py-14 lg:mt-[5.5rem]">
        <h6 className="lg:text-[34px] text-[25px] font-[500] font-poppins text-white lg:px-32 px-10">
          Contact Us
        </h6>
      </div>

      <Contact />
    </PageLayout>
  );
};

export default ContactUs;
