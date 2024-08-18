import { ReactNode } from "react";
import styles from "../../Cards/BoardCard/styles.module.css";

export const WrapUp = () => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Wrap-up</span>{" "}
            <span className="p-size-smaller">(Cooling down)</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={styles["children"]}>
        <p>Finished earlier?</p>
        <p>Then, check the "Extras" on the content.</p>
      </div>
    </div>
  );
};
