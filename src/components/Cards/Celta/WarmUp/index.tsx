import { ReactNode } from "react";
import styles from "./styles.module.css";

interface WarmUpProps {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export const WarmUp = ({ children, bgColor, textColor }: WarmUpProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]}>
        <div className="flex-8px-start-space-between">
          <p className="bold">Warm-up</p>
          <p className="p-size-smaller">'5</p>
        </div>
      </div>
      <div className={styles["children"]} style={{ marginBottom: ".2rem" }}>
        {children}
      </div>
    </div>
  );
};
