import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";

interface PronunciationProps {
  children: ReactNode;
}

export const Pronunciation = ({ children }: PronunciationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Pronunciation</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
