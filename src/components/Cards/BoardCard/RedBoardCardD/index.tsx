import { ReactNode } from "react";
import styles from "../styles.module.css";

interface RedBoardCardAProps {

  children: ReactNode;
}

export const RedBoardCardD = ({
  children,
 
}: RedBoardCardAProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={`${styles["card"]} ${styles["red"]}`}
      >
        <p>
          <span className="bold">D</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
