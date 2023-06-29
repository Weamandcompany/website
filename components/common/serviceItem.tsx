"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  let router = useRouter();
  return (
    <div className="relative">
      <div className="bg-[#DDDFFF] py-[3.7rem] rounded-[8px] absolute top-[18%] w-full"></div>

      <div className="overflow-hidden relative flex">
        <div
          onClick={() => router.push(link ?? "")}
          className=" pb-8 pr-0 lg:px-8 lg:py-5 p-4 text-[#0C1239] shadow-lg bg-white z-[2000] relative mx-10 rounded-[8px] mb-8 lg:h-[210px] transition-all duration-500 hover:bg-[#0C1239] to-white via-[#0C1239] hover:cursor-pointer from-[#fff] hover:bg-size-200 hover:bg-right-bottom hover:text-white"
        >
          <h6 className="font-roboto font-[600] text-[16px]">{title}</h6>
          <p className="font-roboto pr-8 font-[400] text-[13px] mt-3 mb-6">
            {description}
          </p>
          <Link
            href={link ?? ""}
            className="font-poppins text-[13px] font-[400] mb-8 hover:underline"
          >
            Read More
          </Link>
          <div className="flex justify-end cursor-pointer">
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
  );
};

export default ServiceItem;
