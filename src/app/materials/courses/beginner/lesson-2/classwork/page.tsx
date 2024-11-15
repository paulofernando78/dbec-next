"use client";

import { useEffect, useState } from "react";
import { Whiteboard } from "@/components/Whiteboard";
import { Ribbon } from "@/components/Ribbons/Ribbon";

interface Stage {
  label: string;
  bgColor: string;
  textColor: string;
  text: string
}

interface LessonData {
  title: string;
  subtitle: string;
  description: string[];
  stages: Stage[];
}

export default function BeginnerLesson2Classwork() {
  const [lessonData, setLessonData] = useState<LessonData | null>(null);

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
        title={lessonData.title}
        subtitle={lessonData.subtitle}
        descriptions={lessonData.description}
      />
      <div className="line-break">
        {lessonData.stages.map((stage, index) => (
          <>
            <Ribbon
              key={index}
              label={stage.label}
              bgColor={stage.bgColor}
              textColor={stage.textColor}
            />
            <p>{stage.text}</p>
          </>
        ))}
      </div>
    </>
  );
}
