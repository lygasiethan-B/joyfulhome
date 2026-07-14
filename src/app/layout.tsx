import type { Metadata } from "next";
import { Raleway, Mali } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway-local",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mali = Mali({
  variable: "--font-mali-local",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const passionate = localFont({
  src: "../../public/fonts/FeelingPassionate.ttf",
  variable: "--font-passionate-local",
});

export const metadata: Metadata = {
  title: "JoyfulHome | Your Trusted Premium Care Partner",
  description:
    "Professional in-home nursing and newborn care that supports mothers, babies and families through pregnancy, postpartum recovery and early parenthood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${mali.variable} ${passionate.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
