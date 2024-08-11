import { ReactNode } from "react";
import styles from "../../../../BoardCard/styles.module.css";

interface MeaningProps {
  children: ReactNode;
}

export const Meaning = ({ children }: MeaningProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
        <p className="bold">Meaning</p>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
