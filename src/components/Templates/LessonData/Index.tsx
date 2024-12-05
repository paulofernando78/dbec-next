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
  Card,
} from "@/components";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { SubRibbon } from "@/components/Molecules/SubRibbon";
import React from "react";

export const LessonTemplate = ({
  lessonData,
  isUnderConstruction,
}: LessonTemplateProps) => {
  if (!lessonData) {
    return null;
  }

  return (
    <div className="line-break">
      {lessonData.whiteboard && (
        <Whiteboard
          title={lessonData.whiteboard.title}
          subtitle={lessonData.whiteboard.subtitle}
          descriptions={lessonData.whiteboard.descriptions}
          subDescription={lessonData.whiteboard.subDescription}
        />
      )}

      {isUnderConstruction && <UnderConstruction />}

      {lessonData.lessons.map((lesson, lessonIndex) => (
        <React.Fragment key={lessonIndex}>
          {/* Title */}
          {lesson.title && (
            <Ribbon
              label={lesson.title}
              time={lesson.time}
              bgColor={lesson.bgColor}
              textColor={lesson.textColor}
            />
          )}

          {/* Subtitle */}
          {lesson.subtitle && (
            <SubRibbon
              sublabel={lesson.subtitle}
              subtime={lesson.subtime}
              subBgColor={lesson.subBgColor}
              subTextColor={lesson.subTextColor}
            />
          )}

          {/* Cards */}
          {lesson.cards && lesson.cards.length > 0 && (
            <Card
              bgColor={lesson.bgColor}
              textColor={lesson.textColor}
              cards={lesson.cards}
            />
          )}

          {/* Paragraphs */}
          {lesson.paragraphSections && (
            <Paragraph paragraphSections={lesson.paragraphSections} />
          )}

          {/* SwiperFraction images */}
          {lesson.swiperFractionImages &&
            lesson.swiperFractionImages.length > 0 && (
              <SwiperFraction
                images={lesson.swiperFractionImages.map(
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
          {lesson.audioSrc && (
            <div className="audioplayer-sticky"><AudioPlayer audioSrc={lesson.audioSrc} /></div>
          )}

          {/* Video Player */}
          {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}

          {/* Radio Exercises */}
          {lesson.radio && <Radio questions={lesson.radio} />}

          {/* Dropdown Exercises */}
          {lesson.dropdown && <Dropdown questions={lesson.dropdown} />}

          {/* Fill in the Blanks Exercises */}
          {lesson.fillInTheBlanks && (
            <FillInTheBlanks questions={lesson.fillInTheBlanks} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
