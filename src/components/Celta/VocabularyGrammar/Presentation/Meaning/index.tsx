import styles from "../../../../Cards/BoardCard/styles.module.css";
import { AudioPlayer } from "@/components/Audioplayer";
import { CCQ, CCQData } from "../CCQ";

export interface ConversationData {
  statement: string
}

export interface MeaningData {
  prompt: string;
}

interface MeaningProps {
  meanings: MeaningData[];
  audioSrc: string;
  conversations: ConversationData[]
  ccqs: CCQData[];
}

export const Meaning = ({
  meanings,
  audioSrc,
  conversations,
  ccqs,
}: MeaningProps) => {
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
        {/* prompt */}
        {meanings.map((meaning, meaningIndex) => (
          <p key={meaningIndex}>{meaning.prompt}</p>
        ))}
        {/* audioplayer */}
        <AudioPlayer audioSrc={audioSrc} />
        {/* conversation */}
        <div>
          {conversations.map((conversation, conversationIndex) => (
            <p key={conversationIndex}>{conversation.statement}</p>
          ))}
        </div>
        <CCQ ccqs={ccqs} />
      </div>
    </div>
  );
};
