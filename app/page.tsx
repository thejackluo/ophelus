import { Young_Serif } from "next/font/google";
import { exo } from "@/app/lib/fonts";
import Image from "next/image";
import Link from "next/link";

// create a variable user that is a string
const user = "Jack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hello World */}
      <h1>Ophelus</h1>
      {/* Nav Bar */}
      <nav>
        <Link className="text-blue-500 mx-2" href="game">
          {user}&apos;s world
        </Link>
        <Link className="text-blue-500 mx-2" href="productivity">
          {user}&apos;s work
        </Link>
        <Link className="text-blue-500 mx-2" href="social">
          {user}&apos;s social
        </Link>
      </nav>
      {/* Landing Page */}
      <main>
        <Image
          src="/city.webp"
          width={1000}
          height={760}
          alt="A cyberpunk city"
        />
        <h1 className={`${exo.className} antialiased`}>
          Ophelus is a work in progress, but I believe that this project will
          yield to something significant.
        </h1>
      </main>

      {/* Footer */}
      <footer>
        <h1>Footer</h1>
      </footer>
    </main>
  );
}
