import { ReactNode } from "react";
import styles from "./styles.module.css";

interface PracticeProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const Practice = ({ children, bgColor, textColor }: PracticeProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
      <div className="flex-8px-start-space-between">
        <p className="bold">Practice</p>
        <p className="p-size-smaller">'20</p>
      </div>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
