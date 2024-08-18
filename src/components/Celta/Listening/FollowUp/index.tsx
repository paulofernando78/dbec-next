import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface FollowUpProps {
  children: ReactNode;
}

export const FollowUp = ({ children }: FollowUpProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Follow-up</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
