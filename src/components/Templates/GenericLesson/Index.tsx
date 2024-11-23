"use client";

import { Whiteboard } from "@/components/Whiteboard";
import {
  AudioPlayer,
  DictionaryCard,
  SwiperFraction,
  VideoPlayer,
} from "@/components";
import { Ribbon } from "@/components/Ribbons/Ribbon";
import { GenericLessonTemplateProps } from "@/types/materials/generic-lesson";

const baseAudioSrc = "/assets/audio";

export const GenericLessonTemplate = ({
  lessonData,
}: GenericLessonTemplateProps) => {
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
            {lesson.paragraphSections?.map((paragraphSection, paragraphSectionIndex) => (
              <div key={paragraphSectionIndex}>
                {paragraphSection.paragraphs?.map((paragraph, paragraphIndex) => (
                  <div key={paragraphIndex} className="display-inline">
                    {paragraph.word && (
                      <DictionaryCard
                        keyword={paragraph.keyword}
                        label={paragraph.word}
                        audioSrc={`${baseAudioSrc}${lesson.audioSrc}`}
                      />
                    )}{" "}
                    <p className="display-inline">{paragraph.text}</p>{" "}
                  </div>
                ))}
              </div>
            ))}
            {/* SwiperFraction images */}
            {lesson.swiperImages && lesson.swiperImages.length > 0 && (
              <SwiperFraction
                images={lesson.swiperImages?.map((swiperImage) => ({
                  imgSrcLink: swiperImage.imgSrcLink,
                  imgAltLink: swiperImage.imgAltLink,
                }))}
              />
            )}

            {/* Audio Player */}
            <AudioPlayer audioSrc={`${baseAudioSrc}${lesson.audioSrc}`} />

            {lesson.videoSrc && <VideoPlayer videoSrc={lesson.videoSrc} />}
          </div>
        ))}
      </div>
    </>
  );
};
