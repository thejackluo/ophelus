import { Young_Serif } from "next/font/google";
import { exo } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-100">
        <h1>Hello everyone, welcome to Ophelus</h1>
        <Link className="text-blue-500" href="game">
          Press here
        </Link>
        {/* triangle */}
        {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
      </div>
      <div>
        <Image
          src="/city.webp"
          width={1000}
          height={760}
          alt="A cyberpunk city"
        />
        <h1 className={`${exo.className} antialiased`}>
          Here is a beautiful city generated using dalle 3, this font should
          also be futuristic
        </h1>
      </div>
    </main>
  );
}
