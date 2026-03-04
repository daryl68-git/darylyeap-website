import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Daryl Yeap | Health, Self Development & Content Creation",
  description: "Join health & wellness individuals and sign up for Daryl\u2019s Deep Dive, my bi-weekly newsletter providing actionable ideas to enhance your life.",
  other: {
    username: "user_34MCIcVy0EgobygweV7nmz4S8bj",
    offer: "Newsletter",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://d15dfsr886zcp9.cloudfront.net/tracker_script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
