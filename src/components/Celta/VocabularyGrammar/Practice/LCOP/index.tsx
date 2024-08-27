import styles from "../../../../Cards/BoardCard/styles.module.css"
import { ICQ, ICQData } from "../ICQ";

export interface LCOPData {
  prompt: string
}

interface LCOPProps {
lcops: LCOPData[]
icqLCOP: ICQData[]
}

export const LCOP = ({ lcops, icqLCOP }: LCOPProps) => {
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
      <div className={`line-break ${styles["children"]}`}>
        <ICQ icqs={icqLCOP}/>
        {lcops.map((lcop, lcopIndex) => (
          <p key={lcopIndex} className={styles["children"]}>
            {lcop.prompt}
          </p>
        ))}
      </div>
    </div>
  );
};
