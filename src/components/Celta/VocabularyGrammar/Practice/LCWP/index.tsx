import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

interface LCWPProps {
  children: ReactNode;
}

export const LCWP = ({ children }: LCWPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Low Control Written Practice</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
