"use client";

import DOMPurify from "dompurify";

// Components
import { DictionaryCard } from "@/components";

// Typescript
import { ParagraphSectionsProps } from "./.types";

export const Paragraph = ({ paragraphSections }: ParagraphSectionsProps) => {
  return (
    <>
      {paragraphSections?.map((paragraphSection, paragraphSectionIndex) => (
        <div key={paragraphSectionIndex} className={paragraphSection.addBreakLine ? "margin-bottom" : ""}>
          {paragraphSection.paragraphs?.map((paragraph, paragraphIndex) => (
            <div key={paragraphIndex} className="display-inline">
              {paragraph.dictionary && (
                <DictionaryCard
                  keyword={paragraph.keyword}
                  label={paragraph.dictionary}
                  audioSrc={paragraph.dictionaryAudioSrc}
                />
              )}{" "}
              <p
                className="display-inline"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(paragraph.text),
                }}
              ></p>{" "}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
