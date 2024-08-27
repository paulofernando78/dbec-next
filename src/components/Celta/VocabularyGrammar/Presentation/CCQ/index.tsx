import styles from "../../../../Cards/Card/styles.module.css";

export interface CCQData {
  checking: string
}

interface CCQProps {
ccqs: CCQData[]
}

export const CCQ = ({ ccqs }: CCQProps) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFFACD" }}>
      <p className="bold">Checking</p>
      <div className={styles["children"]}>
        {ccqs.map((ccq, ccqIndex) => (
          <p key={ccqIndex}>{ccq.checking}</p>
        ))}
      </div>
    </div>
  );
};
