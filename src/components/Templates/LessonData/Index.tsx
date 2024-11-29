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
  FlipCard,
} from "@/components";

import { tools } from "@/img/index";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";
import Image from "next/image";

const baseAudioSrc = "/assets/audio/";

export const LessonTemplate = ({
  lessonData,
  isUnderConstruction,
}: LessonTemplateProps) => {
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
          subDescription={lessonData.whiteboard.subDescription}
        />
      )}

      {/* Under Construction */}
      <div className="line-break">
        {isUnderConstruction && (
          <div className="flex-8px">
            <Image src={tools} alt="Tools icon" className="icon-general" />
            <p>Under Construction!</p>
          </div>
        )}

        {lessonData.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="line-break">
            {/* Title */}
            {lesson.title && (
              <Ribbon
                label={lesson.title}
                time={lesson.time}
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
                      imgSrc: swiperFractionImage.imgSrc,
                      imgAlt: swiperFractionImage.imgAlt,
                      imgSrcLink: swiperFractionImage.imgSrcLink,
                      imgAltLink: swiperFractionImage.imgAltLink,
                    })
                  )}
                />
              )}

            {lesson.flipcards &&
              lesson.flipcards.map((flipCardProps, index) => (
                <FlipCard key={index} flipCards={flipCardProps.flipCards} />
              ))}

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
            {lesson.dropdown && <Dropdown questions={lesson.dropdown} />}

            {/* Fill in the Blanks Exercises */}
            {lesson.fillInTheBlanks && <FillInTheBlanks questions={lesson.fillInTheBlanks} />}
          </div>
        ))}
      </div>
    </>
  );
};
