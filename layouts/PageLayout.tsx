'use client';

import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { usePathname, useRouter } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { useEffect } from 'react';

export default function PageLayout({
  children,
  showContact = true,
}: {
  children: React.ReactNode;
  showContact?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(pathname + "#top");
  }, [pathname, router]);

  return (
    <>
      <NextTopLoader
        color="#E47B0E"
        height={4}
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
