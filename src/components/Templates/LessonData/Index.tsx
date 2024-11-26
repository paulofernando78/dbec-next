"use client";

// Components
import {
  Whiteboard,
  Ribbon,
  Paragraph,
  AudioPlayer,
  SwiperFraction,
  VideoPlayer,
  Radio,
  Dropdown,
  FillInTheBlanks,
} from "@/components";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";

const baseAudioSrc = "/assets/audio/";

export const LessonTemplate = ({ lessonData }: LessonTemplateProps) => {
  if (!lessonData) {
    return null;
  }
  return (
    <>
      {lessonData.whiteboard && (
        <Whiteboard
          title={lessonData.whiteboard.title}
          subtitle={lessonData.whiteboard.subtitle}
          descriptions={lessonData.whiteboard.descriptions}
        />
      )}
      <div className="line-break">
        {lessonData.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="line-break">
            {/* Title */}
            {lesson.title && (
              <Ribbon
                label={lesson.title}
                bgColor={lesson.bgColor || "defaultBgColor"}
                textColor={lesson.textColor || "defaultTextColor"}
              />
            )}

            {/* Paragraphs + Word */}
            {lesson.paragraphSections && (
              <Paragraph paragraphSections={lesson.paragraphSections} />
            )}

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
            {lesson.radio && <Radio questions={lesson.radio} />}

            {/* Checkbox Exercises */}

            {/* Dropdown Exercises */}
            {/* <Dropdown questions={lesson.dropdown} /> */}

            {/* Fill in the Blanks Exercises */}
            {/* <FillInTheBlanks questions={lesson.fillInTheBlanks} /> */}
          </div>
        ))}
      </div>
    </>
  );
};
