import { ReactNode } from "react";
import styles from "./styles.module.css";

interface RibbonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
}

export const SmallerRibbon = ({ label, bgColor, textColor }: RibbonProps) => {
  return (
    <div
      className={styles["ribbon"]}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="p-size-smaller bold">{label}</span>
    </div>
  );
};
