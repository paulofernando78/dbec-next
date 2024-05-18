"use client";
import { useState } from "react";

// Components
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Button } from "@/components/Button/Button";

// CSS
import styles from "./dictionary.module.css";
import { searchWords } from "@/utils/searchWords";
import { IDictionary } from "../../../interfaces";
import { WordCard } from "@/components/WordCard/WordCard";

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
          <a href="https://youglish.com/"><p>Youglish</p></a>
          <a href="https://www.playphrase.me/"><p>Play Phrase</p></a>
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
