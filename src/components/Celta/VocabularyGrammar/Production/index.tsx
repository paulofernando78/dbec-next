import { Fragment, ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";
import { Card } from "@/components/Cards/Card";

export interface InstructionData {
  prompt: string;
}

export interface ProductionData {
  prompt?: string;
  instructions?: InstructionData[];
}

interface ProductionProps {
  productions: ProductionData[];
  instructions: InstructionData[];
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
      <div className={` ${styles["children"]}`}>
        {productions.map((production, productionIndex) => (
          <div key={productionIndex}>
            <p>{production.prompt}</p>
            {production.instructions && production.instructions.map((instruction, instructionIndex) => (
              <p key={instructionIndex}>{instruction.prompt}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
