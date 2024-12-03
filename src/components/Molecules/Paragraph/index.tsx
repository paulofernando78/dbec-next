"use client";

// import DOMPurify from "dompurify";

// Components
import { DictionaryCard } from "@/components";
import { CustomImage } from "../CustomImage";

// Typescript
import { ParagraphSectionsProps } from "./types";

// CSS
import styles from "./styles.module.css";

export const Paragraph = ({ paragraphSections }: ParagraphSectionsProps) => {
  return (
    <>
      {paragraphSections?.map((paragraphSection, paragraphSectionIndex) => (
        <div key={paragraphSectionIndex} className={styles["grid"]}>
          <div>
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
                    __html: paragraph.text,
                  }}
                ></p>{" "}
              </div>
            ))}
          </div>
          <CustomImage
            customImg={paragraphSection.img}
            customImgAlt={paragraphSection.imgAlt}
          />
        </div>
      ))}
    </>
  );
};
