import styles from "../../../../Cards/BoardCard/styles.module.css";

import { AudioPlayer } from "@/components/Audioplayer";
import { CCQ } from "../CCQ";

interface CCQData {
  checking: string
}

interface ConversationData {
  statement: string;
}

export interface MeaningData {
  prompt?: string;
  audioSrc?: string;
  conversations?: ConversationData[];
  ccqs?: CCQData[];
}

interface MeaningProps {
  meanings: MeaningData[];
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
      <div className={`line-break ${styles["children"]}`}>
        {/* prompt */}
        {meanings.map((meaning, meaningIndex) => (
          <>
            <p key={meaningIndex}>{meaning.prompt}</p>
            {/* audioplayer */}
            {meaning.audioSrc && <AudioPlayer audioSrc={meaning.audioSrc} />}
            {/* conversation */}
           <div>
              {meaning.conversations?.map((conversation, conversationIndex) => (
                <p key={conversationIndex}>{conversation.statement}</p>
              ))}
           </div>
           {/* ccqs */}
           {meaning.ccqs && <CCQ ccqs={meaning.ccqs} />}
          </>
        ))}
      </div>
    </div>
  );
};
