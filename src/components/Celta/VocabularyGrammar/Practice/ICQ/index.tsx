import { ReactNode } from "react";
import styles from "../../../../Cards/Card/styles.module.css";

interface ICQProps {
  children: ReactNode;
}

export const ICQ = ({ children }: ICQProps) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: "#FFBABA" }}
    >
      <span className="p-font">{children}</span>
    </div>
  );
};
