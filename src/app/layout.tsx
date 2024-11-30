import type { Metadata } from "next";

// CSS
import "./styles.css";
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
          <span>{children}</span>
        </main>
      </body>
    </html>
  );
}
