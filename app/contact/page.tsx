"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import ContactForm from "@/components/contactus/form";
import Location from "@/components/contactus/location";

const ContactUs = () => {
  return (
    <PageLayout showContact={false}>
      <div className="lg:mt-[7.5rem] lg:pt-0 pt-[4.5rem] grid lg:grid-cols-11 lg:gap-8 gap-6 lg:px-32 px-10 lg:mb-16 mb-8">
        <div className="lg:col-span-5">
          <ContactForm />
        </div>
        <div className="lg:col-span-6">
          <Location />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
