"use client";

import Image from "next/image";
import { useState } from "react";
import { loadingIcon, speakerIcon, playingIcon, closeIcon } from "@/img/index";
import { IDictionaryDefinitions, WordCardProps } from "./types";
import styles from "./styles.module.css";
import { handleTextToSpeech } from "@/utils/textToSpeech";

export function WordCard({ dictionary, onClose }: WordCardProps) {
  const [playingAudios, setPlayingAudios] = useState<{
    [key: string]: boolean;
  }>({});
  const [loadingAudios, setLoadingAudios] = useState<{
    [key: string]: boolean;
  }>({});
  const [error, setError] = useState<string | null>(null);

  function LoadingAnimation() {
    return <div className={`${styles["loading"]}`}></div>;
  }

  return (
    <div className={styles["wordcard-container"]}>
      <div className={styles["border"]}>
        <p className="display-none">
          <b>{dictionary.keyword}</b>
        </p>
        <div>
          {dictionary.definitions.map(
            (definition: IDictionaryDefinitions, index: number) => (
              <div key={index}>
                {/* Word with play button */}
                <div className={`margin-bottom ${styles["padding-left"]}`}>
                  {definition.word && (
                    <div className={styles["word-margin-bottom"]}>
                      <p className={`bold ${styles["flex"]}`}>
                        {loadingAudios[`word-${index}`] ? (
                          <LoadingAnimation />
                        ) : (
                          <Image
                            src={
                              playingAudios[`word-${index}`]
                                ? playingIcon
                                : speakerIcon
                            }
                            alt={
                              playingAudios[`word-${index}`]
                                ? "Play icon"
                                : "Speaker icon"
                            }
                            onClick={() => {
                              if (
                                definition.word &&
                                !loadingAudios[`word-${index}`] &&
                                !playingAudios[`word-${index}`]
                              ) {
                                setLoadingAudios((prev) => ({
                                  ...prev,
                                  [`word-${index}`]: true,
                                }));
                                handleTextToSpeech(
                                  definition.word,
                                  `word-${index}`,
                                  (isLoading) => {
                                    setLoadingAudios((prev) => ({
                                      ...prev,
                                      [`word-${index}`]: !!isLoading,
                                    }));
                                  },
                                  setError,
                                  setPlayingAudios,
                                  playingAudios
                                );
                              }
                            }}
                            className={styles["audio-button"]}
                          />
                        )}
                        <span className={styles["word"]}>
                          {definition.word}
                        </span>
                        <Image
                          src={closeIcon}
                          alt="Close icon"
                          className={`icon-general ${styles["close-button"]}`}
                          onClick={() => onClose(dictionary.keyword)}
                        />
                      </p>
                      <p className="phonetics">{definition.phonetics}</p>
                      <p className="times-new-roman-dictionary">
                        {definition.partOfSpeech}
                      </p>
                    </div>
                  )}
                </div>

                <div className="line-break">
                  {/* Definitions */}
                  <div className={styles["border-left"]}>
                    <p className="bold">Definition</p>

                    {loadingAudios[`enDefinition-${index}`] ? (
                      <LoadingAnimation />
                    ) : (
                      <Image
                        src={
                          playingAudios[`enDefinition-${index}`]
                            ? playingIcon
                            : speakerIcon
                        }
                        alt={
                          playingAudios[`enDefinition-${index}`]
                            ? "Play icon"
                            : "Speaker icon"
                        }
                        onClick={() => {
                          if (
                            definition.enDefinition &&
                            !loadingAudios[`enDefinition-${index}`] &&
                            !playingAudios[`enDefinition-${index}`]
                          ) {
                            setLoadingAudios((prev) => ({
                              ...prev,
                              [`enDefinition-${index}`]: true,
                            }));
                            handleTextToSpeech(
                              definition.enDefinition || "",
                              `enDefinition-${index}`,
                              (isLoading) => {
                                setLoadingAudios((prev) => ({
                                  ...prev,
                                  [`enDefinition-${index}`]: !!isLoading,
                                }));
                              },
                              setError,
                              setPlayingAudios,
                              playingAudios
                            );
                          }
                        }}
                        className={`${styles["audio-button"]} ${styles["adjustment"]}`}
                      />
                    )}

                    {definition.enDefinition && (
                      <p className="display-inline">
                        <span>{definition.enDefinition}</span>{" "}
                        <span className="portuguese">
                          {definition.ptDefinition}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Examples */}
                  <div className={styles["border-left"]}>
                    <p className="bold">Example</p>
                    {definition.examples?.map((example, exampleIndex) => (
                      <p key={exampleIndex}>
                        {loadingAudios[`example-${index}`] ? (
                          <LoadingAnimation />
                        ) : (
                          <Image
                            src={
                              playingAudios[`example-${index}`]
                                ? playingIcon
                                : speakerIcon
                            }
                            alt={
                              playingAudios[`example-${index}`]
                                ? "Play icon"
                                : "Speaker icon"
                            }
                            onClick={() => {
                              if (
                                example.enExample &&
                                !loadingAudios[`example-${index}`] &&
                                !playingAudios[`example-${index}`]
                              ) {
                                setLoadingAudios((prev) => ({
                                  ...prev,
                                  [`example-${index}`]: true,
                                }));
                                handleTextToSpeech(
                                  example.enExample || "",
                                  `example-${index}`,
                                  (isLoading) => {
                                    setLoadingAudios((prev) => ({
                                      ...prev,
                                      [`example-${index}`]: !!isLoading,
                                    }));
                                  },
                                  setError,
                                  setPlayingAudios,
                                  playingAudios
                                );
                              }
                            }}
                            className={`${styles["audio-button"]} ${styles["adjustment"]}`}
                          />
                        )}
                        {example.enExample && <span>{example.enExample}</span>}{" "}
                        {example.ptExample && (
                          <span className="portuguese">
                            {example.ptExample}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Synonyms */}
                  {definition.synonyms && (
                    <div className={styles["border-left"]}>
                      <p className="bold">Synonyms</p>
                      <p>{definition.synonyms}</p>
                    </div>
                  )}

                  {/* Antonyms */}
                  {definition.antonyms && (
                    <div className={styles["border-left"]}>
                      <p className="bold">Antonyms</p>
                      <p>{definition.antonyms}</p>
                    </div>
                  )}

                  {/* Notes */}
                  {definition.notes?.map((note, noteIndex) => (
                    <div className={styles["border-left"]} key={noteIndex}>
                      <p className="bold">Note</p>
                      <p>
                        {note.enNote && <span>{note.enNote}</span>}{" "}
                        {note.ptNote && (
                          <span className="portuguese">{note.ptNote}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
