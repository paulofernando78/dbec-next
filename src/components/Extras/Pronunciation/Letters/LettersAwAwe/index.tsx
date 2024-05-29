import { Card } from "@/components/Card/Card";
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
          <DictionaryCard audioSrc="" label="phonetics" phonetics="/ɑː/" />
          <DictionaryCard audioSrc="" label="awful" />
          <DictionaryCard audioSrc="" label="awfully" />
          <DictionaryCard audioSrc="" label="caw" />
          <DictionaryCard audioSrc="" label="dawn" />
          <DictionaryCard audioSrc="" label="draw" />
          <DictionaryCard audioSrc="" label="law" />
          <DictionaryCard audioSrc="" label="lawsuit" />
          <DictionaryCard audioSrc="" label="saw" />
          <DictionaryCard audioSrc="" label="spaw" />
        </div>
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="" label="awesome" />
          <DictionaryCard audioSrc="" label="awe" />
        </div>
      </div>
    </>
  );
};
