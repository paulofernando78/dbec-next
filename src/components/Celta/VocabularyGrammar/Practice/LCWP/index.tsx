import styles from "../../../../Cards/BoardCard/styles.module.css"
import { ICQ, ICQData } from "../ICQ";

export interface LCWPData {
  text: string
}

interface LCWPProps {
lcwps: LCWPData[]
icqLCWP: ICQData[]
}

export const LCWP = ({ lcwps, icqLCWP }: LCWPProps) => {
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
      <div className={` line-break ${styles["children"]}`}>
        <ICQ icqs={icqLCWP} />
        {lcwps.map((lcwp, lcwpIndex) => (
          <p key={lcwpIndex} >
            {lcwp.text}
          </p>
        ))}
      </div>
    </div>
  );
};
