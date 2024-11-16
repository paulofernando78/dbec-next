"use client";

import { Whiteboard } from "@/components/Whiteboard";
import { AudioPlayer, Card, Radio } from "@/components";
import { SbelaaLessonTemplateProps } from "@/types/materials/specific-purposes/business/sbelaa/sbelaa";

export const SbellaLessonTemplate = ({ data }: SbelaaLessonTemplateProps) => {
  return (
    <>
      <Whiteboard
        title={data.title}
        subtitle={data.subtitle}
        descriptions={data.descriptions}
      />
      <div className="line-break">
        <AudioPlayer audioSrc={data.audioSrc} />
        <Card>
          <p>
            <b>{data.lessonTitle}</b>
          </p>
          <p>{data.lessonDescription}</p>
        </Card>
        {data.paragraphs.map((paragraph, index) => (
          <p key={index}>
            <b>{paragraph.speaker}</b> {paragraph.text}
          </p>
        ))}
        <Card bgColor="lightgrey">
          <p>
            <b>Exercises</b>
          </p>
        </Card>
        {data.radioExercises && data.radioExercises.length > 0 &&(
          <Radio questions={data.radioExercises} />
        )}
      </div>
    </>
  );
};
