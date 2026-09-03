import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const siteUrl = "https://portfolio.clastarhub.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sitta Jared Mussanga | Mobile & Full-Stack Developer",
    template: "%s | Sitta Jared Mussanga",
  },
  description:
    "Portfolio of Sitta Jared Mussanga — a Mobile & Full-Stack Developer building practical mobile, web, AI, and digital products with Flutter, Firebase, Next.js, and AI.",
  keywords: [
    "Sitta Jared Mussanga",
    "Sitta Jared",
    "Mobile Developer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Android Developer",
    "Next.js Developer",
    "Firebase Developer",
    "AI Developer",
    "Tanzania Developer",
  ],
  authors: [{ name: "Sitta Jared Mussanga" }],
  creator: "Sitta Jared Mussanga",
  publisher: "Sitta Jared Mussanga",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sitta Jared Portfolio",
    title: "Sitta Jared Mussanga | Mobile & Full-Stack Developer",
    description:
      "Explore the work of Sitta Jared Mussanga across mobile apps, web platforms, AI products, business systems, and games.",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Sitta Jared Mussanga — Mobile & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitta Jared Mussanga | Mobile & Full-Stack Developer",
    description:
      "Mobile, web, AI, and digital products built with Flutter, Firebase, Next.js, and AI.",
    images: ["/me.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
