"use client";

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
      {paragraphSections?.map((paragraphSection, paragraphSectionIndex) => {
        // Verifica se há imagem antes ou depois dos parágrafos
        const hasImage = Boolean(paragraphSection.img);
        const imgBefore = hasImage
          ? Object.keys(paragraphSection).indexOf("img") <
            Object.keys(paragraphSection).indexOf("paragraphs")
          : false;

        // Define a classe de estilo baseada na posição da imagem
        const containerClass = hasImage
          ? imgBefore
            ? styles["img-before"]
            : styles["img-after"]
          : styles["no-image"];

        return (
          <div
            key={paragraphSectionIndex}
            className={` ${containerClass} ${paragraphSection.addBreakLine ? "margin-bottom" : ""}`}
          >
            {imgBefore && hasImage && paragraphSection.img && (
              <CustomImage
                customImg={paragraphSection.img}
                customImgAlt={paragraphSection.imgAlt || ""}
              />
            )}
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
            {!imgBefore && hasImage && paragraphSection.img && (
              <CustomImage
                customImg={paragraphSection.img}
                customImgAlt={paragraphSection.imgAlt || ""}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
