import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

interface ListeningForGistProps {
  children: ReactNode;
}

export const ListeningForGist = ({ children }: ListeningForGistProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Listening for gist</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};
