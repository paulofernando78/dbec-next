import styles from "../../../../Cards/Card/styles.module.css";

export interface icqData {
  text: string;
}

interface ICQProps {
  icqs: icqData[];
}

export const ICQ = ({ icqs }: ICQProps) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFBABA" }}>
      <p className="bold">Instructions</p>
      <div className="p-font">
        {icqs.map((icq, icqIndex) => (
          <p key={icqIndex}> {icq.text}</p>
        ))}
      </div>
    </div>
  );
};
