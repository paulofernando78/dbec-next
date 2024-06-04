import Image from "next/image";
import { StaticImageData } from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card";
// import styles from "./styles.module.css";

export interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph: string;
}

export interface ArticleData {
  beforeImgSrc?: StaticImageData | string;
  beforeAltName?: string;
  beforeImgSrcWidth?: string;
  beforeImgSrcHeight?: string;
  enParagraphs: EnParagraph[];
  ptParagraph?: string;
  afterImgSrc?: StaticImageData | string;
  afterAltName?: string;
  afterImgSrcWidth?: string;
  afterImgSrcHeight?: string;
  smaller?: string;
}

interface ArticlesProps {
  articles: ArticleData[];
  audioSrc?: string;
}

export const Articles = ({ articles, audioSrc }: ArticlesProps) => {
  return (
    <div className="line-break">
      <Card bgColor="Black" textColor="White">
        <p>Discussion</p>
      </Card>
      <div style={{ position: "sticky", top: "0", paddingTop: "10px" }}>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      {articles.map((article, articleIndex) => (
        <div key={articleIndex} className="line-break">
          {article.beforeImgSrc && (
            <Image
              src={article.beforeImgSrc}
              alt={article.beforeAltName ?? ""}
              className="img-border"
              style={{
                width: article.beforeImgSrcWidth,
                height: article.beforeImgSrcHeight,
              }}
            />
          )}
          <div>
            {article.enParagraphs.map((enParagraph, enParagraphIndex) => (
              <span key={enParagraphIndex}>
                {enParagraph.component && (
                  <span className="margin-right">
                    {enParagraph.component(enParagraph.componentProps)}
                  </span>
                )}
                <span className="p-font inline margin-right">
                  {enParagraph.enParagraph}
                </span>
              </span>
            ))}
          </div>
          <p className="portuguese">{article.ptParagraph}</p>
          {article.smaller && (
            <p className="p-size-smaller">{article.smaller}</p>
          )}
          {article.afterImgSrc && (
            <Image
              src={article.afterImgSrc}
              alt={article.afterAltName ?? ""}
              className="img-border"
              style={{
                width: article.afterImgSrcWidth,
                height: article.afterImgSrcHeight,
              }}
            />
          )}
        </div>
      ))}
      <Card bgColor="Black" textColor="White">
        <p className="bold">Extra</p>
      </Card>

      <Card bgColor="Black" textColor="White">
        <p className="bold">Exercises</p>
      </Card>
    </div>
  );
};
