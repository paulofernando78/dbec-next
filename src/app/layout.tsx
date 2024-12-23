import type { Metadata } from "next";

// CSS
import "./styles.css";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>
          <span>{children}</span>
        </main>
      </body>
    </html>
  );
}
