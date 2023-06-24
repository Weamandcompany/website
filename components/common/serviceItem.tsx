"use client";

import Image from "next/image";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="relative">
      <div className="bg-[#DDDFFF] py-[3.7rem] rounded-[8px] absolute top-[18%] w-full"></div>

      <div
        id="content__wrapper"
        className="content overflow-hidden relative flex"
      >
        <div className="content__inner">
          <div className="content__inner-wrapper pb-8 pr-0 px-8 py-5 text-[#0C1239] shadow-lg bg-white z-[2000] relative mx-10 rounded-[8px] mb-8 h-[210px]">
            <h6 className="font-roboto font-[600] text-[16px]">{title}</h6>
            <p className="font-roboto pr-8 font-[400] text-[13px] mt-3 mb-6">
              {description}
            </p>
            <a href="#" className="font-poppins text-[13px] font-[400] mb-8">
              Read More
            </a>
            <div className="content__toggle2 flex justify-end cursor-pointer">
              <Image
                src={icon}
                width={0}
                height={0}
                style={{ width: "30%", height: "auto" }}
                alt={`icon`}
                className="absolute bottom-[0px] mt-12 right-0 rounded-br-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
