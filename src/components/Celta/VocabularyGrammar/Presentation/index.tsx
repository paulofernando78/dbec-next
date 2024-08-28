import styles from "../../../Cards/BoardCard/styles.module.css";

import { ReactNode } from "react";

export interface PresentationData {
  text: string;
}

interface PresentationProps {
  children: ReactNode
}

export const Presentation = ({
  children
}:
PresentationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Presentation</span>
          </p>
          <p className="p-size-smaller">20'</p>
        </div>
      </div>

      {/* text */}
      <div className={`line-break ${styles["children"]}`}>
        <div className="line-break">
          {children}
        </div>
      </div>
    </div>
  );
};
