import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ovelah.com"),
  title: {
    default: "Ovelah | Business Operations Software",
    template: "%s",
  },
  description: "Ovelah is business operations management software for service and maintenance companies. It connects clients, locations, jobs, quotations and invoices in one system.",
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