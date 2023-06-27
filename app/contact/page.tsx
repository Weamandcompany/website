"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import ContactForm from "@/components/contactus/form";
import Location from "@/components/contactus/location";

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem] lg:pt-0 pt-[3.5rem]  grid lg:grid-cols-2 lg:gap-8 gap-6 lg:px-32 px-10 lg:mb-16 mb-8">
        <ContactForm />
        <Location />
      </div>
    </PageLayout>
  );
};

export default ContactUs;
