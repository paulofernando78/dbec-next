"use client";

// Components
import { WordCard } from "@/components/Molecules/Cards/WordCard";
import { IDictionary } from "@/components/Molecules/Cards/WordCard/types";
import { Button } from "@/components/Atoms/Button/";

// Hooks
import { useState } from "react";

// Utils
import { searchWords } from "@/utils/searchWords";

// CSS
import styles from "./DictionarySearch.module.css";
import { DictionarySearchButton } from "@components/index";

export const DictionarySearch = () => {
  const [text, setText] = useState(""); // Entrada do usuário
  const [dicts, setDicts] = useState<IDictionary[]>([]); // Palavras encontradas

  // async function handleShowWordCard() {
  //   if (text) {
  //     // Realiza o filtro das palavras usado 'searchWords'
  //     const wordsFound = await searchWords(text);
  //     // Valida se contêm items na lista antes de atualiza-la
  //     if (wordsFound?.length) {
  //       // Se houver itens, atualiza a lista.
  //       setDicts(wordsFound);
  //     }
  //   }
  // }

  // const handleRemoveWordCard = (keyword: string) => {
  //   setDicts((prev) => prev.filter((dict) => dict.keyword !== keyword));
  // };

  async function handleShowWordCard() {
    if (text) {
      // Realiza a busca no dicionário usando `searchWords`
      const wordsFound = await searchWords(text);
      if (wordsFound.length) {
        setDicts(wordsFound);
      } else {
        setDicts([]); // Nenhuma palavra encontrada
      }
    }
  }

  const handleRemoveWordCard = (word: string) => {
    setDicts((prev) =>
      prev.filter((dict) => dict.definitions.every((def) => def.word !== word))
    );
  };

  function detectEnterClick(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleShowWordCard();
    }
  }

  return (
    <>
      <div className={styles["dictionary-search-container"]}>
        <div className={styles["image-input-button-flex"]}>
          <DictionarySearchButton onClick={handleShowWordCard}/>
          <input
            type="text"
            placeholder="Dictionary"
            onChange={(e) => setText(e.target.value)}
            onKeyUp={detectEnterClick}
          />
        </div>
      </div>
      {dicts.length != 0 && (
        <div className={styles["wordcard"]}>
          {dicts.map((dict, index) => {
            return (
              <WordCard
                key={index}
                dictionary={dict}
                onClose={() =>
                  handleRemoveWordCard(dict.definitions[0]?.word || "")
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};
