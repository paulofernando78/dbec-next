import styles from "../../../../Cards/BoardCard/styles.module.css";

import { AudioPlayer } from "@/components/Audioplayer";
import { CCQ } from "../CCQ";

interface CCQ {
  checking: string;
}

interface Conversation {
  statement: string;
}

export interface MeaningContent {
  prompt?: string;
  audioSrc?: string;
  conversations?: Conversation[];
  ccqs?: CCQ[];
}

interface MeaningProps {
  content: MeaningContent;
}

export const Meaning = ({ content: meaning }: MeaningProps) => {
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
        <>
          <p>{meaning.prompt}</p>
          {meaning.audioSrc && <AudioPlayer audioSrc={meaning.audioSrc} />}
          <div>
            {meaning.conversations?.map((conversation, conversationIndex) => (
              <p key={conversationIndex}>{conversation.statement}</p>
            ))}
          </div>
          {meaning.ccqs && <CCQ ccqs={meaning.ccqs} />}
        </>
      </div>
    </div>
  );
};
