"use client";

// Components
import { WordCard } from "@/components/Molecules/Cards/WordCard";
import { IDictionary } from "@/components/Molecules/Cards/WordCard/WordCard.types";
import { Button } from "@/components/Atoms/Button/";

// Hooks
import { useState } from "react";

// Utils
import { searchWords } from "@/utils/searchWords";

// CSS
import styles from "./DictionarySearch.module.css";
import { DictionarySearchButton } from "@/components/index";
import { CloseButton } from "../Buttons/CloseButton/CloseButton";

export const DictionarySearch = () => {
  const [text, setText] = useState(""); // Entrada do usuário
  const [dicts, setDicts] = useState<IDictionary[]>([]); // Palavras encontradas

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

  const handleClearSearch = () => {
    setText("");
    setDicts([]);
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
          <DictionarySearchButton onClick={handleShowWordCard} />
          <input
            type="text"
            placeholder="Dictionary"
            value={text} // Add value to create a controlled input
            onChange={(e) => setText(e.target.value)}
            onKeyUp={detectEnterClick}
          />
          <CloseButton onClick={handleClearSearch} />
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
