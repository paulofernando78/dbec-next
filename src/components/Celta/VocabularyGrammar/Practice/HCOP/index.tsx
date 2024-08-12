import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

interface HCOPProps {
  children: ReactNode;
}

export const HCOP = ({ children }: HCOPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">High Control Oral Practice</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
