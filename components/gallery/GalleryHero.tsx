"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryHero = () => {
  const officeCollection = [
    "/images/group/frontdesk.webp",
    "/images/group/reception.webp",
    "/images/group/boardroom.webp",
    "/images/group/office-5.webp",
    "/images/group/office-6.webp",
  ];

  return (
    <div className="container lg:w-full md:w-[90%] mx-auto">
      <div className="bg-[#F4F6FF] rounded-none md:rounded-3xl py-10 px-4 xs:px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-y-6 md:gap-x-6 lg:gap-x-14">
          <div className="col-span-4">
            <Slide duration={700} triggerOnce={true}>
              <h3 className="text-wdark text-center md:text-left font-nunito font-extrabold lg:text-[40px] text-[25px] leading-[1.4] mb-4">
                Inside Weam and Company Limited
              </h3>

              <p className="font-nunito text-[14px] text-center md:text-left leading-[2.5] sm:text-[15px] sm:leading-[2.2] text-wdark font-semibold">
                Keep in touch with all activities going on at Weam and Company Limited.
              </p>
            </Slide>
          </div>

          <div className="col-span-7">
            <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 768: 2 }}>
              <Masonry gutter="7px">
                <div className="relative">
                  <div className="rounded-md bg-slate-200 overflow-hidden">
                    <Image
                      src="/images/group/office-1.webp"
                      className="w-full h-full block"
                      alt=""
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="text-xs sm:text-sm bg-[#0F1437] py-1 sm:py-2 px-2 sm:px-4 rounded text-white font-medium absolute m-2 bottom-0 left-0 z-[5]">
                    Abuja Office
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-md bg-slate-200 overflow-hidden">
                    <Image
                      src="/images/group/office-2.webp"
                      className="w-full h-full block"
                      alt=""
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="text-xs sm:text-sm bg-[#0F1437] py-1 sm:py-2 px-2 sm:px-4 rounded text-white font-medium absolute m-2 bottom-0 left-0 z-[5]">
                    Port Harcourt Office
                  </div>
                </div>
              </Masonry>
            </ResponsiveMasonry>
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-[8px] mt-[8px]">
              {officeCollection.map((image, i) => (
                <div className="rounded-md bg-slate-200 overflow-hidden">
                  <Image
                    key={i}
                    src={image}
                    className="w-full h-full block"
                    alt=""
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
