"use client";

// Components
import Image from "next/image";
import { DictionaryCard } from "@/components";

// Typescript
import { ParagraphSectionsProps } from "./types";

// CSS
import styles from "./styles.module.css";

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
            className={`${containerClass} ${
              paragraphSection.addBreakLine ? "margin-bottom" : ""
            }`}
          >
            {hasImage && paragraphSection.imgPosition === "left" && (
              <Image
                src={`${baseImgScr}${paragraphSection.imgSrc}`}
                alt={paragraphSection.imgAlt || ""}
                width={500}
                height={500}
                className="img-customization"
              />
            )}
            <div>
              {paragraphSection.paragraphs?.map((paragraph, paragraphIndex) => (
                <div
                  key={paragraphIndex}
                  className="display-inline"
                >
                  {paragraph.word && (
                    <DictionaryCard
                      keyword={paragraph.keyword}
                      word={paragraph.word}
                      audioSrc={paragraph.wordAudioSrc}
                    />
                  )}
                  <p
                    className="display-inline"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.textEn,
                    }}
                  ></p>
                  {" "}
                  {paragraph.textPt && <p className="display-inline portuguese">{paragraph.textPt}</p>}
                </div>
              ))}
            </div>
            {hasImage && paragraphSection.imgPosition === "right" && (
              <Image
                src={`${baseImgScr}${paragraphSection.imgSrc}`}
                alt={paragraphSection.imgAlt || ""}
                width={500}
                height={500}
                className="img-customization"
              />
            )}
          </div>
        );
      })}
    </>
  );
};