import styles from "../../../../Cards/BoardCard/styles.module.css";
import { ICQ, IICQ } from "../ICQ";

export interface IHCWP {
  prompt: string;
}

interface HCWP {
  hcwps: IHCWP[];
  icqHCWP: IICQ[];
}

export const HCWP = ({ hcwps, icqHCWP }: HCWP) => {
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
