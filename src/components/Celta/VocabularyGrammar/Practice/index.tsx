import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";
import { HCWP, HCWPData } from "./HCWP";
import { LCWP, LCWPData } from "./LCWP";

export interface PracticeData {
  text: string;
}

interface PracticeProps {
  practices: PracticeData[];
  hcwps: HCWPData[];
  lcwps: LCWPData[];
}

export const Practice = ({ practices, hcwps, lcwps }: PracticeProps) => {
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
      <div className={`line-break ${styles["children"]}`}>
        {practices.map((practice, practiceIndex) => (
          <p key={practiceIndex}>{practice.text}</p>
        ))}
        <HCWP hcwps={hcwps} />
        <LCWP lcwps={lcwps} />
      </div>
    </div>
  );
};
