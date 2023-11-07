import { Young_Serif } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-200">
        <h1 className="text-blue-500">Hello World</h1>
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
      </div>
    </main>
  );
}


