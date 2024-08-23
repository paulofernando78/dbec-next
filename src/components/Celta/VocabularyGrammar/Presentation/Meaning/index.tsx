import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface MeaningData {
  text: string
} 

interface MeaningProps {
  meanings: MeaningData[]
}

export const Meaning = ({ meanings }: MeaningProps) => {
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
      <div className={styles["children"]}>
        {meanings.map((meaning, meaningIndex) => (
          <p key={meaningIndex}>{meaning.text}</p>
        ))}
      </div>
    </div>
  );
};
