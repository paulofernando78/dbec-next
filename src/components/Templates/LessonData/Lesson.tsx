// Components
import {
    Ribbon,
    Paragraph,
    AudioPlayer,
    SwiperFraction,
    VideoPlayer,

    FlipCard,
    Card,
  } from "@/components";

  // Typescript
import { SubRibbon } from "@/components/Molecules/SubRibbon";
import React from "react";
import { Exercises } from "@/components/Organisms/Exercises";
import { Exercise } from "@/components/Templates/LessonData/types";

export const Lesson = ({ lesson }) => {
    return (
             <React.Fragment >
                {lesson}
          {/* Title */}
          {/* {lesson[0].title && (
            <Ribbon
              label={lesson[0].title}
              time={lesson[0].time}
              bgColor={lesson[0].bgColor}
              textColor={lesson[0].textColor}
            />
          )} */}

          {/* Subtitle */}
          {/* {lesson.subtitle && (
            <SubRibbon
              sublabel={lesson[1].subtitle}
              subtime={lesson[1].subtime}
              subBgColor={lesson[1].subBgColor}
              subTextColor={lesson[1].subTextColor}
            />
          )} */}

          {/* Cards */}
          {/* {lesson.cards && lesson.cards.length > 0 && (
            <Card
              bgColor={lesson.bgColor}
              textColor={lesson.textColor}
              cards={lesson.cards}
            />
          )} */}

          {/* Paragraphs */}
          {/* {lesson.paragraphSections && (
            <div>
              <Paragraph paragraphSections={lesson.paragraphSections} />
            </div>
          )} */}

          {/* SwiperFraction images */}
          {/* {lesson.swiperFractionImages &&
            lesson.swiperFractionImages.length > 0 && (
              <SwiperFraction
                images={lesson.swiperFractionImages.map(
                  (swiperFractionImage:any) => ({
                    imgSrc: swiperFractionImage.imgSrc,
                    imgAlt: swiperFractionImage.imgAlt,
                    imgSrcLink: swiperFractionImage.imgSrcLink,
                    imgAltLink: swiperFractionImage.imgAltLink,
                  })
                )}
              />
            )} */}

          {/* Flip Cards */}
          {/* {lesson.flipcards && <FlipCard flipCards={lesson.flipcards} />} */}

          {/* Audio Player */}
          {/* {lesson.audioSrc && (
            <div className="audioplayer-sticky">
              <AudioPlayer audioSrc={lesson.audioSrc} />
            </div>
          )} */}

          {/* Video Player */}
          {/* {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />} */}

          {/* Exercises */}
          {/* <Exercises exercises={lesson?.exercises as Exercise[]} id={lesson?.id!} /> */}

        </React.Fragment>
    );
}