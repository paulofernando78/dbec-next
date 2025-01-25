"use client";

import Image from "next/image";
import { useState } from "react";
import { speakerIcon, playingIcon, closeIcon } from "@/img/index";
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

  function Play({
    onClick,
    className,
  }: {
    onClick?: () => void;
    className?: string;
  }) {
    return (
      <>
        <div className={`${styles["play"]}`} onClick={onClick}></div>
      </>
    );
  }

  function LoadingAnimation() {
    return <div className={`${styles["loading"]}`}></div>;
  }

  function PlayingAnimation() {
    return (
      <div className={styles["waves-flex"]}>
        <div className={`${styles["waves"]} ${styles["wave-1"]}`}></div>
        <div className={`${styles["waves"]} ${styles["wave-2"]}`}></div>
        <div className={`${styles["waves"]} ${styles["wave-3"]}`}></div>
      </div>
    );
  }

  return (
    <div className={styles["wordcard-container"]}>
      <div className="flex"></div>
      <div className={styles["border"]}>
        <p className="display-none">
          <b>{dictionary.keyword}</b>
        </p>
        <div>
          {dictionary.definitions.map(
            (definition: IDictionaryDefinitions, index: number) => (
              <div key={index}>
                {/* Word with play button */}
                <Image
                  src={closeIcon}
                  alt="Close icon"
                  className={`icon-general ${styles["close-button"]}`}
                  onClick={() => onClose(dictionary.keyword)}
                />
                <div className={`margin-bottom ${styles["padding-left"]}`}>
                  {definition.word && (
                    <div className={styles["word-margin-bottom"]}>
                      <p className={`bold ${styles["flex"]}`}>
                        <span className={styles["audio-container"]}>
                          {loadingAudios[`word-${index}`] ? (
                            <LoadingAnimation />
                          ) : playingAudios[`word-${index}`] ? (
                            <PlayingAnimation />
                          ) : (
                            <Play
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
                            />
                          )}
                        </span>
                        <span className={styles["word-close-button"]}>
                          {definition.word}
                        </span>
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
                    <div className={styles["audio-container"]}>
                      {loadingAudios[`enDefinition-${index}`] ? (
                        <LoadingAnimation />
                      ) : playingAudios[`enDefinition-${index}`] ? (
                        <PlayingAnimation />
                      ) : (
                        <Play
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
                        />
                      )}
                    </div>

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
                        <div className={styles["audio-container"]}>
                          {loadingAudios[`example-${index}-${exampleIndex}`] ? (
                            <LoadingAnimation />
                          ) : playingAudios[
                              `example-${index}-${exampleIndex}`
                            ] ? (
                            <PlayingAnimation />
                          ) : (
                            <Play
                              onClick={() => {
                                if (
                                  example.enExample &&
                                  !loadingAudios[
                                    `example-${index}-${exampleIndex}`
                                  ] &&
                                  !playingAudios[
                                    `example-${index}-${exampleIndex}`
                                  ]
                                ) {
                                  setLoadingAudios((prev) => ({
                                    ...prev,
                                    [`example-${index}-${exampleIndex}`]: true,
                                  }));
                                  handleTextToSpeech(
                                    example.enExample || "",
                                    `example-${index}-${exampleIndex}`,
                                    (isLoading) => {
                                      setLoadingAudios((prev) => ({
                                        ...prev,
                                        [`example-${index}-${exampleIndex}`]:
                                          !!isLoading,
                                      }));
                                    },
                                    setError,
                                    setPlayingAudios,
                                    playingAudios
                                  );
                                }
                              }}
                            />
                          )}
                        </div>
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
