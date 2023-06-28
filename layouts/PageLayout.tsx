import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NextTopLoader from "nextjs-toploader";

export default function PageLayout({
  children,
  showContact = true,
}: {
  children: React.ReactNode;
  showContact?: boolean;
}) {
  return (
    <>
      <NextTopLoader
        color="#E47B0E"
        height={3}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #E47B0E,0 0 5px #E47B0E"
      />
      <Header />
      {children}
      {showContact && <Contact />}
      <Footer />
    </>
  );
}
