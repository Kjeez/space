import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: "Webalchemy | Digital Growth Agency",
  description: "Web Design, AI Automations & Marketing strategies for scaling businesses.",
  icons: {
    icon: '/icon', // This links to the icon.tsx file you created
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // Added bg-[#020617] here to ensure the whole app has the dark theme background
        className={`${geistSans.variable} ${geistMono.variable} bg-[#020617] antialiased`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}