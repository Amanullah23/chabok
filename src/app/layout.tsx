import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chabok — Share fast. No cloud. No limits.",
  description: "Chabok is a free, open-source app to send files across devices on your local network. No internet required.",
  keywords: ["file transfer", "local network", "no cloud", "cross platform", "chabok"],
  openGraph: {
    title: "Chabok — Share fast. No cloud. No limits.",
    description: "Send files across devices instantly on your local network.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}