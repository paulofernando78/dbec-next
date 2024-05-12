"use client"
import Image from "next/image";

// Images
import PlayButton from "../../../public/assets/img/icon/play-button.png";
import Eye from "../../../public/assets/img/icon/eye.png";

// CSS
import style from "./DictionaryCard.module.css"

// Typescript
interface DictionaryCardProps {
  audioSrc: string;
  label: string;
}

export const DictionaryCard = ({ audioSrc, label }: DictionaryCardProps) => {
  const playAudio = () => {
    let audio = new Audio(audioSrc);
    audio.play();
  };
  
  return (
    <>
      <span className={style["dictionary-card"]}>
        <Image
          src={PlayButton}
          alt="Play icon"
          onClick={playAudio}
          className={style["play-button"]}
        />
        <span className={style["label"]}>{label}</span>
        <Image
          src={Eye}
          alt="Eye icon"
          className={style["eye"]}
        />
      </span>
    </>
  );
};
