"use client";

import { useState } from "react";

// Components
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { Button } from "@/components/Atoms/Button";
import { WordCard } from "@/components/WordCard/WordCard";
import { DescriptionCard } from "@/components/Cards/DescriptionCard";

// Utils
import { searchWords } from "@/utils/searchWords";

// Interface
import { IDictionary } from "../../../../interfaces";

// CSS
import styles from "./styles.module.css";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Sites",
        contents: [
          {
            globeLink: "https://youglish.com/",
            globeLabel: "Youglish (Words from youtube videos)",
          },
          {
            globeLink: "https://www.playphrase.me/",
            globeLabel: "Play Phrase (Phrases from movies)",
          },
          {
            globeLink: "https://www.languagereactor.com/",
            globeLabel: "Language Reactor",
          },
        ],
      },
    ],
  },
];

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
        descriptions={[
          "verbs",
          "phrasal verbs",
          "nouns",
          "adjectives",
          "idioms",
        ]}
      />
      <div className="line-break">
        <DescriptionCard descriptions={descriptions} />
        <div className={styles["input-button"]}>
          <input
            type="text"
            placeholder="Enter a word"
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
