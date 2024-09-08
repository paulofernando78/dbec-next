import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface BoardCardProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  width?: string;
}

export const WarmUp = ({
  children,
  width,
}: BoardCardProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white", width: width }}
      >
        <div className="flex-8px-space-between">
          <p>
            <span className="bold">Warm-up</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>{children}</div>
    </div>
  );
};
