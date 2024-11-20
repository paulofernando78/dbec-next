"use client";

import { Whiteboard } from "@/components/Whiteboard";
import { AudioPlayer, Card, DictionaryCard, Radio } from "@/components";
import { GenericLessonTemplateProps } from "@/types/materials/GenericLesson";

const baseAudioSrc = "/assets/audio" 

export const GenericLessonTemplate = ({ data }: GenericLessonTemplateProps) => {
  return (
    <>
      <Whiteboard
        title={data.title}
        subtitle={data.subtitle}
        descriptions={data.descriptions}
      />
      <div className="line-break">
        <div className="audio-fixed">
          <AudioPlayer audioSrc={`${baseAudioSrc}${data.audioSrc}`} />
        </div>
        <Card>
          <p>
            <b>{data.lessonTitle}</b>
          </p>
          <p>{data.lessonDescription}</p>
        </Card>

        {/* Paragraphs */}
        {data.paragraphs.map((paragraph, index) => (
          <div key={index}>
            {paragraph.speaker && <p className="display-inline">
              <b>{paragraph.speaker}:</b>
            </p>}{" "}
            {paragraph.texts.map((text, textIndex) => (
              <div key={textIndex} className="display-inline">
                <div className="display-inline">
                  {text.vocabulary && (
                    <DictionaryCard
                      keyword={text.keyword}
                      label={text.vocabulary}
                      audioSrc={text.audioSrc}
                    />
                  )}
                </div>{" "}
                <p className="display-inline">{text.text} </p>
              </div>
            ))}
          </div>
        ))}
        <Card bgColor="lightgrey">
          <p>
            <b>Exercises</b>
          </p>
        </Card>
        {data.radioExercises && data.radioExercises.length > 0 && (
          <Radio questions={data.radioExercises} />
        )}
      </div>
    </>
  );
};
