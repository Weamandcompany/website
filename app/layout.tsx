import Footer from "@/components/footer";
import Header from "../components/header";
import "./globals.css";
import { Inter, Nunito, Roboto, Poppins } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

export const metadata = {
  title: "Weam and Company Limited",
  description:
    "A company that provide a diverse range of client-focused and cost-effective services in the oil and gas industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.variable,
          poppins.variable,
          nunito.variable,
          inter.className,
          "antialiased"
        )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
