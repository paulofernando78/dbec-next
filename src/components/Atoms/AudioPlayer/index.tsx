import styles from "./style.module.css";
import { AudioPlayerProps } from "./types";

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const baseAudioSrc = "/assets/audio";
  const fullAudioSrc = baseAudioSrc + audioSrc;
  return <audio controls src={fullAudioSrc} className={styles["audio"]} />;
};
