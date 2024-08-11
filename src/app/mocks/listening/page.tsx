import { Presentation } from "@/components/Cards/Celta/VocabularyGrammar/Presentation";
import { WarmUp } from "@/components/Cards/Celta/WarmUp";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

export default function VocabularyGrammar() {
  return (
    <>
      <Whiteboard title="Listening" subtitle="..." descriptions={["..."]} />
      <div>
        <WarmUp>
          <p>...</p>
        </WarmUp>
        <Presentation>
          <p>...</p>
        </Presentation>
      </div>
    </>
  );
}
