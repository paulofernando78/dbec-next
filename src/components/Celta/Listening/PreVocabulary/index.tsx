import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface PreVocabularyProps {
  children: ReactNode;
}

export const PreVocabulary = ({ children }: PreVocabularyProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Pre-vocabulary</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
