import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

export interface LCOPData {
  text: string
}

interface LCOPProps {
lcops: LCOPData[]
}

export const LCOP = ({ lcops }: LCOPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Low Control Oral Practice</span>
        </p>
      </div>
      {lcops.map((lcop, lcopIndex) => (
        <p key={lcopIndex} className={styles["children"]}>
          {lcop.text}
        </p>
      ))}
    </div>
  );
};
