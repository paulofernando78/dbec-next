"use client";

// Utils
import { getAudioFromStorage, saveAudioToStorage } from "@/utils/audioStorage";

// Components
import Image from "next/image";
import { useState } from "react";

// Image
import { playIcon, stopIcon } from "@/img/index";

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
                          playingAudios[`word-${index}`] ? stopIcon : playIcon
                        }
                        alt={
                          playingAudios[`word-${index}`]
                            ? "Stop icon"
                            : "Play icon"
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

                {/* Definitions */}
                <div className="line-break">
                  <p>
                    <span>
                      <Image
                        src={
                          playingAudios[`definition-${index}`]
                            ? stopIcon
                            : playIcon
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
                        <>
                          <span>{definition.enDefinition}</span>{" "}
                          <span className="portuguese">
                            {definition.ptDefinition}
                          </span>
                        </>
                      )}
                    </span>
                  </p>

                  {/* English and Portuguese example */}
                  {definition.examples?.map((example, exampleIndex) => (
                    <p key={exampleIndex}>
                      <Image
                        src={
                          playingAudios[`example-${index}-${exampleIndex}`]
                            ? stopIcon
                            : playIcon
                        }
                        alt={
                          playingAudios[`example-${index}-${exampleIndex}`]
                            ? "Stop icon"
                            : "Play icon"
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
                      <b>• </b>
                      {example.enExample && (
                        <span>{example.enExample}</span>
                      )}{" "}
                      {example.ptExample && (
                        <span className="portuguese">{example.ptExample}</span>
                      )}
                    </p>
                  ))}

                  {/* Note */}
                  {definition.note && (
                    <p>
                      <span className="times-new-roman-dictionary">note:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: definition.note,
                        }}
                      />
                    </p>
                  )}

                  <div>
                    {/* Synonyms and Antonyms */}
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

                    {/* See also */}
                    {definition.seeAlso && (
                      <p>
                        <span className="times-new-roman-dictionary">
                          see also:{" "}
                        </span>
                        <span>{definition.seeAlso}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
