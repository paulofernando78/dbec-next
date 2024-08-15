import { ReactNode } from "react";
import styles from "../styles.module.css";

interface RedBoardCardAProps {

  children: ReactNode;
}

export const RedBoardCardB = ({
  children,
 
}: RedBoardCardAProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={`${styles["card"]} ${styles["red"]}`}
      >
        <p>
          <span className="bold">B</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
