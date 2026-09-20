import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Slate",
  description:
    "Slate is an app that curates what to do with the time you already have: solo, or with the person you've already chosen. Coming soon for iOS and Android.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
