import React from "react";
import { TextData } from "./api-beginner-whiteboard";
import { Whiteboard } from "@/components/Whiteboard";

interface VocabularyProps {
  data: TextData[];
}

export function VocabularyGrammar({ data }: VocabularyProps) {
  return (
    <>
      {data.map((text, index) => (
        <Whiteboard
          key={index}
          title={text.title}
          subTitle={text.subTitle}
          descriptions={text.descriptions}
        />
      ))}
    </>
  );
}
