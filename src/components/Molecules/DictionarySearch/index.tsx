"use client";

import { Fragment, useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { WordCard } from "@/components/Templates/WordCard";
import Image from "next/image";
import { dictionaryOpenIcon } from "@/img/index";
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

  const handleRemoveWordCard = (keyword: string) => {
    setDicts((prev) => prev.filter((dict) => dict.keyword !== keyword));
  };

  return (
    <div>
      <div className={`box-shadow ${styles["container"]}`}>
        <div className={styles["dic-input-flex"]}>
          <Image
            src={dictionaryOpenIcon}
            alt={"Dictionary A-Z icon"}
            width={38}
          />
          <input
            type="text"
            placeholder="Search dictionary"
            onChange={(e) => setText(e.target.value)}
            onKeyUp={detectEnterClick}
          />
          <Button label="&#128269;" onClick={handleClick} />
        </div>
      </div>
      <div className={styles["WordCard"]}>
        {dicts.map((dict, index) => {
          return (
            <WordCard
              key={index}
              dictionary={dict}
              onClose={handleRemoveWordCard}
            />
          );
        })}
      </div>
    </div>
  );
};
