import Image from "next/image";
import HomeCarousel from "@/components/home/carousel";
import HomeServices from "@/components/home/services";
import HomeAbout from "@/components/home/about";
import HomeMission from "@/components/home/mission";
import HomeProjects from "@/components/home/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Image
        src="Shape.svg"
        alt="Shape"
        className="absolute top-0 lg:w-[374px] lg:h-[415px] w-[150px] h-[160px] "
        width={374}
        height={415}
      />
      <HomeCarousel />
      <div className="relative">
        <Image
          src="logos.svg"
          className="absolute lg:top-[-80px] top-[-20px] lg:w-[70.2%] w-[63%] right-0"
          width={0}
          height={0}
          alt="logos"
        />
      </div>
      <HomeAbout />
      <HomeMission />
      <HomeServices />
      <HomeProjects />
      <Contact />
    </main>
  );
}
