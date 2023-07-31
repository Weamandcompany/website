"use client";

import React from "react";
import { csrImages } from "@/utils/constants";
import { Fade, Slide } from "react-awesome-reveal";
import CheckMark from "public/icons/check-mark.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const CorporateSocial = () => {
  return (
    <>
      {/* policy Statement */}
      <section id="social-responsibility" className="px-0 xs:px-5 sm:px-6">
        <div className="container mx-auto bg-bgcommunity bg-repeat-x bg-[size:150%] sm:bg-contain bg-bottom bg-wdark pt-16 pb-20 sm:pb-24 md:pb-32 mt-14 mb-16 px-4 sm:px-6 md:px-10 xs:rounded-3xl">
          <h3 className="text-white font-nunito max-w-2xl mx-auto font-black leading-normal text-center text-2xl md:text-3xl lg:text-4xl mb-8">
            Corporate Social Responsibility at Weam and Company Limited
          </h3>

          <div className="max-w-4xl mx-auto flex flex-col gap-y-6">
            <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-white text-center font-normal">
              At Weam and Company Ltd, we passionately believe that Corporate Social Responsibility
              symbolizes an enthusiastic commitment and social impact with all the stakeholders. Our
              commitment to corporate social responsibility extends far beyond our core engineering
              and software services. We take immense pride in the positive impact we create within
              communities, fostering sustainable development, and enhancing well-being. As a
              responsible company, giving back to the communities where we operate is an integral
              part of our overall strategy. We deliver relevant and impactful CSR projects through
              periodic need-gap analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 xs:px-5 sm:px-6">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('images/narrow-rects.png')",
          }}>
          <div className="container lg:w-full md:w-[90%] mx-auto grid md:grid-cols-12 lg:gap-x-10 gap-y-5 pt-8">
            <div className="col-span-6">
              <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 768: 2, 1024: 2 }}>
                <Masonry gutter="12px">
                  {csrImages.map((image, i) => (
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
              </ResponsiveMasonry>
            </div>

            <div className="col-span-6" id="who-we-are">
              <Fade duration={500} cascade direction="up" triggerOnce={true}>
                <h3 className="text-wdark font-nunito font-black leading-normal text-2xl md:text-3xl mb-2 md:px-0">
                  Infrastructure/Community Development
                </h3>

                <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                  The communities where we work are the reasons why we exist; our role is to make
                  them stronger.
                </p>

                <div className="flex flex-col mt-10">
                  <div className="flex items-start gap-1 mb-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[40px] w-[40px] -ml-2" />
                    </div>
                    <h3 className="text-wdark font-nunito font-black leading-normal text-xl md:text-2xl">
                      Water Supply Project:
                    </h3>
                  </div>
                  <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                    One of our flagship CSR initiatives is the Water Supply Project in Lungu
                    Village, which is located under Abuja Municipal Area Council. Recognizing the
                    critical need for access to clean drinking water, Weam and company Limited has
                    over the years, successfully provided a reliable supply of clean water on a
                    daily basis. Through this sustainable approach, we have significantly improved
                    the quality of life for the community. This has also been replicated within the
                    environs of our Port Harcourt office and Akabo village under Ikeduru local
                    government area of Imo State.
                  </p>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="flex items-start gap-1 mb-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[40px] w-[40px] -ml-2" />
                    </div>
                    <h3 className="text-wdark font-nunito font-black leading-normal text-xl md:text-2xl">
                      Seasonal Celebrations with Local Communities:
                    </h3>
                  </div>
                  <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                    As part of our dedication to community engagement, Weam and Company Limited
                    actively participates in cultural and religious celebrations, such as Christmas
                    and Salah. During these special occasions, we embrace the spirit of giving by
                    extending our love and support to neighboring communities.
                  </p>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="flex items-start gap-1 mb-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[40px] w-[40px] -ml-2" />
                    </div>
                    <h3 className="text-wdark font-nunito font-black leading-normal text-xl md:text-2xl">
                      Education:
                    </h3>
                  </div>
                  <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                    Weam and company limited provides scholarship opportunities to indigent and
                    exceptionally bright students in an effort to ensure that lack of funds does not
                    truncate their academic dreams.
                  </p>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="flex items-start gap-1 mb-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[40px] w-[40px] -ml-2" />
                    </div>
                    <h3 className="text-wdark font-nunito font-black leading-normal text-xl md:text-2xl">
                      Environment:
                    </h3>
                  </div>
                  <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                    From how we conduct our business to the role we play in communities, Weam and Co
                    Ltd is committed to protecting the environment and tackling climate change by
                    taking actions to reduce greenhouse gas emissions and minimize waste. we will
                    continue to promote policies and practices to reduce potential negative
                    environmental footprints while enhancing our positive environmental impact.
                  </p>
                </div>

                <div className="flex flex-col mt-10">
                  <div className="flex items-start gap-1 mb-2">
                    <div className="flex-shrink-0">
                      <CheckMark className="h-[40px] w-[40px] -ml-2" />
                    </div>
                    <h3 className="text-wdark font-nunito font-black leading-normal text-xl md:text-2xl">
                      Our people:
                    </h3>
                  </div>
                  <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium">
                    We create and cultivate an inclusive work environment where employees can
                    thrive. <br />
                    Our CSR endeavors are deeply rooted in our belief that businesses have a vital
                    role to play in contributing positively to society. At Weam and Company, we
                    remain steadfast in our commitment to empowering the communities we serve,
                    striving for sustainable development, and creating a lasting impact that
                    transcends our professional services. Together, we are dedicated to building a
                    brighter future for all, and we eagerly anticipate continuing our journey of
                    making a meaningful and transformative difference in the lives of those we
                    touch.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateSocial;
