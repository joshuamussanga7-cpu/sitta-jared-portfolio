import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sitta Jared Mussanga - Flutter & Android Developer",
  description: "Portfolio of Sitta Jared Mussanga, an innovative Mobile App Developer specializing in Flutter and Android Studio.",
  keywords: ["Sitta Jared Mussanga", "Flutter Developer", "Android Developer", "Mobile App Development", "Tanzania Developer", "AdMob", "Firebase"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sittajared.dev", // You can update this once you have a domain
    siteName: "Sitta Jared Portfolio",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Sitta Jared Mussanga",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
