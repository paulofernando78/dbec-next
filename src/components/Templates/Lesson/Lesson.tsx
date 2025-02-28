"use client";

import React from "react";
import Image from "next/image";

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
  DictionarySearch,
} from "@/components/index";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import Iframe from "@/components/Atoms/Iframe/Iframe";
import { Content } from "@/components/Atoms/Content/Content";
import { Exercises } from "@/components/Organisms/Exercises/Exercises";
import { SubRibbon } from "@/components/Molecules/SubRibbon";

// CSS
import styles from "./styles.module.css";

// Typescript
import { LessonTemplateProps } from "@/components/Templates/Lesson/Lesson.types";
import { Exercise } from "@/components/Templates/Lesson/Lesson.types";

const baseImgScr = "/assets/img";

export const Lesson = ({
  lessonData,
  isUnderConstruction,
}: LessonTemplateProps) => {
  if (!lessonData) {
    return null;
  }

  return (
    <div className={styles["container"]}>
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

        {/* UnderContruction */}
        {isUnderConstruction && <UnderConstruction />}

        {/* Dictionary */}
        {/* position-sticky has z-index: 2 */}
        <div className="position-sticky" style={{ zIndex: "3" }}>
          <DictionarySearch />
        </div>

        {/* Content */}
        {lessonData.contents && <Content contents={lessonData.contents} />}

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

            {/* Image */}
            {lesson.imgSrc && (
              <div className={styles["img-container"]}>
                <Image
                  src={`${baseImgScr}${lesson.imgSrc}`}
                  alt={lesson.imgAlt || "..."}
                  layout="responsive"
                  width={16}
                  height={9}
                  className="img-customization"
                />
              </div>
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
              <div className="position-sticky" style={{ top: "52px" }}>
                <AudioPlayer audioSrc={lesson.audioSrc} />
              </div>
            )}

            {/* Video Player */}
            {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}

            {/* Iframe */}
            {lesson.iframeSrc && (
              <Iframe src={lesson.iframeSrc} height={lesson.iframeHeight} />
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
    </div>
  );
};

// import React, { ReactNode } from 'react';

// interface LessonProps {
//   title?: string;
//   children?: ReactNode;
// }

// export const Lesson: React.FC<LessonProps> = ({ title, children }) => {
//   return (
//     <div className="lesson-container">
//       {title && <h1 className="lesson-title">{title}</h1>}
//       <div className="lesson-content">
//         {children}
//       </div>
//     </div>
//   );
// };
