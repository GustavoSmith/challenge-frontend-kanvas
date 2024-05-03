import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const STIX = localFont({
  src: "/fonts/stixtwotext-variablefont_wght-webfont.woff2",
  display: "swap",
  variable: "--font-stix",
});

const Avenir = localFont({
  src: "/fonts/avenirltstd-roman-webfont.woff2",
  variable: "--font-Avenir",
  /* {
      path: "/fonts/avenirltstd-heavy-webfont.woff2",
      style: "normal",
      weight: "600",
    }, */
  /* {
      path: ,
      style: "normal",
    }, */
});

export const metadata: Metadata = {
  title: "Kanvas",
  description: "Landing page for Kanvas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${STIX.variable} ${Avenir.variable}`}>{children}</body>
    </html>
  );
}
