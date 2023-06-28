import React, { useEffect } from "react";
import "./globals.css";
import { Inter, Nunito, Roboto, Poppins } from "next/font/google";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  description:
    "Weam and Company (Nigeria) Limited is an ISO 9001:2008 certified multi-disciplinary Engineering Company incorporated in March 1985 to provide Engineering Design, Software, Training, Specialized Services to the Oil and Gas, Energy, Manufacturing and Environmental Sectors in Nigeria and the West African sub-region.",
  keywords:
    "nigeria construction company, engineering company in nigeria, logistics company in nigeria, engineering design company in nigeria, software training company in nigeria, procument company in nigeria",
  robots: "index,follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          roboto.variable,
          poppins.variable,
          nunito.variable,
          inter.className,
          "antialiased"
        )}>
        <main className="font-roboto 2xl:container mx-auto">{children}</main>
      </body>
    </html>
  );
}
