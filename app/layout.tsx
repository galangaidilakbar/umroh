import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel",
  description: "Find your next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
