import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";

interface MeaningProps {
  children: ReactNode;
}

export const Meaning = ({ children }: MeaningProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Meaning</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
