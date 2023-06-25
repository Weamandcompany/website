import NotFoundLayout from "@/layouts/404Layout";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <NotFoundLayout>
      <main className="bg-[#161C49] h-[100vh] flex items-center justify-center">
        <div>
          <Image src="404.svg" alt="404" width={374} height={415} />
          <h1 className="text-white text-center my-6 font-poppins font-bold text-[16px]">
            Oops! Page Not Found.
          </h1>
          <Link href={"/"}>
            <Image
              src="backbtn.svg"
              alt="backbtn"
              width={0}
              height={0}
              style={{ width: "50%" }}
              className="mx-auto hover:opacity-80"
            />
          </Link>
        </div>
      </main>
    </NotFoundLayout>
  );
}
