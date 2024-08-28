import styles from "../../../../Cards/BoardCard/styles.module.css";

import { AudioPlayer } from "@/components/Audioplayer";
import { CCQ } from "../CCQ";

interface ICCQ {
  checking: string;
}

interface IConversation {
  statement: string;
}

export interface IMeaning {
  prompt?: string;
  audioSrc?: string;
  conversations?: IConversation[];
  ccqs?: ICCQ[];
}

interface IMeaningProps {
  meaning: IMeaning;
}

export const Meaning = ({ meaning }: IMeaningProps) => {
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
