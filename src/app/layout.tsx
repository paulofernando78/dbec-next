import type { Metadata } from "next";

// CSS
import "./globals.css";
import styles from "./layout.module.css";

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
      <body>
        <main>
          <span className={styles.children}>{children}</span>
        </main>
      </body>
    </html>
  );
}
