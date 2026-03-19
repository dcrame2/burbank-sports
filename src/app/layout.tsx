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
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://burbank-sports.vercel.app"
  ),
  title:
    "Burbank Sports Inc. | Custom Shirts, Jerseys & Sportswear in Burbank, IL",
  description:
    "Burbank Sports makes custom shirts, jerseys, team uniforms, letterman jackets, hoodies & sportswear near Chicago. Silk screen printing, embroidery, trophies & awards. Family owned since 1970. Call (708) 422-7777.",
  keywords: [
    "custom shirts Burbank IL",
    "custom jerseys Chicago",
    "team uniforms near me",
    "custom sportswear Chicagoland",
    "letterman jackets Chicago",
    "silk screen printing Burbank",
    "custom t-shirts south suburbs Chicago",
    "custom hoodies Illinois",
    "school uniforms Burbank IL",
    "embroidery near me",
    "trophy shop Burbank",
    "custom team apparel",
    "screen printing near me",
    "monogramming Burbank IL",
    "sports awards and plaques",
    "custom clothing Burbank",
    "Burbank Sports",
  ],
  openGraph: {
    title: "Burbank Sports | Custom Shirts, Jerseys & Sportswear in Burbank, IL",
    description:
      "Custom shirts, jerseys, letterman jackets, hoodies & sportswear made to order. Silk screen printing, embroidery, trophies & awards in Burbank, IL. Since 1970.",
    type: "website",
    locale: "en_US",
    siteName: "Burbank Sports Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burbank Sports | Custom Shirts, Jerseys & Sportswear",
    description:
      "Custom shirts, jerseys, team uniforms, letterman jackets & more. Family owned since 1970 in Burbank, IL. Call (708) 422-7777.",
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
