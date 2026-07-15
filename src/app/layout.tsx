import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Common Loop Works | Software & Data Consultancy",
  description:
    "Common Loop Works helps teams ship reliable software, improve engineering velocity, and build practical AI/data systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
