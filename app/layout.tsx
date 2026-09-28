import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Airbnb ships Cereal, which is licensed and unavailable here. Inter is the
// closest widely-available geometric-humanist substitute.
const circular = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description:
    "Romantic Jacuzzi 1BHK in Candolim, Goa. Private jacuzzi, high-speed WiFi and Smart TV, minutes from Candolim Beach.",
  openGraph: {
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    description: "Entire serviced apartment in Candolim, Goa, India",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased ${circular.variable}`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
