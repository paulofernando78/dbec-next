import Image from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";

export const Paragraph = ({ paragraphs }) => {
  return (
    <div className="line-break">
      <AudioPlayer audioSrc="/src/audio.mp3" />
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="line-break">
          {paragraph.imgSrcBefore && (
            <Image
              src={paragraph.imgSrcBefore}
              alt={paragraph.altNameBefore}
              width={350}
              height={200}
            />
          )}
          <div>
            <p dangerouslySetInnerHTML={{ __html: paragraph.enParagraph }}></p>
            <p className="portuguese">{paragraph.ptParagraph}</p>
            <p className="smaller">{paragraph.smaller}</p>
          </div>
          {paragraph.imgSrcAfter && (
            <Image
              src={paragraph.imgSrcAfter}
              alt={paragraph.altNameAfter}
              width={100}
              height={100}
            />
          )}
        </div>
      ))}
    </div>
  );
};
