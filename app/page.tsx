import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Employer Portal</h1>
      <p className="mb-6 text-gray-600">Legal compliance portal for employers and business owners.</p>
      <Link href="/dashboard" className="px-4 py-2 border rounded-lg">
        Preview Dashboard
      </Link>
    </main>
  );
}
