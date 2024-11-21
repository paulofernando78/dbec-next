"use client";

import { useEffect, useState } from "react";
import { Whiteboard } from "@/components/Whiteboard";
import { Ribbon } from "@/components/Ribbons/Ribbon";
import { VocabulayGrammarLessonDataProps } from "@/types/materials/vocabulary-grammar";

export default function BeginnerLesson2Classwork() {
  const [lessonData, setLessonData] =
    useState<VocabulayGrammarLessonDataProps | null>(null);

  useEffect(() => {
    fetch("/assets/data/materials/courses/beginner/lesson-2.json")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao carregar o JSON");
        return response.json();
      })
      .then((data) => setLessonData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!lessonData) return <p>Loading...</p>;

  return (
    <>
      <Whiteboard
        title={lessonData.whiteboard.title}
        subtitle={lessonData.whiteboard.subtitle}
        descriptions={lessonData.whiteboard.description}
      />
      <div className="line-break">
        {lessonData.stages.map((stage, stageIndex) => (
          <>
            <Ribbon
              key={stageIndex}
              label={stage.label}
              bgColor={stage.bgColor}
              textColor={stage.textColor}
            />
            <p>{stage.text}</p>
            {stage.substages?.map((substage, substageIndex) => (
              <div key={substageIndex} className="line-break">
                <Ribbon
                  label={substage.label}
                  bgColor="lightgrey"
                  textColor="black"
                />
                {substage.texts?.map((text, textIndex) => (
                  <div key={textIndex}>
                    {text.instructions && (
                      <>
                        <p><b>Instructions:</b></p>
                        {text.instructions.map((instruction, instructionIndex) => (
                          <p key={instructionIndex}>• {instruction.instruction}</p>
                        ))}
                      </>
                    )}
                    <p className="line-break">{text.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </>
  );
}
