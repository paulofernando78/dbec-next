"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Images
import PlayButton from "../../../public/assets/img/icon/play-button.png";
import Eye from "../../../public/assets/img/icon/eye.png";

// CSS
import styles from "./DictionaryCard.module.css";
import { IDictionary } from "../../../interfaces";
import { searchWords } from "@/utils/searchWords";
import { WordCard } from "../WordCard/WordCard";

// Typescript
interface DictionaryCardProps {
  audioSrc: string;
  keyword?: string;
  label: string;
  phonetics?: string;
}

const baseAudioSrc = "/assets/audio/dictionary";

export const DictionaryCard = ({
  audioSrc,
  label,
  keyword,
  phonetics,
}: DictionaryCardProps) => {
  const [visible, setVisible] = useState(false);
  const [dictionary, setDictionary] = useState<IDictionary | null>(null);

  const playAudio = () => {
    let audio = new Audio(audioSrc);
    audio.play();
  };
  audioSrc = baseAudioSrc + audioSrc;

  useEffect(() => {
    if (!dictionary) {
      searchWords(keyword ?? label).then((dict) => {
        if (dict?.length) {
          setDictionary(dict[0]);
        }
      });
    }
  });

  return (
    <>
      <span className={styles["dictionary-card"]}>
        <Image
          src={PlayButton}
          alt="Play icon"
          onClick={playAudio}
          className={styles["play-button"]}
        />
        <span
          className={styles["label"]}
          dangerouslySetInnerHTML={{ __html: label }}
        ></span>
        {phonetics && (
          <span className={`${"phonetics"} ${styles["phonetics-margin"]}`}>
            {phonetics}
          </span>
        )}
        <Image
          src={Eye}
          alt="Eye icon"
          className={styles["eye"]}
          onClick={() => setVisible(!visible)}
        />
      </span>

      {visible && dictionary && (
        <div className={styles["word-card"]}>
          <WordCard dictionary={dictionary} />
        </div>
      )}
    </>
  );
};
