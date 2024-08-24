import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface HCOPData {
  text: string;
}

interface HCOPProps {
  hcops: HCOPData[];
}

export const HCOP = ({ hcops }: HCOPProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">High Control Oral Practice</span>
        </p>
      </div>
      {hcops.map((hcop, hcopIndex) => (
        <p key={hcopIndex} className={styles["children"]}>
          {hcop.text}
        </p>
      ))}
    </div>
  );
};
