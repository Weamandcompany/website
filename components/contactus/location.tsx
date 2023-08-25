import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import Map from "./map";

const data = [
  <>
    <p className="lg:text-left text-center">
      Plot 42C, Road 22, Federal Housing Estate, Rumueme (Agip), P.O.Box 12450,
      Port Harcourt, Rivers State, Nigeria. <br />
      <br /> +234 818 152 7677
    </p>
  </>,
  <>
    <p className="lg:text-left text-center">
      12 Daniel Yakwo Close, 69(A) Road, Gwarinpa II Estate, Box 21, PSIN Post
      Office, Gwarinpa, Abuja, Nigeria.,
      <br /> <br /> +234 818 152 7676
    </p>
  </>,
];

const Location = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="border-[1px] border-[#61657E] p-5 border-dashed rounded">
      <h6 className="text-[#1C1C1C] text-center font-roboto text-[20px] font-bold">
        Need Any Help?
      </h6>
      <p className="text-[#61657E] text-[12px] font-sans text-center mt-1 lg:mb-5 mb-3">
        Call us or message and we&apos;ll respond as soon as possible
      </p>
      <div className="lg:flex gap-1 flex-wrap mb-5">
        <div className="lg:w-[32.5%] p-4 text-xs font-sans flex-wrap">
          <Icon
            icon={"ic:outline-email"}
            className="h-[42px] w-[42px] bg-[#FE5D14] text-white p-[.6rem] rounded-full mb-4 lg:mx-0 mx-auto"
          />
          <div className="lg:text-left text-center">
            <Link href={"mailto:info@weamandcompany.com"} className="underline">
              info@weamandcompany.com
            </Link>
          </div>
        </div>
        {data?.map((item, i) => (
          <div
            className={`${
              isActive === i && "bg-[#F4F6FF]"
            } lg:w-[31%] p-4 text-xs font-roboto cursor-pointer`}
            key={i}
            onClick={() => setIsActive(i)}
          >
            <Icon
              icon={"mi:location"}
              className={`${
                isActive == i ? "bg-[#0C1239]" : "bg-[#FE5D14]"
              } h-[42px] w-[42px]  text-white p-[.6rem] rounded-full mb-4 lg:mx-0 mx-auto`}
            />
            {item}
          </div>
        ))}
      </div>
      <div>
        {isActive === 0 && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7378580353734!2d6.969412274778651!3d4.815011540656412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cef843962f9d%3A0xfe8c637dfde79292!2sWeam%20and%20Company%20Limited!5e0!3m2!1sen!2sng!4v1692958515040!5m2!1sen!2sng"
            height="300"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}

        {isActive === 1 && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.492165687019!2d7.380333674802224!3d9.109939787717183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75f43bb5a89b%3A0x56aefe6598efb003!2sWEAM%20AND%20COMPANY%20LIMITED!5e0!3m2!1sen!2sng!4v1692958406541!5m2!1sen!2sng"
            height="300"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Location;
