import styles from "../../../../Cards/BoardCard/styles.module.css";
import { MeaningCCQ, MeaningCCQData } from "../MeaningCCQ";

export interface MeaningData {
  text: string;
}

interface MeaningProps {
  meanings: MeaningData[];
  meaningCCQS: MeaningCCQData[];
}

export const Meaning = ({ meanings, meaningCCQS }: MeaningProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Meaning</span>
        </p>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        {meanings.map((meaning, meaningIndex) => (
          <p key={meaningIndex}>{meaning.text}</p>
        ))}
        <MeaningCCQ meaningCCQS={meaningCCQS}/>
      </div>
    </div>
  );
};
