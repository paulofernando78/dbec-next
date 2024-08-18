import { ReactNode } from "react";
import styles from "./styles.module.css";

interface BeginnerBoardCardProps {
  label: string;
  children: ReactNode;
}

export const BeginnerBoardCard = ({
  label,

  children,
}: BeginnerBoardCardProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
      >
        <div className="flex-8px-start-space-between">
          <p><span className="bold">{label}</span></p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
