import { ReactNode } from "react";
import styles from "../styles.module.css";

interface RedBoardCardAProps {

  children: ReactNode;
}

export const BlueBoardCardA = ({
  children,
 
}: RedBoardCardAProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={`${styles["card"]} ${styles["blue"]}`}
      >
        <p>
          <span className="bold">A</span>
        </p>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
