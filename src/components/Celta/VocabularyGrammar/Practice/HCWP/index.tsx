import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

interface HCWPProps {
  children: ReactNode;
}

export const HCWP = ({ children }: HCWPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">High Control Written Practice</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};