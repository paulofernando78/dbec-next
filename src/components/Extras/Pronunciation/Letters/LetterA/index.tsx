import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import React from "react";

export const LetterA = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter a</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="Phonetics"
            phonetics="/æ/"
          />
          <DictionaryCard audioSrc="/a/an.mp3" label="an" />
          <DictionaryCard audioSrc="/a/apple.mp3" label="apple" />
          <DictionaryCard audioSrc="/b/bad.mp3" label="bad" />
          <DictionaryCard audioSrc="/b/bat.mp3" label="bat" />
          <DictionaryCard audioSrc="/c/cap.mp3" label="cap" />
          <DictionaryCard audioSrc="/f/fat.mp3" label="fat" />
          <DictionaryCard audioSrc="/h/hat.mp3" label="hat" />
          <DictionaryCard audioSrc="/m/man.mp3" label="man" />
        </div>
      </div>
    </>
  );
};
