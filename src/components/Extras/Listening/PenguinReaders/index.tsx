import Image from "next/image";
import { AudioPlayer } from "@/components/Audioplayer";

// CSS
import styles from "./styles.module.css";
import { Card } from "@/components/Cards/Card";

interface Paragraph {
  paragraphNumber: string;
  paragraphTime?: string;
  enParagraph: string;
  ptParagraph: string;
  paragraphImgSrc: string;
  paragraphAltText: string;
}

interface Structure {
  summaryParagraph: string;
  summaryImgSrc: string;
  summaryAltText: string;
  audioSrc: string;
  paragraphs: Paragraph[];
}

interface PenguinReadersProps {
  structures: Structure[];
}

export const PenguinReaders = ({
  structures,
}: PenguinReadersProps) => {
  return (
    <>
      {structures.map((structure, structureIndex) => (
        <div key={structureIndex} className="line-break">
          <div className={styles["container-summary-img"]}>
            <Image
              src={structure.summaryImgSrc}
              alt={structure.summaryAltText}
              className="img-border"
              layout="responsive"
              width={1}
              height={1}
            />
            <p>{structure.summaryParagraph}</p>
          </div>
          <AudioPlayer audioSrc={structure.audioSrc} />
          {structure.paragraphs.map((paragraph, paragraphIndex) => (
            <div key={paragraphIndex} className="line-break">
              <Card bgColor="lightgray">
                <span className="bold">{paragraph.paragraphNumber}</span>
                {paragraph.paragraphTime && (
                  <>
                    <br />
                    <span className="p-size-smaller">
                      {paragraph.paragraphTime}
                    </span>
                  </>
                )}
              </Card>
              <div className={styles["container-paragraph-img"]}>
                <p>
                  {paragraph.enParagraph}
                  <br />
                  <span className="portuguese">{paragraph.ptParagraph}</span>
                </p>
                <Image
                  src={paragraph.paragraphImgSrc}
                  alt={paragraph.paragraphAltText}
                  className="img-border"
                  layout="responsive"
                  width={1}
                  height={1}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
