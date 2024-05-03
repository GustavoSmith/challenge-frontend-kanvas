import type { Metadata } from "next";
import { Inter, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const STIX = STIX_Two_Text({ subsets: ["latin"] });

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
      <body className={`${STIX.className} ${inter.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
