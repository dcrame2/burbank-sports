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
  metadataBase: new URL("https://burbanksports.com"),
  title: "Burbank Sports Inc. | Custom Uniforms, Letterman Jackets & Trophies Since 1970",
  description:
    "Family owned since 1970, Burbank Sports is Chicagoland's team specialist. Custom uniforms, letterman jackets, silk screen printing, monogramming, trophies & awards. Call (708) 422-7777.",
  keywords: [
    "Burbank Sports",
    "custom uniforms",
    "letterman jackets",
    "trophies",
    "awards",
    "silk screen printing",
    "monogramming",
    "Burbank IL",
    "Chicagoland sports",
    "team uniforms",
    "custom clothing",
    "sporting goods",
  ],
  openGraph: {
    title: "Burbank Sports Inc. | Chicagoland's Team Specialist Since 1970",
    description:
      "Custom uniforms, letterman jackets, trophies, silk screen printing & more. Family owned and operated for over 50 years.",
    type: "website",
    locale: "en_US",
    siteName: "Burbank Sports Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burbank Sports Inc. | Custom Uniforms & Trophies Since 1970",
    description:
      "Chicagoland's team specialist. Custom uniforms, letterman jackets, trophies & awards. Call (708) 422-7777.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
