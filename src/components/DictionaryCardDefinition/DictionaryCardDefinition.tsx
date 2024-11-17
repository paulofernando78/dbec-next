import { AudioPlayer } from "../Audioplayer";
import { Card } from "../Cards/Card";

import styles from "./styles.module.css";

interface DictionaryCardDefinitionProps {
  audioSrc: string;
  label: string;
  phonetics: string;
}

export const DictionaryCardDefinition = ({
  audioSrc,
  label,
  phonetics,
}: DictionaryCardDefinitionProps) => {
  return (
    <>
      <div className={styles["card-margin"]}>
        <Card bgColor="#FFF8B8">
          <div className={styles["audio-player-margin-top"]}>
            <AudioPlayer audioSrc={audioSrc} />
          </div>
          <div className={styles["flex"]}>
            <p>{label}</p>
            <p className="phonetics">{phonetics}</p>
          </div>
        </Card>
      </div>
    </>
  );
};
