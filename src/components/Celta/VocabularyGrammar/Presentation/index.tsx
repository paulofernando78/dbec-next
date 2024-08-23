import { ReactNode } from "react";
import styles from "../../../Cards/BoardCard/styles.module.css";
import { Meaning } from "./Meaning";
import { Pronunciation } from "./Pronunciation";
import { FormUse } from "./FormUse";

export interface PresentationData {
  text: string;
}

interface PresentationProps {
  presentations: PresentationData[];
}

export const Presentation = ({ presentations }: PresentationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Presentation</span>
          </p>
          <p className="p-size-smaller">20'</p>
        </div>
      </div>

      {/* text */}
      <div className={styles["children"]}>
        {presentations.map((presentation, presentationIndex) => (
          <p key={presentationIndex}>{presentation.text}</p>
        ))}

      {/* Meaning */}
      <div className="line-break">
        <Meaning />
        <Pronunciation />
        <FormUse />
      </div>
      </div>
    </div>
  );
};
