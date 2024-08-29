import styles from "../../../Cards/BoardCard/styles.module.css";
import { ReactNode } from "react";

export interface IPractice {
  text: string;
}

interface Practice {
  children: ReactNode;
}

export const Practice = ({ children }: Practice) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Practice</span>
          </p>
          <p className="p-size-smaller">15'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>{children}</div>
    </div>
  );
};
