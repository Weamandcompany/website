"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import CheckMark from "public/icons/check-mark.svg";
import cn from "classnames";
import Link from "next/link";
import { SponsorImages } from "@/utils/constants";

const HeroSupport = () => {
  const [navItems, setNavItems] = useState([
    { name: "Who we are", link: "who-we-are" },
    { name: "Our Clientele", link: "our-clientele" },
    { name: "Partners", link: "partners" },
    { name: "Certificates", link: "certificates" },
    { name: "HSE Policy", link: "hse-policy" },
    { name: "Quality Policy Statement", link: "policy-Statement" },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sticky = divRef?.current?.offsetTop ?? 0;

    const handleScroll = () => {
      if (divRef.current) {
        let shouldFix = window.scrollY >= sticky ? true : false;
        setIsFixed(shouldFix);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="pt-10 pb-12">
        <div
          ref={divRef}
          className={cn("container mx-auto mb-10", {
            "fixed bottom-[0] md:bottom-[12px] inset-x-[0] z-[2] !mb-0 [&_.xnav]:md:p-1.5 [&_.xnav]:p-0 [&_.xnav]:md:rounded-md [&_.xnav]:rounded-none [&_.navb]:md:rounded [&_.navb]:rounded-none":
              isFixed,
          })}>
          <div className="flex justify-center overflow-x-auto">
            <ul className="xnav list-none flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 items-center rounded-md shadow-light2 bg-[#fdf4ec]">
              {navItems.map((nav, index) => (
                <li
                  key={index}
                  className="flex items-center after:border-r after:last:border-r-0 after:border-slate-300 after:h-4 after:mx-4 after:last:mx-0">
                  <a
                    href={`#${nav.link}`}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "navb rounded text-sm text-[#61657E] font-medium whitespace-nowrap py-4 px-5 transition-colors duration-300 [&.active]:bg-worange bg-transparent [&.active]:text-white",
                      { active: index == activeIndex }
                    )}>
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('images/narrow-rects.png')",
          }}>
          <div className="container lg:w-full md:w-[90%] mx-auto grid md:grid-cols-12 gap-x-4 pt-16">
            <div className="col-span-6" id="who-we-are">
              <Slide duration={500} cascade triggerOnce={true}>
                <h6 className="text-worange lg:text-[15px] text-sm font-[500] mb-3 px-4 md:px-0">
                  Excellence Powered By Innovation
                </h6>
                <h3 className="text-wdark font-nunito font-black leading-normal text-2xl md:text-3xl mb-2 px-4 md:px-0">
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
              </Slide>
            </div>

            <div className="col-span-6 flex items-center justify-end">
              <Fade className={"opacity-0"} triggerOnce={true}>
                <Image src="/images/engineer.png" width={1000} height={1000} alt="about us" />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSupport;
