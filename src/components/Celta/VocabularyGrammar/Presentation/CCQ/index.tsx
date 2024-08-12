import { ReactNode } from "react";
import styles from "../../../../Cards/Card/styles.module.css";

interface CCQProps {
  children: ReactNode;
}

export const CCQ = ({ children }: CCQProps) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: "#FFFACD" }}
    >
      <span className="p-font">{children}</span>
    </div>
  );
};
