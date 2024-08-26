import { MeaningCCQ, MeaningCCQData } from "../MeaningCCQ";
import { AudioPlayer } from "@/components/Audioplayer";

import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface MeaningData {
  text: string;
}

interface MeaningProps {
  meanings: MeaningData[];
  meaningCCQS: MeaningCCQData[];
  audioSrc: string
}

export const Meaning = ({ meanings, meaningCCQS, audioSrc }: MeaningProps) => {
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
        <AudioPlayer audioSrc={audioSrc}/>
        <MeaningCCQ meaningCCQS={meaningCCQS}/>
      </div>
    </div>
  );
};
