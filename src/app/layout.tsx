import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Daryl Yeap | Health, Self Development & Content Creation",
  description: "Join health & wellness individuals and sign up for Daryl’s Deep Dive, my bi-weekly newsletter providing actionable ideas to enhance your life.",
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
        <meta name="username" content="user_34MCIcVy0EgobygweV7nmz4S8bj" />
        <meta name="offer" content="Newsletter" />
        <script src="https://d15dfsr886zcp9.cloudfront.net/tracker_script.js" defer></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
