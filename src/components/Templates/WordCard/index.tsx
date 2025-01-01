"use client";

// Components
import { AudioPlayer } from "../..";
import { Button } from "@/components/Atoms/Button";

// CSS
import styles from "./styles.module.css";

// Image
import { playIcon } from "@/img/index";

// Types
import { IDictionaryDefinitions, WordCardProps } from "./types";
import Image from "next/image";

export function WordCard({ dictionary }: WordCardProps) {
  const handleTextToSpeech = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };
  return (
    <div className={styles["word-card-margin"]}>
      <div className={styles["border"]}>
        <p className="display-none">
          <b>{dictionary.keyword}</b>
        </p>
        <div className={styles["margin-top"]}>
          {dictionary.definitions.map(
            (definition: IDictionaryDefinitions, index: number) => {
              return (
                <div key={index}>
                  {/* {definition.audio && (
                  <div className={styles["audio-player-margin-top"]}>
                    <AudioPlayer audioSrc={definition.audio} />
                  </div>
                )} */}
                  {definition.word && (
                    <p className={`margin-bottom ${styles["margin-right"]}`}>
                      <span className="bold">
                        <Image
                          src={playIcon}
                          alt="Play icon"
                          onClick={() =>
                            definition.word &&
                            handleTextToSpeech(definition.word)
                          }
                          className={styles["play-button"]}
                        />
                        {definition.word}
                      </span>
                    </p>
                  )}
                  {definition.phonetics && (
                    <p className={styles["margin-right"]}>
                      <span className="phonetics">{definition.phonetics}</span>
                    </p>
                  )}
                  <p className={styles["margin-right"]}>
                    <span className="times-new-roman-dictionary">
                      {definition.partOfSpeech}
                    </span>
                  </p>
                  <div className="margin-bottom white-space-pre-wrap">
                    {definition.enDefinition && (
                      <p>
                        <span>
                          <Image
                            src={playIcon}
                            alt="Play icon"
                            onClick={() =>
                              definition.enDefinition &&
                              handleTextToSpeech(definition.enDefinition)
                            }
                            className={styles["play-button"]}
                          />
                          {definition.enDefinition}
                        </span>
                      </p>
                    )}
                    {definition.ptDefinition && (
                      <p>
                        <span className="portuguese">
                          {definition.ptDefinition}
                        </span>
                      </p>
                    )}
                    {definition.examples?.map((example, exampleIndex) => {
                      return (
                        <p key={exampleIndex}>
                          <Image
                            src={playIcon}
                            alt="Play icon"
                            onClick={() =>
                              example.enExample &&
                              handleTextToSpeech(example.enExample)
                            }
                            className={styles["play-button"]}
                          />
                          <b>• </b>
                          {example.enExample && (
                            <span>{example.enExample}</span>
                          )}{" "}
                          {example.ptExample && (
                            <span className="portuguese">
                              {example.ptExample}
                            </span>
                          )}
                        </p>
                      );
                    })}
                    <div className="margin-top">
                      {definition.notes?.map((note, noteIndex) => {
                        return (
                          <p key={noteIndex}>
                            {note.note && (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: note.note,
                                }}
                              />
                            )}
                          </p>
                        );
                      })}
                    </div>
                    {definition.synonyms && (
                      <p>
                        <span className="times-new-roman-dictionary">
                          synonyms:{" "}
                        </span>
                        <span>{definition.synonyms}</span>
                      </p>
                    )}
                    {definition.antonyms && (
                      <p>
                        <span className="times-new-roman-dictionary">
                          antonyms:{" "}
                        </span>
                        <span>{definition.antonyms}</span>
                      </p>
                    )}
                    {definition.seeAlso && (
                      <p>
                        <span className="times-new-roman-dictionary">
                          See also:{" "}
                        </span>
                        <span>{definition.seeAlso}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
