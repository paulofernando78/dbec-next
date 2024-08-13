import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface ListeningForScanProps {
  children: ReactNode;
}

export const ListeningForScan = ({ children }: ListeningForScanProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Listening for scan</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
