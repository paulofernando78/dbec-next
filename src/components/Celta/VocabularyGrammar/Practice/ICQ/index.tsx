import styles from "../../../../Cards/Card/styles.module.css";

export interface ICQData {
  instruction: string;
}

interface ICQProps {
  icqs: ICQData[];
}

export const ICQ = ({ icqs }: ICQProps) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFBABA" }}>
      <p className="bold">Instructions</p>
      {icqs.map((icq, icqIndex) => (
        <p key={icqIndex}>• {icq.instruction}</p>
      ))}
    </div>
  );
};
