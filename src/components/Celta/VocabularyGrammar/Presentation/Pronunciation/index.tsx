import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface PronunciationData {
text: string
}

interface PronunciationProps {
pronunciations: PronunciationData[]
}

export const Pronunciation = ({ pronunciations }: PronunciationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Pronunciation</span>
        </p>
      </div>
      <div className={styles["children"]}>
        {pronunciations.map((pronunciation, pronunciationIndex) => (
          <p key={pronunciationIndex}>{pronunciation.text}</p>
        ))}
      </div>
    </div>
  );
};
