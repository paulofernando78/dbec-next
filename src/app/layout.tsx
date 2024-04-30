import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS
import "./globals.css";
import styles from "./layout.module.css";

// components
import { Header } from "@/components/Header/Header"
import { NavBar } from "@/components/NavBar/NavBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Basis English Course",
  description: "Speak up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <div className={styles.headerNav}>
            <Header />
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}