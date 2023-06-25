"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobilenav";
import { navLinks } from "@/utils/constants";

const Header = ({ bgcolor }: { bgcolor?: string }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed lg:block hidden top-2 z-[100] w-full">
        <ul
          style={{
            background: bgcolor ? bgcolor : "bg-white",
          }}
          className={`w-[60%] bg-white mx-auto rounded-[20px] overflow-hidden p-5 flex justify-between items-center`}
        >
          {bgcolor ? (
            <Image src={"/images/logowhite.svg"} height={35.11} width={48.5} alt="logo" />
          ) : (
            <Image src={"/images/logo.svg"} height={35.11} width={48.5} alt="logo" />
          )}
          <div className="flex items-center gap-10  font-[600] text-sm font-roboto">
            {navLinks?.map((item, i) => (
              <li key={i}>
                <Link
                  href={item?.link}
                  className={`${
                    pathname === item?.link
                      ? "px-6 border-b-[1px] border-[#E47B0E] pb-1 "
                      : "px-6"
                  }`}
                  style={{ color: bgcolor ? "white" : "#0C1239" }}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </div>
          <li>
            <a
              href="/contact"
              className="bg-[#E47B0E] text-white rounded-[3px] py-3 px-8 font-[400] text-[13.5px] font-poppins"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:hidden block">
        <MobileNavigation />
      </div>
    </>
  );
};

export default Header;
