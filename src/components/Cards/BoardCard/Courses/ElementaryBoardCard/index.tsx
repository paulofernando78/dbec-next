import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ElementaryBoardCardProps {
  label: string;
  children: ReactNode;
}

export const ElementaryBoardCard = ({
  label,

  children,
}: ElementaryBoardCardProps) => {
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
