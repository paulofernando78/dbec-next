import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS
import styles from "./layout.module.css";

// Components
import NavigationWrapper from "../../components/Organisms/NavigationWrapper/NavigationWrapper";

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
    <div className={styles.layout}>
      <div className={styles.headerNav}>
        <NavigationWrapper />
      </div>
      <span className={styles.children}>{children}</span>
    </div>
  );
}
