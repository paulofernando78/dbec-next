import { ReactNode } from "react";
import styles from "../../../BoardCard/styles.module.css";

interface PresentationProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const Presentation = ({ children, bgColor, textColor }: PresentationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
      <div className="flex-8px-start-space-between">
        <p className="bold">Presentation</p>
        <p className="p-size-smaller">'20</p>
      </div>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
