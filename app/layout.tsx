import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gombe State RUWASA",
  description: "Rural Water Supply and Sanitation Agency homepage",
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
