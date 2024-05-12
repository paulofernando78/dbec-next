import style from "./AudioPlayer.module.css"

export const AudioPlayer = ({ audioSrc }) => {
  return (
      <audio controls
      src={audioSrc}
      className={style["audio"]}
      />
  );
};
