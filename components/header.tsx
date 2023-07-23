'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNavigation from './mobilenav';
import { navLinks } from '@/utils/constants';
import { Fade } from 'react-awesome-reveal';
import { services } from '@/utils/constants';

const Header = ({ bgcolor }: { bgcolor?: string }) => {
  const pathname = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="fixed 2xl:container lg:block md:block hidden top-2 z-[100] w-full">
        <ul
          style={{
            background: bgcolor ? bgcolor : 'bg-white',
          }}
          className={`lg:w-[60%] w-[90%] bg-white mx-auto rounded-[20px]  p-5 flex justify-between items-center`}
        >
          {bgcolor ? (
            <Image
              src={'/images/logowhite.svg'}
              height={0}
              width={0}
              alt="logo"
              className="h-[46px] w-auto"
            />
          ) : (
            <Image
              src={'/images/logo.svg'}
              height={0}
              width={0}
              alt="logo"
              className="h-[46px] w-auto"
            />
          )}
          <div className="flex items-center gap-10  font-[600] text-sm font-roboto ">
            {navLinks?.map((item, i) => (
              <li key={i} className="relative">
                <Link
                  href={item?.link}
                  className={`${
                    pathname === item?.link ||
                    (item?.subLinks || []).some((link) =>
                      pathname.includes(link)
                    )
                      ? 'px-6 border-b-[1px] border-[#E47B0E] pb-1  '
                      : 'px-6'
                  }`}
                  style={{ color: bgcolor ? 'white' : '#0C1239' }}
                  onMouseEnter={() => {
                    item?.name === 'Services' &&
                      setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  {item?.name}
                </Link>
                <div onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {isDropdownOpen && item?.name === 'Services' && (
                    <Fade>
                      <div className="absolute border-t-[5px] border-t-[#42307D] w-[180px] top-10 -left-6 bg-white shadow px-5 py-4">
                        <ul className="space-y-3">
                          {services.map((item, i) => (
                            <li
                              key={i}
                              className={` font-[400] text-sm ${
                                pathname === item?.link
                                  ? 'text-[#42307D]'
                                  : 'text-[#787878]'
                              }`}
                            >
                              <Link href={item?.link}>{item?.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Fade>
                  )}
                </div>
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
      <div className="lg:hidden md:hidden  block">
        <MobileNavigation />
      </div>
    </>
  );
};

export default Header;
