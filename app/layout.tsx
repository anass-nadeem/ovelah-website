import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ovelah | Software for Business Operations",
  description:
    "Ovelah builds practical software for businesses managing jobs, quotations, invoices and operations.",
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