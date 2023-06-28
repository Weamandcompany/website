"use client";

import React, { useEffect } from "react";
import "./globals.css";
import { Inter, Nunito, Roboto, Poppins } from "next/font/google";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";
import { usePathname, useRouter } from "next/navigation";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(pathname + "#top");
  }, [pathname, router]);

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
        )}
      >
        <main className="font-roboto 2xl:container mx-auto">{children}</main>
      </body>
    </html>
  );
}
