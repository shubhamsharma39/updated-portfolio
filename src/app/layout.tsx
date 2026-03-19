import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Sharma | DevOps Engineer",
  description: "Portfolio of Shubham Sharma - DevOps Engineer specializing in AWS, Docker, Kubernetes, CI/CD, and Python Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative text-white selection:bg-cyan-500/30">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow flex flex-col items-center w-full px-4 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
