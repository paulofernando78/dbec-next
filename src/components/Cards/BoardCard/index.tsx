import { ReactNode } from "react";
import styles from "./styles.module.css";

interface CardProps {
  label: string;
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const BoardCard = ({
  label,
  children,
  bgColor,
  textColor,
}: CardProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: bgColor, color: textColor, marginBottom: ".7rem" }}
      >
        <p className="bold">{label}</p>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem"}}>{children}</div>
    </div>
  );
};
