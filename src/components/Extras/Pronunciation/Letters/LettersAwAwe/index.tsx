import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import React from "react";

export const LettersAwAwe = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letters aw • awe</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="/a/" label="phonetics" phonetics="/ɑː/" />
          <DictionaryCard audioSrc="/a/awful.mp3" label="<span class='underline'>aw</span>ful" phonetics="/ˈɑː.fəl/" />
          <DictionaryCard audioSrc="/a/awfully.mp3" label="<span class='underline'>aw</span>fully" phonetics="/ˈɑː.fəl.i/" />
          <DictionaryCard audioSrc="/c/caw.mp3" label="c<span class='underline'>aw</span>" phonetics="/kɑː/" />
          <DictionaryCard audioSrc="/d/dawn.mp3" label="d<span class='underline'>aw</span>n" phonetics="/dɑːn/" />
          <DictionaryCard audioSrc="/d/draw.mp3" label="dr<span class='underline'>aw</span>" phonetics="/drɑː/" />
          <DictionaryCard audioSrc="/l/law.mp3" label="l<span class='underline'>aw</span>" phonetics="/lɑː/" />
          <DictionaryCard audioSrc="/l/lawsuit.mp3" label="l<span class='underline'>aw</span>suit" phonetics="/ˈlɑː.suːt/" />
          <DictionaryCard audioSrc="/s/saw.mp3" label="s<span class='underline'>aw</span>" phonetics="/sɑː/" />
          <DictionaryCard audioSrc="/s/spawn.mp3" label="sp<span class='underline'>aw</span>n" phonetics="/spɑːn/" />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="/a/awesome.mp3" label="<span class='underline'>awe</span>some" phonetics=" /ˈɑː.səm/" />
          <DictionaryCard audioSrc="/a/awe.mp3" label="<span class='underline'>awe</span>" phonetics="/ɑː/" />
        </div>
      </div>
    </>
  );
};
