import { ReactNode } from "react";
import styles from "../../BoardCard/styles.module.css";

interface IntroductionProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const Introduction = ({ children, bgColor, textColor }: IntroductionProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
      <div className="flex-8px-start-space-between">
        <p><span className="bold">Introduction</span> <span className="p-size-smaller">(Contextualize)</span></p>
        <p className="p-size-smaller">'10</p>
      </div>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
