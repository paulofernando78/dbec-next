"use client";

// Components
import {
  Whiteboard,
  Ribbon,
  Paragraph,
  AudioPlayer,
  SwiperFraction,
  VideoPlayer,
  Dropdown,
  FillInTheBlanks,
  FlipCard,
  Card,
  ScrollToTop,
} from "@/components";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/LessonData/types";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { SubRibbon } from "@/components/Molecules/SubRibbon";
import React from "react";
import { Exercises } from "@/components/Organisms/Exercises";
import { Exercise } from "@/components/Templates/LessonData/types";
import Iframe from "@/components/Atoms/Iframe";
import Image from "next/image";
import { Content } from "@/components/Atoms/Content";

const baseImgScr = "/assets/img";

export const LessonTemplate = ({
  lessonData,
  isUnderConstruction,
}: LessonTemplateProps) => {
  if (!lessonData) {
    return null;
  }

  return (
    <div className="line-break">
      {/* Whiteboard */}
      {lessonData.whiteboard && (
        <Whiteboard
          title={lessonData.whiteboard.title}
          subtitle={lessonData.whiteboard.subtitle}
          descriptions={lessonData.whiteboard.descriptions}
          subDescription={lessonData.whiteboard.subDescription}
          time={lessonData.whiteboard.time}
          usa={lessonData.whiteboard.usa}
          uk={lessonData.whiteboard.uk}
        />
      )}

      {isUnderConstruction && <UnderConstruction />}

      {/* Content */}
      {lessonData.contents && <Content contents={lessonData.contents}/>}

      {lessonData.lessons.map((lesson, lessonIndex) => (
        <React.Fragment key={lessonIndex}>
          

          {/* Title */}
          {lesson.title && (
            <Ribbon
              label={lesson.title}
              time={lesson.time}
              bgColor={lesson.bgColor}
              textColor={lesson.textColor}
              id={lesson.id}
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

          {lesson.imgSrc && (
            <Image
              src={`${baseImgScr}${lesson.imgSrc}`}
              alt={lesson.imgAlt || "..."}
              width={1000}
              height={1000}
              className="img-customization"
              style={{ width: lesson.imgWidth, margin: "auto" }}
            />
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
            <div className="audioplayer-sticky">
              <AudioPlayer audioSrc={lesson.audioSrc} />
            </div>
          )}

          {/* Video Player */}
          {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}

          {lesson.iframeSrc && (
            <Iframe
              src={lesson.iframeSrc}
              width={lesson.iframeWidth}
              height={lesson.iframeHeight}
            />
          )}

          {/* Exercises */}
          <Exercises
            exercises={lesson?.exercises as Exercise[]}
            id={lesson?.id!}
          />
        </React.Fragment>
      ))}
    <ScrollToTop />
    </div>
  );
};
