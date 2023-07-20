import { quickLinks, services } from '@/utils/constants';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footernav = () => {
  return (
    <div className="lg:mx-32 mx-5 pt-12 grid lg:grid-cols-3 grid-cols-1 space-y-4 text-white">
      <div>
        <h6 className="font-bold mb-6">QUICK LINKS</h6>
        {quickLinks?.map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className="flex items-center gap-3 mb-4 text-sm hover:underline"
          >
            <Icon icon="ph:arrow-right-bold" /> {item?.name}
          </Link>
        ))}
      </div>{' '}
      <div>
        <h6 className="font-bold mb-6">OUR EXPERTISE</h6>
        {services?.map((item, i) => (
          <Link
            key={i}
            href={item?.link}
            className="flex items-center gap-3 mb-4 text-sm hover:underline"
          >
            <Icon icon="ph:arrow-right-bold" /> {item?.name}
          </Link>
        ))}
      </div>
      <div>
        <h6 className="font-bold mb-6">GET IN TOUCH</h6>
        <div className="mb-4">
          <p className="text-[13px] font-bold mb-2">Coporate Head Office</p>
          <p className="text-sm leading-6">
            12 Daniel Yakwo close, 69(A)Road Gawrimpa II Estate, Federal Capital
            Territory, Abuja.
          </p>
          <p className="text-sm mt-3">Tel: +234 818 152 7676</p>
        </div>
        <div className="mb-4">
          <p className="text-[13px] font-bold mb-2">Operations Office</p>
          <p className="text-sm leading-6">
            Plot 42C, Road 22, Federal Housing Estate, Rumueme (Agip), Mile IV,
            P.O.Box 12450, Port Harcourt, Rivers State, Nigeria.
          </p>
          <p className="text-sm mt-3">Tel: +234 818 152 7676</p>
        </div>
        <p className="text-[13px] font-bold mb-2">Email Address</p>
        <p className="text-sm">
          Email:{' '}
          <Link
            href={'mailto:info@weamandcompany.com'}
            className="hover:underline"
          >
            info@weamandcompany.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footernav;
