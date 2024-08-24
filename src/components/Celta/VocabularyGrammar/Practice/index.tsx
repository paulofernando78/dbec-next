import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

export interface PracticeData {
  text: string;
}

interface PracticeProps {
  practices: PracticeData[];
}

export const Practice = ({ practices }: PracticeProps) => {
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
      <div className={styles["children"]}>
        {practices.map((practice, practiceIndex) => (
          <p key={practiceIndex}>{practice.text}</p>
        ))}
      </div>
    </div>
  );
};
