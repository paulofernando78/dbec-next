import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import layout from "./layout.module.css";
import headerNavBar from "./headerNavBar.module.css";
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
        <div className={layout.layout}>
          <div className={headerNavBar.headerNav}>
            <Header />
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
