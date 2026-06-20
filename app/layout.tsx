import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { StatusBar } from "@/components/layout/StatusBar";

export const metadata: Metadata = {
  title: {
    default: "Alfredo Diomangay — Full Stack Software Engineer",
    template: "%s · Alfredo Diomangay",
  },
  description:
    "Full stack software engineer specialising in Next.js, Node.js, TypeScript, and PostgreSQL. Based in the Philippines, open to remote work.",
  keywords: [
    "full stack developer",
    "software engineer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "React",
    "Philippines",
    "remote",
  ],
  authors: [{ name: "Alfredo Diomangay" }],
  creator: "Alfredo Diomangay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfredo-portfolio.vercel.app",
    siteName: "Alfredo Diomangay",
    title: "Alfredo Diomangay — Full Stack Software Engineer",
    description:
      "Full stack software engineer specialising in Next.js, Node.js, TypeScript, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfredo Diomangay — Full Stack Software Engineer",
    description:
      "Full stack software engineer specialising in Next.js, Node.js, TypeScript, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-base text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <StatusBar />
      </body>
    </html>
  );
}
