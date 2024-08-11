import { ReactNode } from "react";
import styles from "../../../../BoardCard/styles.module.css";

interface FormUseProps {
  children: ReactNode;
}

export const FormUse = ({ children }: FormUseProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
        <p className="bold">Form / Use</p>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
