import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chat & Share - Real-time Chat & Image Sharing",
  description:
    "A modern web application for real-time chat and secure image sharing. Features include instant messaging, room management, camera integration, and automatic image optimization.",
  keywords: [
    "chat",
    "image sharing",
    "real-time",
    "messaging",
    "file sharing",
    "web application",
  ],
  authors: [{ name: "Daim Zahoor", url: "https://github.com/devdaim6" }],
  creator: "Daim Zahoor",
  openGraph: {
    title: "Chat & Share - Real-time Chat & Image Sharing",
    description:
      "Connect and share instantly with Chat & Share - featuring real-time messaging and secure image sharing",
    type: "website",
    siteName: "Chat & Share",
    url: "https://chat.is-local.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
