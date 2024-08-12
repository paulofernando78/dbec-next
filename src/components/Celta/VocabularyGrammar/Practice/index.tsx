import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface PracticeProps {
  children: ReactNode;
}

export const Practice = ({ children }: PracticeProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Practice</span>
          </p>
          <p className="p-size-smaller">15'</p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
