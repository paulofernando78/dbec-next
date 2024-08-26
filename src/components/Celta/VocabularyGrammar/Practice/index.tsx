import { HCWP, HCWPData } from "./HCWP";
import { LCWP, LCWPData } from "./LCWP";
import { HCOP, HCOPData } from "./HCOP";
import { LCOP, LCOPData } from "./LCOP";
import { ICQData } from "./ICQ";

import styles from "../../../Cards/BoardCard/styles.module.css";

export interface PracticeData {
  text: string;
}

interface PracticeProps {
  practices: PracticeData[];
  hcwps: HCWPData[];
  icqHCWP: ICQData[];
  lcwps: LCWPData[];
  hcops: HCOPData[];
  lcops: LCOPData[];
}

export const Practice = ({
  practices,
  hcwps,
  icqHCWP,
  lcwps,
  hcops,
  lcops,
}: PracticeProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Practice</span>
          </p>
          <p className="p-size-smaller">15'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        {practices.map((practice, practiceIndex) => (
          <p key={practiceIndex}>{practice.text}</p>
        ))}
        <HCWP hcwps={hcwps} icqHCWP={icqHCWP} />
        <LCWP lcwps={lcwps} />
        <HCOP hcops={hcops} />
        <LCOP lcops={lcops} />
      </div>
    </div>
  );
};
