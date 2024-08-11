import { ReactNode } from "react";
import styles from "./styles.module.css";

interface CCQProps {
  children: ReactNode;
}

export const CCQ = ({ children }: CCQProps) => {
  return (
    <div className={styles["card"]}>
      <span className="p-font">{children}</span>
    </div>
  );
};
