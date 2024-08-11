import { ReactNode } from "react";
import styles from "../../../../BoardCard/styles.module.css";

interface PronunciationProps {
  children: ReactNode;
}

export const Pronunciation = ({ children }: PronunciationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
        <p className="bold">Pronunciation</p>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
