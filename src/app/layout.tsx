import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
  description:
    "Rian Airsmith adalah pengrajin senapan angin tangan dengan presisi dan kualitas tinggi. Tersedia air rifle, air pistol, dan aksesoris untuk olahraga tembak serta koleksi pribadi. Kirim ke seluruh Indonesia.",
  keywords: [
    "senapan angin",
    "air rifle",
    "air pistol",
    "rian airsmith",
    "pengrajin senapan angin",
    "senapan angin tangan",
    "jual senapan angin",
    "air gun Indonesia",
  ],
  authors: [{ name: "Rian Airsmith" }],
  openGraph: {
    title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
    description:
      "Pengrajin senapan angin tangan dengan presisi dan kualitas tinggi. Air rifle, air pistol, dan aksesoris.",
    type: "website",
    locale: "id_ID",
    siteName: "Rian Airsmith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
    description:
      "Pengrajin senapan angin tangan dengan presisi dan kualitas tinggi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
