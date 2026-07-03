import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReserveButton from "@/components/ReserveButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "酔っ手羽 Yotteba Izakaya Revolution | Menu",
  description: "酔っ手羽 Yotteba Izakaya Revolution の公式メニューサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-foreground">
        <div className="flex flex-1 flex-col">{children}</div>
        <ReserveButton />
      </body>
    </html>
  );
}
