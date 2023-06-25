import Header from "@/components/header";

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased ">
        <Header bgcolor="#161C49" />
        {children}
      </body>
    </html>
  );
}
