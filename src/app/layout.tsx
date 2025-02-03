import type { Metadata } from "next";
import "./styles.css";
import { montserrat } from "../../public/fonts/index";

export const metadata: Metadata = {
  title: "Daily Basis English Course",
  description: "Private English Classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} font-sans`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
