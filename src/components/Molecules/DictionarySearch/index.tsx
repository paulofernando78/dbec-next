"use client";

import { useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { WordCard } from "@/components/Molecules/Cards/WordCard";
import Image from "next/image";
import { dictionaryOpenIcon } from "@/img/index";
import styles from "./style.module.css";
import { IDictionary } from "@/components/Molecules/Cards/WordCard/types";
import { searchWords } from "@/utils/searchWords";

export const DictionarySearch = () => {
  const [text, setText] = useState("");
  const [dicts, setDicts] = useState<IDictionary[]>([]);

  async function handleShowWordCard() {
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
      handleShowWordCard();
    }
  }

  const handleRemoveWordCard = (keyword: string) => {
    setDicts((prev) => prev.filter((dict) => dict.keyword !== keyword));
  };

  return (
    <>
      <div className={styles["dictionary-search-container"]}>
        <div className={styles["image-input-button-flex"]}>
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
          <Button label="&#128269;" onClick={handleShowWordCard} />
        </div>
      </div>
      {dicts.length != 0 && (
        <div className={styles["wordcard"]}>
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
      )}
    </>
  );
};
