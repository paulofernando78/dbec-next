import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

interface LCOPProps {
  children: ReactNode;
}

export const LCOP = ({ children }: LCOPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Low Control Oral Practice</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
