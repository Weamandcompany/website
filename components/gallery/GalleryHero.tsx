"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryHero = () => {
  return (
    <div className="container lg:w-full md:w-[90%] mx-auto">
      <div className="bg-[#F4F6FF] rounded-none md:rounded-3xl py-16 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 lg:gap-x-14">
          <div className="">
            <Slide duration={700} triggerOnce={true}>
              <h3 className="text-wdark text-center md:text-left font-nunito font-extrabold lg:text-[40px] text-[25px] leading-[1.4] mb-4">
                Inside Weam and Company
              </h3>

              <p className="font-nunito text-[14px] text-center md:text-left leading-[2.5] sm:text-[15px] sm:leading-[2.5] text-wdark font-semibold">
                Welcome to Weam and Company Limited, where innovation thrives and solutions come to
                life. With our team of experts and a passion for excellence.
              </p>
            </Slide>
          </div>

          <div>
            {/* <ResponsiveMasonry columnsCountBreakPoints={{ 320: 4, 768: 2 }}>
              <Masonry gutter="12px">
                {officeImages?.map((image, i) => (
                  <div key={i} className="rounded-md bg-slate-200 overflow-hidden">
                    <Image
                      key={i}
                      src={image}
                      className="w-full h-full block"
                      alt=""
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
