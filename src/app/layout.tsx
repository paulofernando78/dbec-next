import type { Metadata } from "next";
import "./global.css";
import { Montserrat } from "next/font/google";
import { ThemeWrapper } from "./ThemeWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html
      lang="en"
      className={`${montserrat.className} font-sans`}
      suppressHydrationWarning
    >
      <body>
        <ThemeWrapper>
          <main>{children}</main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
