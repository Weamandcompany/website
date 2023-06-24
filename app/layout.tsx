import Footer from "@/components/footer";
import Header from "../components/header";
import "./globals.css";
import { Inter } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weam and Company Limited",
  description:
    "A company that provide a diverse range of client-focused and cost-effective services in the oil and gas industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
