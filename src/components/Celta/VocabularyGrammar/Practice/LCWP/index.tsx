import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css"

export interface LCWPData {
  text: string
}

interface LCWPProps {
lcwps: LCWPData[]
}

export const LCWP = ({ lcwps }: LCWPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Low Control Written Practice</span>
        </p>
      </div>
      {lcwps.map((lcwp, lcwpIndex) => (
        <p key={lcwpIndex} className={styles["children"]}>
          {lcwp.text}
        </p>
      ))}
    </div>
  );
};
