import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import {Toaster} from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import "./globals.css";

const font = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Nunito({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${font.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <ExitModal />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
