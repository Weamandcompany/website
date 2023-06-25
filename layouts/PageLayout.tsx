import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
