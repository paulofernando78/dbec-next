import styles from "./styles.module.css";
import { VideoPlayerProps } from "./VideoPlayer.types";

export const VideoPlayer = ({ videoSrc }: VideoPlayerProps) => {
  return (
    <>
      <iframe
        src={videoSrc}
        allowFullScreen
        className={styles["video-customization"]}
      />
    </>
  );
};
