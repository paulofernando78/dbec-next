import styles from "../../../../Cards/BoardCard/styles.module.css";
import { CCQ, CCQData } from "../CCQ";

export interface MeaningData {
  text: string
} 

interface MeaningProps {
  meanings: MeaningData[]
  ccqs: CCQData[]
}

export const Meaning = ({ meanings, ccqs }: MeaningProps) => {
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
        <CCQ ccqs={ccqs}/>
      </div>
    </div>
  );
};
