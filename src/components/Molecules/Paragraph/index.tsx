"use client";

// Components
import { DictionaryCard } from "@/components";

// Typescript
import { ParagraphSectionsProps } from "./.types";

const baseAudioSrc = "/assets/audio";

export const Paragraph = ({ paragraphSections }: ParagraphSectionsProps) => {
  return (
    <>
      {paragraphSections?.map((paragraphSection, paragraphSectionIndex) => (
        <div key={paragraphSectionIndex}>
          {paragraphSection.paragraphs?.map((paragraph, paragraphIndex) => (
            <div key={paragraphIndex} className="display-inline">
              {paragraph.vocabulary && (
                <DictionaryCard
                  keyword={paragraph.keyword}
                  label={paragraph.vocabulary}
                  audioSrc={`${baseAudioSrc}${paragraph.audioSrc}`}
                />
              )}{" "}
              <p className="display-inline">{paragraph.text}</p>{" "}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
