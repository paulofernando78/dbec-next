import styles from "./style.module.css";
import { AudioPlayerProps } from "./types";



export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  return <audio controls src={audioSrc || ""} className={styles["audio"]} />;
};
