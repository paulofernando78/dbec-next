"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import { WordCard } from "../Templates/WordCard";

// CSS
import styles from "./styles.module.css";

// Images
import PlayButton from "../../../public/assets/img/icon/play-button.png";
import Eye from "../../../public/assets/img/icon/eye.png";

// Types
import { DictionaryCardProps } from "./types";
import { IDictionary } from "../Templates/WordCard/types";

// Utils
import { searchWords } from "@/utils/searchWords";

const baseAudioSrc = "/assets/audio";

export const DictionaryCard = ({
  audioSrc,
  keyword,
  label,
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
      searchWords(keyword ?? "").then((dict) => {
        if (dict?.length) {
          setDictionary(dict[0]);
        }
      });
    }
  }, [dictionary, keyword, label]);

  return (
    <>
      <span className={styles["dictionary-card"]}>
        <Image
          src={PlayButton}
          alt="Play icon"
          onClick={playAudio}
          className={styles["play-button"]}
        />
        {label && (
          <span
            className={styles["label"]}
            dangerouslySetInnerHTML={{ __html: label }}
          ></span>
        )}
        {phonetics && (
          <span className={`phonetics ${styles["phonetics-margin"]}`}>
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
