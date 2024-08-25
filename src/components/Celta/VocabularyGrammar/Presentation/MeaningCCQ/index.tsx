import styles from "../../../../Cards/Card/styles.module.css";

export interface MeaningCCQData {
  text: string
}

interface MeaningCCQProps {
meaningCCQS: MeaningCCQData[]
}

export const MeaningCCQ = ({ meaningCCQS }: MeaningCCQProps) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFFACD" }}>
      <p className="bold">Checking</p>
      <div className={styles["children"]}>
        {meaningCCQS.map((meaningCCQ, meaningCCQIndex) => (
          <p key={meaningCCQIndex}>{meaningCCQ.text}</p>
        ))}
      </div>
    </div>
  );
};
