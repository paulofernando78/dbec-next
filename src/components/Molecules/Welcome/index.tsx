// Components
import { AudioPlayer } from "../../Atoms/AudioPlayer/AudioPlayer";

export const Welcome = () => {
  return (
    <div className="line-break">
      <AudioPlayer audioSrc="/welcome.mp3" />
      <p>
        Hi! Welcome to your student's website. Here, you'll find a lot of
        interesting materials. Please, use it wisely.
      </p>
    </div>
  );
};
