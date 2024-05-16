"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Button } from "@/components/Button/Button";
import styles from "./dictionary.module.css";
import { Card } from "@/components/Card/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { useEffect, useState } from "react";

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

export async function searchWords(word: string) {
  try {
    // Faz e espera a requisição
    const response = await fetch("http://localhost:3000/assets/data/dictionary.json");
    // Converte em formato JSON e Faz a Tipagem do Retorno
    const data = (await response.json()) as IDictionary[];
    // Filtra o dicionário para pegar as palavras que contêm a palavra inserida
    const wordsFound = data.filter((dict) => {
      // converte para letra mínuscula para melhor compatibilidade
      return dict.keyword.toLowerCase().includes(word.toLowerCase())
    });
    // Retorna o dicionário filtrado
    return wordsFound;
  } catch (error: any) {
    console.error(error.message);
  }
}

export function CardWord({ dictionary }: ICardWord) {
  return (
    <Card>
      {/* Player de Áudio */}
      <AudioPlayer audioSrc={dictionary.audio} />

      {/* Palavra, fonética e sua classe gramátical*/}
      <div>
        <p>
          <b>{dictionary.keyword}</b>
          <span>{dictionary.phonetics}</span>
          <span>{dictionary.partOfSpeech}</span>
        </p>
      </div>

      {/* Descrição, definição, tradução, sinônimos e antônimos */}
      <div>
        {dictionary.definitions.map((definition: IDictionaryDefinitions) => {
          return (
            <>
              {/* Se houver uma definição em inglês > Exiba-a */}
              {definition.enDefinition && (
                <p>
                  <span>{definition.enDefinition}</span>
                </p>
              )}
              {/* Se houver uma definição em português > Exiba-a */}
              {definition.ptDefinition && (
                <p>
                  <span>{definition.ptDefinition}</span>
                </p>
              )}
              
              {/* Percorre a lista de exemplos da palavra em frases*/}
              {definition.examples.map((example, index) => {
                return (
                  <p key={index}>
                    <b>•</b>
                    {/* Se houver um exemplo em inglês > Exiba-o */}
                    {example.enExample && <span>{example.enExample}</span>}

                    {/* Se houver um exemplo em português > Exiba-o */}
                    {example.ptExample && <span>{example.ptExample}</span>}
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
                          <span>synonym(s):</span>
                          <span>{thesaurus.synonyms}</span>
                        </p>
                      )}
                      {/* Se houver um antônimos > Exiba-o */}
                      {thesaurus.antonyms && (
                        <p>
                          <span>synonym(s):</span>
                          <span>{thesaurus.antonyms}</span>
                        </p>
                      )}
                    </>
                  );
                }
              )}
            </>
          );
        })}
      </div>
    </Card>
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
        handleClick()
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
