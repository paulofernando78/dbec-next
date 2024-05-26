import Image from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
// import { ArticlesProps } from "@/types/articles";

import { StaticImageData } from "next/image";

interface ArticlesProps {
  imgSrcBefore?: StaticImageData | string;
  altNameBefore?: string;
  enText?: string;
  ptText?: string;
  imgSrcAfter?: StaticImageData | string;
  altNameAfter?: string;
  smaller?: string

}

interface Articles {
  articles: ArticlesProps[]
  audioSrc?: string
}

export const Articles = ({ articles, audioSrc }: Articles) => {
  return (
    <div className="line-break">
      <div style={{ position: "sticky", top: "0", paddingTop: "10px" }}>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      {articles.map((articles, index) => (
        <div key={index} className="line-break">
          {articles.imgSrcBefore && (
            <Image
              src={articles.imgSrcBefore}
              alt={articles.altNameBefore??""}
              width={350}
              height={200}
            />
          )}
          <div>
            <p>{articles.enText}</p>
            <p className="portuguese">{articles.ptText}</p>
            <p className="smaller">{articles.smaller}</p>
          </div>
          {articles.imgSrcAfter && (
            <Image
              src={articles.imgSrcAfter}
              alt={articles.altNameAfter??""}
              width={100}
              height={100}
            />
          )}
        </div>
      ))}
    </div>
  );
};
