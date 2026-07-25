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
  metadataBase: new URL("https://joyfulhome.ug"),
  title: "Helping Families Begin with Confidence | JoyfulHome",
  description:
    "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
  openGraph: {
    type: "website",
    url: "https://joyfulhome.ug/",
    siteName: "JoyfulHome",
    locale: "en_UG",
    title: "Helping Families Begin with Confidence | JoyfulHome",
    description:
      "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
    images: [
      {
        url: "https://joyfulhome.ug/assets/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "JoyfulHome - Your Trusted Premium Care Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping Families Begin with Confidence | JoyfulHome",
    description:
      "Premium in-home nursing and newborn care helping mothers, babies, and families begin parenthood with confidence.",
    images: ["https://joyfulhome.ug/assets/og-image.png"],
  },
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
