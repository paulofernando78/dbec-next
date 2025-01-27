"use client";

import Image from "next/image";
import { useState } from "react";
import { closeIcon } from "@/img/index";
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

  // Play omponent
  function Play({ onClick }: { onClick?: () => void; className?: string }) {
    return (
      <>
        <div className={`${styles["play"]}`} onClick={onClick}></div>
      </>
    );
  }

  // Loading Animation Component
  function LoadingAnimation() {
    return <div className={`${styles["loading"]}`}></div>;
  }

  // Playing Animation Component
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

                {/* Line-break to all */}
                <div className="line-break">

                  {/* Definitions */}
                    <div className={styles["border-left"]}>
                      <p className="bold">Definition</p>
                      <ul>
                        <li>
                          {definition.enDefinition && <div className={styles["audio-container"]}>
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
                                          [`enDefinition-${index}`]:
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
                          </div>}
                          
                              <li className="display-inline">
                                {definition.enDefinition}{" "}
                                {definition.ptDefinition && <span className="portuguese">
                                  {definition.ptDefinition}
                                </span>}
                              </li>
                            
                        </li>
                      </ul>
                    </div>
                  

                  {/* Examples */}
                  {definition.examples &&
                    definition.examples.some(
                      (example) => example.enExample
                    ) && (
                      <div className={styles["border-left"]}>
                        <p className="bold">Example</p>
                        {definition.examples.map(
                          (example, exampleIndex) =>
                            example.enExample && (
                              <ul key={exampleIndex}>
                                <li>
                                  <div className={styles["audio-container"]}>
                                    {loadingAudios[
                                      `example-${index}-${exampleIndex}`
                                    ] ? (
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
                                              [`example-${index}-${exampleIndex}`]:
                                                true,
                                            }));
                                            handleTextToSpeech(
                                              example.enExample,
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
                                  <span>{example.enExample}</span>{" "}
                                  {example.ptExample && (
                                    <span className="portuguese">
                                      {example.ptExample}
                                    </span>
                                  )}
                                </li>
                              </ul>
                            )
                        )}
                      </div>
                    )}

                  {/* Synonyms */}
                  {definition.synonyms && definition.synonyms.length > 0 && (
                    <div className={styles["border-left"]}>
                      <p className="bold">Synonyms</p>
                      <ul>
                        {definition.synonyms?.map((synonym, synonymIndex) => (
                          <li
                            key={synonymIndex}
                            className="display-inline p-font"
                          >
                            {synonym}
                            {definition.synonyms &&
                              synonymIndex < definition.synonyms.length - 1 &&
                              ","}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Antonyms */}
                  {definition.antonyms && (
                    <div className={styles["border-left"]}>
                      <p className="bold">Antonyms</p>
                      <ul>
                        {definition.antonyms?.map((antonym, antonymIndex) => (
                          <li
                            key={antonymIndex}
                            className="display-inline p-font"
                          >
                            {antonym}
                            {definition.antonyms &&
                              antonymIndex < definition.antonyms.length - 1 &&
                              ","}{" "}
                          </li>
                        ))}
                      </ul>
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
                  <hr
                    className={`customized-hr ${
                      index === dictionary.definitions.length - 1
                        ? "last-customized-hr"
                        : ""
                    }`}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
