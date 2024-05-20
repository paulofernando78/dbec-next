"use client";
import { useState } from "react";
import Image from "next/image";

// Components
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Button } from "@/components/Button/Button";
import { WordCard } from "@/components/WordCard/WordCard";

// Utils
import { searchWords } from "@/utils/searchWords";

// Interface
import { IDictionary } from "../../../interfaces";

// CSS
import styles from "./dictionary.module.css";

// Images
import globe from "@/img/icon/globe.png"

export default function Dictionary() {
  const [text, setText] = useState("");
  const [dicts, setDicts] = useState<IDictionary[]>([]);

  async function handleClick() {
    if (text) {
      // Realiza o filtro das palavras do dicionário
      const wordsFound = await searchWords(text);
      // Valida se contêm items na lista antes de atualiza-la
      if (wordsFound?.length) {
        // Se houver itens, atualiza a lista.
        setDicts(wordsFound);
      }
    }
  }

  function detectEnterClick(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  return (
    <>
      <Whiteboard
        title="Dictionary"
        descriptions={["verb", "phrasal verb", "noun", "adjective", "idiom"]}
      />
      <div className="line-break">
        <div>
          <div className="flex-8-center">
            <Image src={globe} alt="Globe icon" className="icon-general"/>
            <a href="https://youglish.com/" target="_self"><p> Youglish (Youtube videos)</p></a>
          </div>
          <div className="flex-8-center">
            <Image src={globe} alt="Globe icon" className="icon-general"/>
            <a href="https://www.playphrase.me/" target="_self"><p>Play Phrase (Movie videos)</p></a>
          </div>
        </div>
        <div className={styles["input-button"]}>
          <input
            type="text"
            placeholder="Enter a word"
            className={styles["input-style"]}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={detectEnterClick}
          />
          <Button label="search" onClick={handleClick} />
        </div>
        <div className={styles["flex"]}>
          {dicts.map((dict, index) => {
            return <WordCard key={index} dictionary={dict} />;
          })}
        </div>
      </div>
    </>
  );
}
