import { ReactNode } from "react";
import styles from "../../../../Cards/BoardCard/styles.module.css";
import { ICQ, ICQData } from "../ICQ";

export interface HCOPData {
  text: string;
}

interface HCOPProps {
  hcops: HCOPData[];
  icqHCOP: ICQData[]
}

export const HCOP = ({ hcops, icqHCOP }: HCOPProps) => {
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
      <div className={`line-break ${styles["children"]}`}>
        <ICQ icqs={icqHCOP}/>
        {hcops.map((hcop, hcopIndex) => (
          <p key={hcopIndex} className={styles["children"]}>
            {hcop.text}
          </p>
        ))}
      </div>
    </div>
  );
};
