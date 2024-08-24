import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";

export interface ProductionData {
  text: string;
}

interface ProductionProps {
  productions: ProductionData[];
}

export const Production = ({ productions }: ProductionProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Production</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      {productions.map((production, productionIndex) => (
        <p key={productionIndex} className={styles["children"]}>
          {production.text}
        </p>
      ))}
    </div>
  );
};
