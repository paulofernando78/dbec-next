import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

export const ListeningForGist = () => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Listening for gist</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <p className={styles["children"]}>What is the main issue discussed in the text?</p>
    </div>
  );
};
