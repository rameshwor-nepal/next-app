import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import TransitionProvider from "../components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "Rameshwor Nepal",
  description: "it's me rameshwor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>)  {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
