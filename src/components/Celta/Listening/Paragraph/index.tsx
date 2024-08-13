import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface ParagraphProps {
  number: string
  children: ReactNode;
}

export const Paragraph = ({ number, children }: ParagraphProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "lightgray", color: "black"}}>
          <p>
            <span className="bold">Paragraph #{number}</span>
          </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
