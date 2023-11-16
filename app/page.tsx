import { Young_Serif } from "next/font/google";
import { exo } from "@/app/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello everyone, welcome to Ophelus</h1>
      <Link className="text-blue-500" href="game">
        Press here
      </Link>
      <div>
        <Image
          src="/city.webp"
          width={1000}
          height={760}
          alt="A cyberpunk city"
        />
        <h1 className={`${exo.className} antialiased`}>
          This is a work in progress, but I hope that this project will grow to
          be significant
        </h1>
      </div>
    </main>
  );
}
