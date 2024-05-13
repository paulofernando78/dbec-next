import Image from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { IParagraph } from "@/types/paragraph";


interface ParagraphProps {
  paragraphs: IParagraph[]
  audioSrc?: string
}

export const Paragraph = ({ paragraphs, audioSrc }: ParagraphProps) => {
  return (
    <div className="line-break">
      <div style={{ position: "sticky", top: "0", paddingTop: "10px" }}>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="line-break">
          {paragraph.imgSrcBefore && (
            <Image
              src={paragraph.imgSrcBefore}
              alt={paragraph.altNameBefore??""}
              width={350}
              height={200}
            />
          )}
          <div>
            <p>{paragraph.enParagraph}</p>
            <p className="portuguese">{paragraph.ptParagraph}</p>
            <p className="smaller">{paragraph.smaller}</p>
          </div>
          {paragraph.imgSrcAfter && (
            <Image
              src={paragraph.imgSrcAfter}
              alt={paragraph.altNameAfter??""}
              width={100}
              height={100}
            />
          )}
        </div>
      ))}
    </div>
  );
};
