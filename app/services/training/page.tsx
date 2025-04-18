"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import { Icon } from "@iconify/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { trainingData } from "@/utils/constants";
import tw from "tailwind-styled-components";

const TrainingService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/training1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Unlock Your Potentials through Excellent Training on Our Services.
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              At Weam & Company Limited, we offer top-notch service training
              programs that empower your team. Our tailored approach combines
              theoretical knowledge with practical applications to enhance
              skills and drive results. From customer service excellence to
              technical proficiency, our training equips your workforce for
              success. Partner with Weam & Company Limited to unlock your
              team&apos;s potential and elevate your service standards.
            </p>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              Participants are given recognized and verifiable certificates upon
              training completion.
            </p>

            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSckSb2izGWN7TfPPU5XNlxCvmLQOs3M1TUdCZk_G2ho-HyFQw/viewform?vc=0&c=0&w=1&flr=0"
              className="font-poppins  flex items-center justify-center gap-2 w-fit hover:opacity-80 mt-3"
            >
              Register <Icon icon="ph:arrow-right-bold"></Icon>
            </Button>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={true}>
            <ServiceSidebar />
          </Fade>
        </div>
      </div>
      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">
          Training Programs
        </h6>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 ">
          <div>
            <Slide direction="left" cascade triggerOnce={true}>
              {trainingData?.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 mb-4 items-start border-[1px] border-[#EEEEEE] rounded-[14px] p-4"
                >
                  <div className="rounded-[5px] bg-[#E47B0E] p-[2px]">
                    <Icon
                      icon="fluent:checkmark-12-filled"
                      className="text-white"
                      height={20}
                    />
                  </div>
                  <p className="text-[#0C1239] text-[16px] font-roboto font-[400]">
                    {item}
                  </p>
                </div>
              ))}
            </Slide>
          </div>
          <div>
            <Zoom triggerOnce={true}>
              <Image
                src={"/images/training2.svg"}
                className="lg:block relative hidden rounded-lg mb-5"
                width={0}
                height={0}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="projectImage"
              />
            </Zoom>
          </div>
        </div>
      </div>

      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="max-w-md mx-auto text-[#1C1C1C] lg:text-[24px] text-[20px] text-center font-[600] lg:mb-7 mb-7">
          Engineering Design Software/ Process Simulation Training
        </h6>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="grid grid-cols-2 text-sm font-normal text-left text-white bg-wdark uppercase">
              <div className="px-6 py-4">Client</div>
              <div className="px-6 py-4">Training Projects</div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Frontier Oil Limited</div>
              <div className="px-6 py-4">
                Process Modelling using Aspen HYSYS
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                Makon Engineering & Technical Services Limited
              </div>
              <div className="px-6 py-4">
                Process Modelling using Aspen HYSYS <br />
                Modelling Flare System using Aspen Flare System Analyzer
                (Formerly Aspen FLARENET)
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Ministry of Petroleum Resources.</div>
              <div className="px-6 py-4">
                Process Modelling using Aspen HYSYS
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                National Engineering and Technical Company Limited (NETCO)
              </div>
              <div className="px-6 py-4">
                Aspen Capital Cost Estimator (Kbase)
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Chevron Nigeria Limited</div>
              <div className="px-6 py-4">
                Advanced Process Modelling using Aspen HYSYS
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                Warri Refining & Petrochemical Company (WRPC)
              </div>
              <div className="px-6 py-4">
                Process Modelling using Aspen HYSYS
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">PTDF/NNPC</div>
              <div className="px-6 py-4">
                Engineering Design Training Program (EDTP) Comprehensive Phase 2
                <ol className="list-decimal list-inside">
                  <li>
                    Modelling Oil and Gas Production and Facilities using HYSYS
                    Upstream
                  </li>
                  <li>Modelling Flare System using Aspen FLARENET</li>
                  <li>
                    Pipeline and Utility System Modelling using Sunrise System’s
                    PIPENET Suite
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Chevron Nigeria Limited</div>
              <div className="px-6 py-4">
                Process Modelling using Aspen HYSYS
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">DELTA Afrik Engineering Limited</div>
              <div className="px-6 py-4">
                <ol className="list-decimal list-inside">
                  <li>
                    Pipeline and Utility System Modelling using Sunrise System’s
                    PIPENET Suite
                  </li>
                  <li>Process Modelling using Aspen HYSYS</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Nigerian Agip Oil Company (NAOC)</div>
              <div className="px-6 py-4">
                <ol className="list-decimal list-inside">
                  <li>Process Modelling using Aspen HYSYS</li>
                  <li>Advanced Process Modelling using Aspen HYSYS</li>
                  <li>Dynamic Modelling using Aspen HYSYS Dynamics</li>
                  <li>
                    Modelling Pipeline Hydraulics and Multiphase flow using
                    ASPEN PIPESYS
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">PTDF/NNPC</div>
              <div className="px-6 py-4">
                Engineering Design Training Program (EDTP) Comprehensive Phase 1
                <ol className="list-decimal list-inside">
                  <li>Process Modelling using Aspen HYSYS</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">Accenture Limited/NNPC</div>
              <div className="px-6 py-4">
                Engineering Design Training Program (EDTP) Comprehensive Phase 1
                <ol className="list-decimal list-inside">
                  <li>Process Modelling using Aspen HYSYS</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                Shell Petroleum Development Company/ SNEPCO
              </div>
              <div className="px-6 py-4">
                <ol className="list-decimal list-inside">
                  <li>Process Modelling using Aspen HYSYS</li>
                  <li>Advanced Process Modelling using Aspen HYSYS</li>
                  <li>Dynamic Modelling using Aspen HYSYS Dynamics</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                International Energy Services Limited
              </div>
              <div className="px-6 py-4">
                <ol className="list-decimal list-inside">
                  <li>International Energy Services Limited</li>
                  <li>
                    Modelling Flare System using Aspen Flare System Analyzer
                    (Formerly Aspen FLARENET)
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                International Energy Services Limited
              </div>
              <div className="px-6 py-4">
                Aspen ONE Engineering Software
                <ol className="list-decimal list-inside">
                  <li>HYSYS</li>
                  <li>HYSYS Upstream</li>
                  <li>Dynamics Modelling using Aspen HYSYS Dynamics</li>
                  <li>RefSYS</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">
                Nigerian National Petroleum Corporation Group [NNPC Head Office
                Abuja, NPDC, WRPC, KRPC, PHRC, R&D, NETCO AND NGC]
              </div>
              <div className="px-6 py-4">
                Aspen ONE Engineering Software
                <ol className="list-decimal list-inside">
                  <li>HYSYS</li>
                  <li>HYSYS Upstream</li>
                  <li>Dynamics Modelling using Aspen HYSYS Dynamics</li>
                  <li>RefSYS</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">South Atlantic Petroleum Limited</div>
              <div className="px-6 py-4">Aspen HYSYS Steady State</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="max-w-md mx-auto text-[#1C1C1C] lg:text-[24px] text-[20px] text-center font-[600] lg:mb-7 mb-7">
          Business Planning / Execution Software Training
        </h6>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="grid grid-cols-2 text-sm font-normal text-left text-white bg-wdark uppercase">
              <div className="px-6 py-4">Client</div>
              <div className="px-6 py-4">Training Projects</div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">NNPC Limited</div>
              <div className="px-6 py-4">
                <div>Budgeting and Technical Forecasting using esimanage</div>
                <div>Capital and Well Lifecycle Management using Execute</div>
              </div>
            </div>

            <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
              <div className="px-6 py-4">NEPL</div>
              <div className="px-6 py-4">
                <div>
                  Business Planning and Execution using PlanningSpace Dataflow,
                  Economics and Financials.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-3 px-4 font-[600] text-[14px] font-roboto flex items-center gap-2 w-fit hover:opacity-80`;
export default TrainingService;
