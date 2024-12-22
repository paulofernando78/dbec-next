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
        // Verifica se há imagem antes ou depois dos parágrafos
        const hasImage = Boolean(paragraphSection.imgSrc);
        
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
            className={` ${containerClass} ${
              paragraphSection.addBreakLine ? "margin-bottom" : ""
            }`}
          >
            {imgBefore && hasImage && paragraphSection.imgSrc && (
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
                  className="display-inline white-space-pre-wrap"
                >
                  {paragraph.word && (
                    <DictionaryCard
                      keyword={paragraph.keyword}
                      word={paragraph.word}
                      audioSrc={paragraph.wordAudioSrc}
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
            {!imgBefore && hasImage && paragraphSection.imgSrc && (
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
