import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS
import "../assets/css/globals.css";
import layout from "../assets/css/layout.module.css";
import headerNavBar from "../assets/css/headerNavBar.module.css";

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
