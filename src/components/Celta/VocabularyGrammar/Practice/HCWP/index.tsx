import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";
import { IndividualICQ } from "../IndividualICQ";

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
      <div className={` line-break ${styles["children"]}`}>
        <IndividualICQ />
        {hcwps.map((hcwp, hcwpIndex) => (
          <p key={hcwpIndex} >
            {hcwp.text}
          </p>
        ))}
      </div>
    </div>
  );
};
