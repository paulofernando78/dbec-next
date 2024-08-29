import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface IPronunciation {
prompt: string
}

interface Pronunciation {
pronunciations: IPronunciation[]
}

export const  Pronunciation = ({ pronunciations }: Pronunciation) => {
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
          <p key={pronunciationIndex}>{pronunciation.prompt}</p>
        ))}
      </div>
    </div>
  );
};
