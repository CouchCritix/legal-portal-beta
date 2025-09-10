import "../styles/globals.css";

export const metadata = {
  title: process.env.PORTAL_NAME || "Employer Portal",
  description: "Legal compliance portal for employers and business owners",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
