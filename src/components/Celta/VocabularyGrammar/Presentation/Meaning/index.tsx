import styles from "../../../../Cards/BoardCard/styles.module.css";
import { AudioPlayer } from "@/components/Audioplayer";
import { CCQ, CCQData } from "../CCQ";

export interface MeaningData {
  text: string;
}

interface MeaningProps {
  meanings: MeaningData[];
  ccqs: CCQData[];
  audioSrc: string;
}

export const Meaning = ({ meanings, ccqs, audioSrc }: MeaningProps) => {
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
        <AudioPlayer audioSrc={audioSrc} />
        <CCQ ccqs={ccqs} />
      </div>
    </div>
  );
};
