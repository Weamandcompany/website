"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ClientCard = ({ src }: { src: string }) => (
  <div className="bg-white rounded p-2">
    <Image src={src} width={200} height={0} className="w-auto" alt="client" />
  </div>
);

const ClientSection = () => {
  return (
    <>
      <section id="our-clientele" className="bg-[#F9F4FF] mx-8 pt-10 pb-14">
        <div className="max-w-lg mx-auto mb-6">
          <h3 className="text-wdark text-center font-nunito font-black leading-normal text-2xl md:text-3xl mb-3">
            OUR CLIENTELE
          </h3>
          <p className="text-xs leading-loose sm:text-sm sm:leading-loose text-wdark font-medium text-center">
            Our engineering expertise has earned us the trust of industry
            leaders across sectors, including manufacturing, construction,
            aerospace, automotive, and energy. Join our esteemed clientele and
            experience our trusted solutions firsthand.
          </p>
        </div>

        <Fade triggerOnce={true} cascade>
          <ul className="max-w-[800px] mx-auto grid grid-cols-1 gap-y-7 list-none">
            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-5.png" />
              <ClientCard src="/images/clients/client-12.png" />
              <ClientCard src="/images/clients/client-17.png" />
              <ClientCard src="/images/clients/client-22.png" />
              <ClientCard src="/images/clients/client-38.png" />
            </li>

            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-1.png" />
              <ClientCard src="/images/clients/client-6.png" />
              <ClientCard src="/images/clients/client-13.png" />
              <ClientCard src="/images/clients/client-18.png" />
              <ClientCard src="/images/clients/client-33.png" />
            </li>

            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-2.png" />
              <ClientCard src="/images/clients/client-7.png" />
              <ClientCard src="/images/clients/client-14.png" />
              <ClientCard src="/images/clients/client-19.png" />
              <ClientCard src="/images/clients/client-36.png" />
            </li>

            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-3.png" />
              <ClientCard src="/images/clients/client-8.png" />
              <ClientCard src="/images/clients/client-15.png" />
              <ClientCard src="/images/clients/client-20.png" />
              <ClientCard src="/images/clients/client-35.png" />
            </li>

            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-4.png" />
              <ClientCard src="/images/clients/client-9.png" />
              <ClientCard src="/images/clients/client-16.png" />
              <ClientCard src="/images/clients/client-21.png" />
              <ClientCard src="/images/clients/client-34.png" />
            </li>

            <li className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-3 rounded-md bg-[#F4F6FF] shadow-light py-3 px-3">
              <ClientCard src="/images/clients/client-39.png" />
              <ClientCard src="/images/clients/client-10.png" />
            </li>
          </ul>
        </Fade>
      </section>
    </>
  );
};

export default ClientSection;
