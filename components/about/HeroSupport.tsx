"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import CheckMark from "public/icons/check-mark.svg";

const HeroSupport = () => {
  return (
    <>
      <section className="pt-10 pb-16 px-4 xs:px-5 sm:px-6">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('images/narrow-rects.png')",
          }}>
          <div className="container grid md:grid-cols-12 gap-x-4 pt-16 pb-12">
            <div className="col-span-6">
              <Slide cascade triggerOnce={false}>
                <h6 className="text-worange lg:text-[15px] text-sm font-[500] mb-3">
                  An Excellence Powered By Innovation
                </h6>
                <h3 className="text-wdark font-nunito font-black leading-normal text-2xl md:text-3xl mb-2">
                  Driving Excellence: Unleashing the Power of Seamless Operations.
                </h3>

                <div className="flex flex-col gap-y-5 mt-10">
                  <div className="flex items-start gap-1 sm:gap-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[47px] w-[47px]" />
                    </div>
                    <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                      Weam and Company Limited is an ISO 9001:2015 and COREN certified company with
                      over (35) thirty -five years of experience in delivering Engineering Design,
                      Software Sales, Technical Consulting, Project Management, and Capacity
                      Development (Training) Services in Nigeria and the West African subregion.
                    </p>
                  </div>

                  <div className="flex items-start gap-1 sm:gap-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[47px] w-[47px]" />
                    </div>
                    <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                      We provide our clients with engineering expertise throughout a project
                      lifecycle; through feasibility studies/concept engineering, front-end,
                      detailed, construction engineering, procurement support, construction
                      management, 2D and 3D as-built documentation in green and brownfield (large
                      and small scale) projects for Upstream, Mid - stream and Downstream facilities
                      as well as corrosion control for the maritime industry.
                    </p>
                  </div>

                  <div className="flex items-start gap-1 sm:gap-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[47px] w-[47px]" />
                    </div>
                    <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                      Our team is made up of highly skilled and experienced engineers and other
                      professionals in Process, Mechanical, Piping, Pipeline, Instrumentation,
                      Automation, and Control, Civil/Structural, Electrical, Telecoms, Materials and
                      Corrosion Control, Technical Safety, with strong capabilities in providing
                      practical solutions to complex problems at all phases of engineering projects.
                      We also offer data archiving and digitization services.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start">
                  <a
                    href="#"
                    className="mt-8 md:ml-10 btn-yellow font-poppins flex items-center gap-2 w-fit hover:opacity-80 px-7">
                    Learn More
                    <Icon icon="ph:arrow-right-bold"></Icon>
                  </a>
                </div>
              </Slide>
            </div>

            <div className="col-span-6">
              <Fade triggerOnce={false}>
                <Image src="/images/engineer.png" width={1000} height={1000} alt="about us" />
              </Fade>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </section>

      <section className="pt-10 pb-16 px-4 xs:px-5 sm:px-6">
        <h3 className="text-wdark font-nunito font-black leading-normal text-2xl md:text-3xl mb-5 text-center">
          Our Certificates and Permits
        </h3>

        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 justify-center max-w-7xl mx-auto gap-3">
          <div className="rounded-md bg-white shadow-air p-1.5">
            <Image
              src="/images/cert-1.png"
              width={200}
              height={200}
              className="w-auto h-20 object-cover"
              alt="Certificates"
            />
          </div>

          <div className="rounded-md bg-white shadow-air p-1.5">
            <Image
              src="/images/cert-2.png"
              width={200}
              height={200}
              className="w-auto h-20 object-cover"
              alt="Certificates"
            />
          </div>

          <div className="rounded-md bg-white shadow-air p-1.5">
            <Image
              src="/images/cert-3.png"
              width={200}
              height={200}
              className="w-auto h-20 object-cover"
              alt="Certificates"
            />
          </div>

          <div className="rounded-md bg-white shadow-air p-1.5">
            <Image
              src="/images/cert-4.png"
              width={200}
              height={200}
              className="w-auto h-20 object-cover"
              alt="Certificates"
            />
          </div>

          <div className="rounded-md bg-white shadow-air p-1.5">
            <Image
              src="/images/cert-5.png"
              width={200}
              height={200}
              className="w-auto h-20 object-cover"
              alt="Certificates"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSupport;
