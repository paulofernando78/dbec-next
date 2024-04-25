import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import layout from "./layout.module.css";
import headerNavBar from "./headerNavBar.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Basis English Course",
  description: "Speak english like a native",
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
            <h1>Header</h1>
            <h1>Navbar</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
