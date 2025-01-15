"use client";

// Utils
import { getAudioFromStorage, saveAudioToStorage } from "@/utils/audioStorage";

// Components
import Image from "next/image";
import { useState } from "react";

// Image
import { speakerIcon, playingIcon } from "@/img/index";

// Typescript
import { IDictionaryDefinitions, WordCardProps } from "./types";

// CSS
import styles from "./styles.module.css";

export function WordCard({ dictionary }: WordCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [playingAudios, setPlayingAudios] = useState<{
    [key: string]: boolean;
  }>({});

  const playAudio = (audio: HTMLAudioElement, key: string) => {
    setAudioElement(audio);

    audio.onended = () =>
      setPlayingAudios((prev) => ({ ...prev, [key]: false }));
    audio.play();
    setPlayingAudios((prev) => ({ ...prev, [key]: true }));
  };

  const handleTextToSpeech = async (text: string, key: string) => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const savedAudio = getAudioFromStorage(text);
      if (savedAudio) {
        playAudio(savedAudio, key);
        return;
      }
      const response = await fetch("/api/elevenlabs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          voice: "9BWtsMINqrJLrRacOk9x",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate audio");
      }

      saveAudioToStorage(text, data.audio);
      const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
      playAudio(audio, key);
    } catch (error: any) {
      console.error("Error generating audio:", error);
      setError(error.message || "Failed to generate audio. Please, try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={styles["word-card-margin"]}>
      <div className={styles["border"]}>
        <p className="display-none">
          <b>{dictionary.keyword}</b>
        </p>
        <div>
          {dictionary.definitions.map(
            (definition: IDictionaryDefinitions, index: number) => (
              <div key={index}>
                {/* Word with play button */}
                {definition.word && (
                  <p className={`margin-bottom ${styles["margin-right"]}`}>
                    <span className="bold">
                      <Image
                        src={
                          playingAudios[`word-${index}`]
                            ? playingIcon
                            : speakerIcon
                        }
                        alt={
                          playingAudios[`word-${index}`]
                            ? "Stop icon"
                            : "Speaker icon"
                        }
                        onClick={() =>
                          definition.word &&
                          handleTextToSpeech(definition.word, `word-${index}`)
                        }
                        className={styles["audio-buttons"]}
                      />
                      {definition.word}
                    </span>
                  </p>
                )}

                {/* Phonetics / Part of Speech*/}
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

                <div className="line-break">
                  <div className={styles["border-left"]}>
                    {/* Definitions */}
                    <p className="bold">Definition</p>
                    <Image
                      src={
                        playingAudios[`definition-${index}`]
                          ? playingIcon
                          : speakerIcon
                      }
                      alt={
                        playingAudios[`definition-${index}`]
                          ? "Stop icon"
                          : "Play icon"
                      }
                      onClick={() =>
                        definition.enDefinition &&
                        handleTextToSpeech(
                          definition.enDefinition,
                          `definition-${index}`
                        )
                      }
                      className={styles["audio-buttons"]}
                    />
                    {definition.enDefinition && (
                      <p className="display-inline">
                        <span>{definition.enDefinition}</span>{" "}
                        <span className="portuguese">
                          {definition.ptDefinition}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className={styles["border-left"]}>
                    {/* English and Portuguese example */}
                    <p className="bold">Example</p>
                    {definition.examples?.map((example, exampleIndex) => (
                      <p key={exampleIndex}>
                        <Image
                          src={
                            playingAudios[`example-${index}-${exampleIndex}`]
                              ? playingIcon
                              : speakerIcon
                          }
                          alt={
                            playingAudios[`example-${index}-${exampleIndex}`]
                              ? "Stop icon"
                              : "Speaker icon"
                          }
                          onClick={() =>
                            example.enExample &&
                            handleTextToSpeech(
                              example.enExample,
                              `example-${index}-${exampleIndex}`
                            )
                          }
                          className={styles["audio-buttons"]}
                        />
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

                  {/* See also */}
                  {definition.seeAlso && (
                    <div className={styles["border-left"]}>
                      <p className="bold">See also</p>
                      <p>{definition.seeAlso}</p>
                    </div>
                  )}

                  {/* Note */}
                  {definition.notes && <div className={styles["border-left"]}>
                    <p className="bold">Note</p>
                    {definition.notes?.map((note, noteIndex) => (
                      <div key={noteIndex} className="margin-bottom">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: note.note || "",
                          }}
                        />
                      </div>
                    ))}
                  </div>}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
