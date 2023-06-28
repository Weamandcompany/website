import Image from "next/image";
import HomeCarousel from "@/components/home/carousel";
import HomeServices from "@/components/home/services";
import HomeAbout from "@/components/home/about";
import HomeMission from "@/components/home/mission";
import ProjectSection from "@/components/common/projects";
import PageLayout from "@/layouts/PageLayout";
import { SponsorImages } from "@/utils/constants";

export const metadata = {
  title: "Weam and Company Limited",
  description:
    "A company that provide a diverse range of client-focused and cost-effective services in the oil and gas industry.",
};

export default function Home() {
  return (
    <PageLayout>
      <Image
        src="/images/Shape.svg"
        alt="Shape"
        className="lg:absolute top-0 lg:w-[374px] 2xl:w-[420px] lg:h-[415px] w-[150px] h-[160px] lg:block hidden"
        width={374}
        height={415}
      />
      <HomeCarousel />
      <div className="relative  lg:mb-0 mb-6">
        <div className=" absolute lg:top-[0px] top-[10px] lg:w-[64%] 2xl:w-[64%] w-[100%] lg:right-0 ">
          <div className="flex gap-3 bg-[#F4F6FF] lg:py-4 py-2 lg:px-3 px-2 lg:justify-end overflow-x-scroll">
            {SponsorImages?.map((item, i) => (
              <Image
                src={item}
                width={0}
                height={0}
                className="lg:w-[100%] lg:h-[auto] w-[150px] bg-white p-1"
                alt={`SponsorImages${i}`}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <HomeAbout />
      <HomeMission />
      <HomeServices />
      <ProjectSection showHeader={true} />
    </PageLayout>
  );
}
