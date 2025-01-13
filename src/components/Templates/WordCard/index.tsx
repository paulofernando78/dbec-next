"use client";

// Components
import Image from "next/image";
import { useState } from "react";

// Image
import { playIcon } from "@/img/index";

// Typescript
import { IDictionaryDefinitions, WordCardProps } from "./types";

// CSS
import styles from "./styles.module.css";

export function WordCard({ dictionary }: WordCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTextToSpeech = async (text: string) => {
    if (!text.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/elevenlabs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          voice: "JBFqnCBsd6RMkjVDRZzb",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate audio");
      }

      // If the response is successful, it contains the audio as a base64 string
      const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
      setAudioElement(audio);

      audio.onended = () => setIsPlaying(false);
      audio.play();
      setIsPlaying(true);
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
        <div className={styles["margin-top"]}>
          {dictionary.definitions.map((definition: IDictionaryDefinitions, index: number) => (
            <div key={index}>
              {/* Word with play button */}
              {definition.word && (
                <p className={`margin-bottom ${styles["margin-right"]}`}>
                  <span className="bold">
                    <Image
                      src={playIcon}
                      alt="Play icon"
                      onClick={() =>
                        definition.word && handleTextToSpeech(definition.word)
                      }
                      className={styles["play-button"]}
                    />
                    {definition.word}
                  </span>
                </p>
              )}
              {/* Phonetics */}
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
                {/* More content like synonyms, antonyms, etc. */}
                {definition.examples?.map((example, exampleIndex) => (
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
                    )}
                    {example.ptExample && (
                      <span className="portuguese">
                        {example.ptExample}
                      </span>
                    )}
                  </p>
                ))}
                <div className="margin-top">
                  {definition.notes?.map((note, noteIndex) => (
                    <p key={noteIndex}>
                      {note.note && (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: note.note,
                          }}
                        />
                      )}
                    </p>
                  ))}
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
          ))}
        </div>
      </div>
    </div>
  );
}