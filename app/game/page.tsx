import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Welcome to your world, this is where you will create miracles, and
          reach grander goals of your life
        </h1>
        <h3>
          To begin interacting with this world, stayed tuned as this page is
          still in development T_T
        </h3>
        <Link className="bg-blue-300" href={"../"}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
