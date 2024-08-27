import styles from "../../../../Cards/BoardCard/styles.module.css";
import { ICQ, ICQData } from "../ICQ";

export interface HCWPData {
  prompt: string;
}

interface HCWPProps {
  hcwps: HCWPData[];
  icqHCWP: ICQData[];
}

export const HCWP = ({ hcwps, icqHCWP }: HCWPProps) => {
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
        <ICQ icqs={icqHCWP} />
        {hcwps.map((hcwp, hcwpIndex) => (
          <p key={hcwpIndex}>{hcwp.prompt}</p>
        ))}
      </div>
    </div>
  );
};
