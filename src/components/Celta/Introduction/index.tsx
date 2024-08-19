import { ReactNode } from "react";
import styles from "../../Cards/BoardCard/styles.module.css";

interface IntroductionProps {
  children: ReactNode;
}

export const Introduction = ({ children }: IntroductionProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Introduction</span> <span className="p-size-smaller">(Contextualization)</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <p className={styles["label"]}>Check out the media below and answer the questions.</p>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
