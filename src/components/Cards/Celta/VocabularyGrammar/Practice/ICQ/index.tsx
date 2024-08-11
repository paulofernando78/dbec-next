import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ICQProps {
  children: ReactNode;
}

export const ICQ = ({ children }: ICQProps) => {
  return (
    <div className={styles["card"]}>
      <span className="p-font">{children}</span>
    </div>
  );
};
