"use client";

// Components
import {
  Whiteboard,
  Ribbon,
  AudioPlayer,
  DictionaryCard,
  Radio,
  SwiperFraction,
  VideoPlayer,
  FillInTheBlanks,
  Paragraph,
} from "@/components";
import { Dropdown } from "@/components/Molecules/ExerciseTemplates/Dropdown";
import { LessonTemplateProps } from "@/components/Templates/LessonData/LessonData.types";

const baseAudioSrc = "/assets/audio";

export const LessonTemplate = ({ lessonData }: LessonTemplateProps) => {
  return (
    <>
      <Whiteboard
        title={lessonData.whiteboard.title}
        subtitle={lessonData.whiteboard.subtitle}
        descriptions={lessonData.whiteboard.description}
      />
      <div className="line-break">
        {lessonData.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="line-break">
            {/* Title */}
            <Ribbon
              label={lesson.title}
              bgColor={lesson.bgColor || "defaultBgColor"}
              textColor={lesson.textColor || "defaultTextColor"}
            />
            {/* Paragraphs + Word */}
            <Paragraph />

            {/* SwiperFraction images */}
            {lesson.swiperFractionImages &&
              lesson.swiperFractionImages.length > 0 && (
                <SwiperFraction
                  images={lesson.swiperFractionImages?.map(
                    (swiperFractionImage) => ({
                      imgSrcLink: swiperFractionImage.imgSrcLink,
                      imgAltLink: swiperFractionImage.imgAltLink,
                    })
                  )}
                />
              )}

            {/* Audio Player */}
            {lesson.audioSrc && (
              <AudioPlayer audioSrc={`${baseAudioSrc}${lesson.audioSrc}`} />
            )}

            {/* Video Player */}
            {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}

            {/* Radio Exercises */}
            <Radio questions={lesson.radio} />

            {/* Checkbox Exercises */}

            {/* Dropdown Exercises */}
            <Dropdown questions={lesson.dropdown} />

            {/* Fill in the Blanks Exercises */}
            <FillInTheBlanks questions={lesson.fillInTheBlanks} />
          </div>
        ))}
      </div>
    </>
  );
};
