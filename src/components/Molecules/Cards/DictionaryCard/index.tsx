"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import { WordCard } from "@/components/index";

// CSS
import styles from "./styles.module.css";

// Images
// import PlayButton from "../../../public/assets/img/icon/play-button.png";
import { eyeIcon } from "@/img/index";

// Types
import { DictionaryCardProps } from "./types";
import { IDictionary } from "@/components/Molecules/Cards/WordCard/WordCard.types";

// Utils
import { searchWords } from "@/utils/searchWords";

export const DictionaryCard = ({
  audioSrc,
  keyword,
  word,
}: DictionaryCardProps) => {
  const [visible, setVisible] = useState(false);
  const [dictionary, setDictionary] = useState<IDictionary | null>(null);
  const baseAudioSrc = "/assets/audio";
  audioSrc = baseAudioSrc + audioSrc;

  // const playAudio = () => {
  //   let audio = new Audio(audioSrc);
  //   audio.play();
  // };

  useEffect(() => {
    if (!dictionary) {
      searchWords(keyword ?? "").then((dict) => {
        if (dict?.length) {
          setDictionary(dict[0]);
        }
      });
    }
  }, [dictionary, keyword, word]);

  return (
    <>
      <span className={styles["dictionary-card"]}>
        {/* <Image
          src={PlayButton}
          alt="Play icon"
          onClick={playAudio}
          className={styles["play-button"]}
        /> */}
        <Image
          src={eyeIcon}
          alt="Eye icon"
          className={styles["eye"]}
          onClick={() => setVisible(!visible)}
        />
        {word && (
          <span
            className={styles["label"]}
            dangerouslySetInnerHTML={{ __html: word }}
          ></span>
        )}
      </span>

      {visible && dictionary && (
        <div className={styles["word-card"]}>
          <WordCard dictionary={dictionary} onClose={() => setVisible(false)} />
        </div>
      )}
    </>
  );
};
