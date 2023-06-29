"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { navLinks } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white z-[10000] py-3 fixed w-full">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src={"/images/logo.svg"}
                height={35.11}
                width={60}
                alt="logo"
              />
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-1 rounded-md text-[#fff] hover:text-white hover:bg-[#E47B0E] bg-[#E47B0E]  focus:outline-none focus:bg-[#E47B0E] focus:text-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <Icon icon={"ion:close-outline"} className="h-7 w-7" />
              ) : (
                <Icon icon={"quill:hamburger"} className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="relative  z-[3000]">
        {isOpen && (
          <div className="md:hidden absolute bg-white w-full h-[100vh] flex justify-center">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-center gap-8 mt-10">
              {navLinks?.map((item, i) => (
                <div key={i}>
                  <Link
                    href={item?.link}
                    className={`${
                      pathname === item?.link ||
                      (item?.subLinks || []).some((link) =>
                        pathname.includes(link)
                      )
                        ? "px-6 border-b-[1px] border-[#E47B0E] pb-1 "
                        : "px-6"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-[#E47B0E] text-white rounded-[3px] py-3 px-8 font-[400] text-[13.5px] font-poppins"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavigation;
