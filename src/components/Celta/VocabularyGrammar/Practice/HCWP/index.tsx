import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface HCWPData {
  text: string
}

interface HCWPProps {
  hcwps: HCWPData[]
}

export const HCWP = ({ hcwps }: HCWPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">High Control Written Practice</span>
        </p>
      </div>
      {hcwps.map((hcwp, hcwpIndex) => (
        <p key={hcwpIndex} className={styles["children"]}>
          {hcwp.text}
        </p>
      ))}
    </div>
  );
};
