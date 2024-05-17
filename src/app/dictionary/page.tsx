"use client";
import { useState } from "react";

// Components
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";

// CSS
import styles from "./dictionary.module.css";
import { searchWords } from "@/utils/searchWords";

export interface IDictionaryDefinitionsThesauri {
  synonyms?: string;
  antonyms?: string;
}

export interface IDictionaryDefinitionsExamples {
  enExample?: string;
  ptExample?: string;
}

export interface IDictionaryDefinitions {
  enDefinition?: string;
  ptDefinition?: string;
  examples: IDictionaryDefinitionsExamples[];
  thesauri?: IDictionaryDefinitionsThesauri[];
}

export interface IDictionary {
  audio: string;
  keyword: string;
  phonetics?: string;
  partOfSpeech: string;
  definitions: IDictionaryDefinitions[];
}

export interface ICardWord {
  dictionary: IDictionary;
}

export function CardWord({ dictionary }: ICardWord) {
  return (
    <div className={styles["card-word-margin-top"]}>
      <Card bgColor="#FFF8B8">
        <div className={styles["audio-player-margin-top"]}>
          <AudioPlayer audioSrc={dictionary.audio} />
          </div>
  
        {/* Palavra, fonética e sua classe gramátical*/}
        <div  className="margin-bottom">
          <p className={styles["margin-right"]}><b>{dictionary.keyword}</b></p>
          <p className={styles["margin-right"]}><span className="phonetics">{dictionary.phonetics}</span></p>
          <p className={styles["margin-right"]}><span className="times-new-roman-dictionary">{dictionary.partOfSpeech}</span></p>
        </div>
  
        {/* Descrição, definição, tradução, sinônimos e antônimos */}
        <div>
          {dictionary.definitions.map((definition: IDictionaryDefinitions) => {
            return (
              <>
                {/* Se houver uma definição em inglês > Exiba-a */}
                <div className="margin-bottom">
                  {definition.enDefinition && (
                    <p>
                      <span>{">"}{" "}{definition.enDefinition}</span>
                    </p>
                  )}
                  {/* Se houver uma definição em português > Exiba-a */}
                  {definition.ptDefinition && (
                    <p>
                      <span className="portuguese">{">"}{" "}{definition.ptDefinition}</span>
                    </p>
                  )}
  
                {/* Percorre a lista de exemplos da palavra em frases*/}
                {definition.examples.map((example, index) => {
                  return (
                    <p key={index}>
                      <b>•{" "}</b>
                      {/* Se houver um exemplo em inglês > Exiba-o */}
                      {example.enExample && <span>{example.enExample}{" "}</span>}
  
                      {/* Se houver um exemplo em português > Exiba-o */}
                      {example.ptExample && <span className="portuguese">{example.ptExample}</span>}
                    </p>
                  );
                })}
  
                {/* Percorre a lista de sinônimos e antônimos da palavra*/}
                {definition.thesauri?.map(
                  (thesaurus: IDictionaryDefinitionsThesauri) => {
                    return (
                      <>
                        {/* Se houver um sinônimo > Exiba-o */}
                        {thesaurus.synonyms && (
                          <p>
                            <span className="times-new-roman-dictionary">synonym(s):{" "}</span>
                            <span>{thesaurus.synonyms}</span>
                          </p>
                        )}
                        {/* Se houver um antônimos > Exiba-o */}
                        {thesaurus.antonyms && (
                          <p>
                            <span className="times-new-roman-dictionary">antonym(s):{" "}</span>
                            <span>{thesaurus.antonyms}</span>
                          </p>
                        )}
                      </>
                    );
                  }
                )}
                </div>
              </>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

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
          return <CardWord key={index} dictionary={dict} />;
        })}
      </div>
    </>
  );
}
