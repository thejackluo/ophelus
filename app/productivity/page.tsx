import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to the productivity page! Based on page.tsx</h1>
        <p>This is where all your tasks are tracked and went through :3</p>
        <Link className="bg-blue-300" href={"../"}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
