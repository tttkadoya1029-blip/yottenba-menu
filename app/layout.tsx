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
  title: "Yotteba Izakaya Makati | Menu",
  description: "Yotteba Izakaya Makati の公式メニューサイト。Food, Drink, Promo, Private Room, Parking, Birthday の情報はこちら。",
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
