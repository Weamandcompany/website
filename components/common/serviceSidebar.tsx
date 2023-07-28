"use client";

import { services } from "@/utils/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white px-6 pt-4 pb-2 shadow-lg">
      <h6 className="text-[#0C1239] text-[19px] font-roboto font-[500]">Our Service</h6>
      <hr className="w-[15%] bg-[#0C1239] h-[1px] border-0" />

      <div className="mt-5 font-[500]">
        {services?.map((item, i) => (
          <div key={i}>
            <Link
              href={item?.link}
              className={`${
                pathname === item?.link
                  ? "bg-[#0C1239] text-white font-roboto"
                  : "bg-[#F4F6FF] text-[#0C1239] font-poppins"
              } text-[15px] flex justify-between items-center mb-4 py-2 px-3 rounded`}>
              {item?.name} <Icon icon="ph:arrow-right-bold"></Icon>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSidebar;
