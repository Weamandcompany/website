"use client";

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const GalleryGroup = ({
  className,
  collection,
}: {
  className?: string;
  collection: { title: string; subtitle: string; photos: string[] };
}) => {
  return (
    <div className={cn("container mb-10", className)}>
      <div className="bg-[#0F1437] rounded-md grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-12 py-4 sm:py-7 px-3 sm:px-5 md:px-12 mb-3">
        <div className="sm:col-span-12 md:col-span-5">
          <h3 className="text-white/80 font-semibold text-lg">{collection?.title}</h3>
        </div>
        <div className="sm:col-span-12 md:col-span-6">
          <p className="text-white/80 font-medium text-xs sm:text-sm line-clamp-2">
            {collection?.subtitle}
          </p>
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 768: 4, 1024: 5 }}>
        <Masonry gutter="12px">
          {collection?.photos?.map((image, i) => (
            <div key={i} className="rounded-md bg-slate-200 overflow-hidden">
              <Image
                key={i}
                src={image}
                className="w-full h-full block min-h-[150px]"
                alt=""
                width={200}
                height={200}
                priority
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
