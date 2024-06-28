import styles from "./styles.module.css"

export const AudioPlayer = ({ audioSrc }) => {
  return (
      <>
        <audio controls
        src={audioSrc}
        type="audio/mpeg"
        className={styles["audio"]}
        />
      </>
  );
};
