import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ovelah.com"),
  title: {
    default: "Ovelah | Business Operations Software",
    template: "%s | Ovelah",
  },
  description: "Ovelah brings customers, locations, jobs, quotations, invoices and everyday operations into one connected system for service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}