import styles from "./style.module.css";

export const AudioPlayer = ({ audioSrc }) => {
  return (
      <audio
        controls
        src={audioSrc}
        type="audio/mpeg"
        className={styles["audio"]}
      />
  );
};
