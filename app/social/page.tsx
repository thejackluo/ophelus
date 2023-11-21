import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Here is the social page!</h1>
        <Link className="bg-blue-300" href={"../"}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
