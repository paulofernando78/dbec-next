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
          <DictionaryCard
            audioSrc="/a/an.mp3"
            keyword="an"
            label="<span class='underline'>a</span>n"
            phonetics="/æn/"
          />
          <DictionaryCard
            audioSrc="/a/apple.mp3"
            label="<span class='underline'>a</span>pple"
            phonetics="/ˈæp.əl/"
          />
          <DictionaryCard
            audioSrc="/b/bad.mp3"
            label="b<span class='underline'>a</span>d"
            phonetics="/bæd/"
          />
          <DictionaryCard
            audioSrc="/b/bat.mp3"
            label="b<span class='underline'>a</span>t"
            phonetics="/bæt/"
          />
          <DictionaryCard
            audioSrc="/c/cap.mp3"
            label="c<span class='underline'>a</span>p"
            phonetics="/kæp/"
          />
          <DictionaryCard
            audioSrc="/f/fat.mp3"
            label="f<span class='underline'>a</span>t"
            phonetics="/fæt/"
          />
          <DictionaryCard
            audioSrc="/h/hat.mp3"
            label="h<span class='underline'>a</span>t"
            phonetics="/hæt/"
          />
          <DictionaryCard
            audioSrc="/m/man.mp3"
            label="m<span class='underline'>a</span>n"
            phonetics="/mæn/"
          />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="Phonetics"
            phonetics="/ɑː/"
          />
          <DictionaryCard
            audioSrc="/s/spa.mp3"
            label="sp<span class='underline'>a</span>"
            phonetics="/spɑː/"
          />
        </div>
      </div>
    </>
  );
};
