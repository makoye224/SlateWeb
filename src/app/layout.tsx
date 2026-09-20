import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

const description =
  "Free time isn't the shortage. A plan for it is. Slate turns the free time you already have into a day-by-day plan, rest included, solo or with someone you've already chosen. Coming soon for iOS and Android.";

export const metadata: Metadata = {
  title: "Slate",
  description,
  openGraph: {
    title: "Slate: a plan for the time you already have",
    description,
    siteName: "Slate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slate: a plan for the time you already have",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
