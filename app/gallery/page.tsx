import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import PageLayout from "@/layouts/PageLayout";
import { collections } from "@/utils/constants";
import { GalleryGroup } from "@/components/gallery/GalleryGroup";
import GalleryHero from "@/components/gallery/GalleryHero";

export const metadata: Metadata = {
  title: "Gallery | Weam",
};

const Gallery = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7rem] md:mt-[2rem] lg:pt-0 pt-[4.5rem] relative px-0">
        <GalleryHero />
        <div className="py-20 px-4 xs:px-5 sm:px-6">
          {collections.map((collection, index) => (
            <GalleryGroup key={index} collection={collection} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Gallery;
