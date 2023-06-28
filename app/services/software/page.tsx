"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import { Fade, Slide } from "react-awesome-reveal";

const Row = ({ cellOne, cellTwo }: { cellOne: string; cellTwo: string }) => (
  <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
    <div className="px-6 py-4">{cellOne}</div>
    <div className="px-6 py-4">{cellTwo}</div>
  </div>
);

const SoftwareServices = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/software.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="sofware banner"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Software sales, Deployment and Support.
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              We offer end-to-end software solutions. From sales to deployment
              and ongoing support, our experts ensure a seamless experience.
              Choose the right software with our personalized consultations. Our
              skilled professionals handle smooth deployment, minimizing
              disruptions. Count on us for dedicated support, updates, and
              training. Enhance productivity with our comprehensive services.
            </p>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={false}>
            <ServiceSidebar />
          </Fade>
        </div>
      </div>
      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="grid grid-cols-2 text-sm font-normal text-left text-white bg-wdark">
              <div className="px-6 py-4">
                Software sales, Deployment and Support
              </div>
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
    </PageLayout>
  );
};

export default SoftwareServices;
