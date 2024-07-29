import { ReactNode } from "react";
import styles from "./styles.module.css";

interface CardProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const Card = ({ children, bgColor, textColor }: CardProps) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="p-font">{children}</span>
    </div>
  );
};
