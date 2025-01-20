"use client";

import { useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { WordCard } from "@/components/Templates/WordCard";
import styles from "./style.module.css";
import { IDictionary } from "@/components/Templates/WordCard/types";
import { searchWords } from "@/utils/searchWords";

export const DictionarySearch = () => {
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
    <div className="position-sticky">
      <div className={`margin-bottom box-shadow ${styles["input-button"]}`}>
        <Button label="Search" onClick={handleClick} />
        <input
          type="text"
          placeholder="Enter a word"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={detectEnterClick}
        />
      </div>
      <div className="margin-bottom">
        {dicts.map((dict, index) => {
          return <WordCard key={index} dictionary={dict} />;
        })}
      </div>
    </div>
  );
};
