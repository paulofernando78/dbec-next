import styles from "../../Cards/BoardCard/styles.module.css";

export interface WarmUpData {
  question: string
}

interface WarmUpProps {
  warmUps: WarmUpData[]
}

export const WarmUp = ({ warmUps }: WarmUpProps) => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["card"]} style={{ backgroundColor: "black", color: "white"}}>
        <div className="flex-8px-start-space-between" >
          <p>
            <span className="bold">Warm-up</span>
          </p>
          <p className="p-size-smaller">5'</p>
        </div>
      </div>
      <div className={styles["children"]}>
        {warmUps.map((warmUp, warmUpIndex) => (
        <p key={warmUpIndex}>• {warmUp.question}</p>
        ))}
      </div>
    </div>
  );
};
