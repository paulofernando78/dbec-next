"use client";

import { useEffect, useState } from "react";
import { Whiteboard } from "@/components/Whiteboard";
import { AudioPlayer, Card } from "@/components";

interface Paragraph {
  speaker: string;
  text: string;
}

interface LessonData {
  title: string;
  subtitle: string;
  descriptions: string[];
  audioSrc: string;
  lessonTitle: string;
  lessonDescription: string;
  paragraphs: Paragraph[];
}

export default function SpecificPurposesBusinessSbellaLesson24() {
  const [lessonData, setLessonData] = useState<LessonData | null>(null);

  useEffect(() => {
    fetch(
      "/assets/data/materials/specific-purposes/business/sbelaa/lesson-24.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
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
        descriptions={lessonData.descriptions}
      />
      <div className="line-break">
        <AudioPlayer audioSrc={lessonData.audioSrc} />
        <Card>
          <p>
            <b>{lessonData.lessonTitle}</b>
          </p>
          <p>{lessonData.lessonDescription}</p>
        </Card>
        {lessonData.paragraphs.map((paragraph, index) => (
          <>
            <p key={index}>
              <b>{paragraph.speaker}</b>
              {paragraph.text}
            </p>
          </>
        ))}
      </div>
    </>
  );
}
