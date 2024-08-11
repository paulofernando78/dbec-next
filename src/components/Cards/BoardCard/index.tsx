import { ReactNode } from "react";
import styles from "./styles.module.css";

interface BoardCardProps {
  label: string;
  smallerLabel?: string;
  time?: string
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const BoardCard = ({
  label,
  smallerLabel,
  time,
  children,
  bgColor,
  textColor,
}: BoardCardProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: bgColor, color: textColor, marginBottom: ".7rem" }}
      >
        <div className="flex-8px-start-space-between">
          <p><span className="bold">{label}</span> <span className="p-size-smaller">{smallerLabel}</span></p>
          <p className="p-size-smaller">{time}</p>
        </div>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem"}}>{children}</div>
    </div>
  );
};
