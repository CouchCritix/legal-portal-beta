import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Please sign in</h1>
        <Link className="px-4 py-2 bg-black text-white rounded-lg" href="/api/auth/signin">Sign in</Link>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-600">Welcome, {session.user?.name || "Employer"}.</p>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white border rounded-xl">
          <h2 className="font-semibold mb-2">Compliance Checklist</h2>
          <ul className="list-disc ml-5 text-sm">
            <li>AB5/Independent Contractor evaluation</li>
            <li>Meal/Rest break policy confirmation</li>
            <li>Harassment training tracker</li>
          </ul>
        </div>
        <div className="p-4 bg-white border rounded-xl">
          <h2 className="font-semibold mb-2">Documents</h2>
          <ul className="list-disc ml-5 text-sm">
            <li>Employee Handbook (template)</li>
            <li>At-Will Employment Agreement</li>
            <li>Wage Theft Prevention Notice</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
