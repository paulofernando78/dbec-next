"use client"
import Image from "next/image";

// Images
import PlayButton from "../../../public/assets/img/icon/play-button.png";
import Eye from "../../../public/assets/img/icon/eye.png";

// CSS
import styles from "./DictionaryCard.module.css"

// Typescript
interface DictionaryCardProps {
  audioSrc: string;
  label: string;
  phonetics: string
}

export const DictionaryCard = ({ audioSrc, label, phonetics }: DictionaryCardProps) => {
  const playAudio = () => {
    let audio = new Audio(audioSrc);
    audio.play();
  };
  
  return (
    <>
      <span className={styles["dictionary-card"]}>
        <Image
          src={PlayButton}
          alt="Play icon"
          onClick={playAudio}
          className={styles["play-button"]}
        />
        <span className={styles["label"]} dangerouslySetInnerHTML={{ __html: label }}></span>
        {phonetics && <span className={`${"phonetics"} ${styles["phonetics-margin"]}`}>{phonetics}</span>}
        <Image
          src={Eye}
          alt="Eye icon"
          className={styles["eye"]}
        />
      </span>
    </>
  );
};
