import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Trael - Order Your Favorites, Faster & For Less | Ghana's #1 Food Delivery",
  description: "Discover nearby restaurants, claim deals, and track couriers in real time. Order food delivery in Accra and Kumasi with Trael - Ghana's fastest growing food delivery app.",
  keywords: ["food delivery", "Ghana", "Accra", "Kumasi", "restaurant", "order food", "delivery app"],
  icons: {
    icon: [
      { url: '/favicon_io-4/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io-4/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon_io-4/apple-touch-icon.png',
  },
  manifest: '/favicon_io-4/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
