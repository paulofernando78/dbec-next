import { Fragment, ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";
import { Card } from "@/components/Cards/Card";

interface InstructionData {
  prompt: string;
}

export interface ProductionData {
  prompt?: string;
  instructions?: InstructionData[];
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
      <div className={`line-break ${styles["children"]}`}>
        {productions.map((production, productionIndex) => (
          <div key={productionIndex}>
            {/* prompt */}
            <p>{production.prompt}</p>
            {/* instructions -> prompt */}
            {production.instructions && (
              <Card bgColor="lightgreen">
                {production.instructions.map(
                  (instruction, instructionIndex) => (
                    <p key={instructionIndex}>{instruction.prompt}</p>
                  )
                )}
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
