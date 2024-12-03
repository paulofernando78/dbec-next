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
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { SubRibbon } from "@/components/Molecules/SubRibbon";

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
        {isUnderConstruction && <UnderConstruction />}

        {lessonData.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="line-break">
            {/* Title */}
            {lesson.title && (
              <Ribbon
                label={lesson.title}
                time={lesson.time}
                bgColor={lesson.bgColor}
                textColor={lesson.textColor}
              />
            )}

            {lesson.subtitle && (
              <SubRibbon
                sublabel={lesson.subtitle}
                subtime={lesson.subtime}
                subBgColor={lesson.subBgColor}
                subTextColor={lesson.subTextColor}
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

            {/* Flip Cards */}
            {lesson.flipcards && <FlipCard flipCards={lesson.flipcards} />}

            {/* Audio Player */}
            {lesson.audioSrc && <AudioPlayer audioSrc={lesson.audioSrc} />}

            {/* Video Player */}
            {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}

            {/* Radio Exercises */}
            {lesson.radio && <Radio questions={lesson.radio} />}

            {/* Checkbox Exercises */}

            {/* Dropdown Exercises */}
            {lesson.dropdown && <Dropdown questions={lesson.dropdown} />}

            {/* Fill in the Blanks Exercises */}
            {lesson.fillInTheBlanks && (
              <FillInTheBlanks questions={lesson.fillInTheBlanks} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
