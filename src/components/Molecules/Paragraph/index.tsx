"use client";

// Components
import Image from "next/image";
import { DictionaryCard } from "@/components";

// CSS
import styles from "./styles.module.css";

// Typescript
import { ParagraphSectionsProps } from "./types";

const baseImgScr = "/assets/img";

export const Paragraph = ({ paragraphSections }: ParagraphSectionsProps) => {
  return (
    <>
      {paragraphSections?.map((paragraphSection, paragraphSectionIndex) => {
        // Determine if there is an image
        const hasImage = Boolean(paragraphSection.imgSrc);

        // Apply the appropriate CSS class based on the image position
        const containerClass = hasImage
          ? paragraphSection.imgPosition === "left"
            ? styles["img-left"]
            : styles["img-right"]
          : styles["no-image"];

        return (
          <div
            key={paragraphSectionIndex}
            className={containerClass}
          >
            {hasImage && paragraphSection.imgPosition === "left" && (
              <Image
                src={`${baseImgScr}${paragraphSection.imgSrc}`}
                alt={paragraphSection.imgAlt || ""}
                width={500}
                height={500}
                className={`img-customization ${styles["img"]}`}
              />
            )}
            <div>
              {paragraphSection.paragraphs?.map((paragraph, paragraphIndex) => (
                <div key={paragraphIndex} className={`display-inline ${paragraph.addBreakLine ? "display-block" : ""}`}
                >
                  {paragraph.word && (
                    <DictionaryCard
                      keyword={paragraph.keyword}
                      word={paragraph.word}
                      audioSrc={paragraph.wordAudioSrc}
                    />
                  )}
                  {" "}
                  <p
                    className="display-inline"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.enText,
                    }}
                  ></p>{" "}
                  {paragraph.ptText && (
                    <p className="display-inline portuguese">
                      {paragraph.ptText}
                    </p>
                  )}
                  
                </div>
              ))}
            </div>
            {hasImage && paragraphSection.imgPosition === "right" && (
              <Image
                src={`${baseImgScr}${paragraphSection.imgSrc}`}
                alt={paragraphSection.imgAlt || ""}
                width={500}
                height={500}
                className={`img-customization ${styles["img"]}`}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
