import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import Map from "./map";

const data = [
  "Plot 42C, Road 22, Federal Housing Estate, Rumueme(Agip), P.O.Box 12450, Port Harcourt, Rivers State, Nigeria.",
  "8, B1-Close, 69 Road, Gwarinpa II Estate,Box 21, PSIN Post Office, Gwarinpa, Abuja, Nigeria.",
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
        <div className="lg:w-[36.5%] p-4 text-xs font-sans flex-wrap">
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
            <p className="lg:text-left text-center"> {item}</p>
          </div>
        ))}
      </div>
      <div>
        {isActive === 0 && <Map longitude={6.9794509} latitude={4.8158563} />}
        {isActive === 1 && (
          <Map longitude={7.407276500000001} latitude={9.0437826} />
        )}
      </div>
    </div>
  );
};

export default Location;
