import { Whiteboard, DictionaryCard } from "@/components/index";
import React from "react";

export default function Vocaulary() {
  return (
    <>
      <Whiteboard
        title="Specific-purposes"
        subtitle="Stock Market"
        descriptions={["Vocabulary"]}
      />
      <div>
        <DictionaryCard
          audioSrc="/c/capital-flight.mp3"
          word="capital flight"
        />
      </div>
    </>
  );
}
