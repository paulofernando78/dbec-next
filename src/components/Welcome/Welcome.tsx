import React from "react";
import { AudioPlayer } from "../Audioplayer";

export const Welcome = () => {
  return (
    <div className="line-break">
      <AudioPlayer audioSrc="/assets/audio/welcome.mp3" />
      <p>
        Hi! Welcome to your student&apos;s website. Here, you&apos;ll find a lot
        of interesting materials. Please, use it wisely.
      </p>
    </div>
  );
};
