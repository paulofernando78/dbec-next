import styles from "../../../../Cards/Card/styles.module.css";

export interface IICQ {
  instruction: string;
}

interface ICQ {
  icqs: IICQ[];
}

export const ICQ = ({ icqs }: ICQ) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFBABA" }}>
      <p className="bold">Instructions</p>
      {icqs.map((icq, icqIndex) => (
        <p key={icqIndex}>• {icq.instruction}</p>
      ))}
    </div>
  );
};
