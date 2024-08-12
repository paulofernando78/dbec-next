import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";

interface FormUseProps {
  children: ReactNode;
}

export const FormUse = ({ children }: FormUseProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Form/Use</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
