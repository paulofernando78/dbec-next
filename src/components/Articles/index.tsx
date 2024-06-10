import Image from "next/image";
import { StaticImageData } from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card";
import { Collapsible } from "../Collapsible/Collapsible";
import styles from "./styles.module.css";

export interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph: string;
}

export interface ArticleData {
  paragraphNumber?: string;
  enParagraphs: EnParagraph[];
  ptParagraph?: string;
  imgSrc?: StaticImageData | string;
  imgAlt?: string;
  imgSrcWidth?: string;
  imgSrcHeight?: string;
  smaller?: string;
}

interface ArticlesProps {
  titleImgSrc: StaticImageData;
  titleImgAlt: string;
  discussion: string;
  discussionAnswer: string;
  articles: ArticleData[];
  audioSrc?: string;
}

export const Articles = ({
  titleImgSrc,
  titleImgAlt,
  discussion,
  discussionAnswer,
  articles,
  audioSrc,
}: ArticlesProps) => {
  return (
    <div className="line-break">
      <Image
        src={titleImgSrc}
        alt={titleImgAlt}
        className={`img-border ${styles["image"]}`}
      />
      <Card bgColor="Black" textColor="White">
        <p>Discussion</p>
      </Card>
      <Collapsible labelBold={discussion}>
        <p>{discussionAnswer}</p>
      </Collapsible>
      <div className="sticky">
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      {articles.map((article, articleIndex) => (
        <div key={articleIndex} className="line-break">
          {article.paragraphNumber && (
            <Card bgColor="lightgray">
              <p className="bold">{article.paragraphNumber}</p>
            </Card>
          )}
          <div>
            <div className={article.imgSrc ? styles["container-paragraph-img"] : ""}>
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
              {article.imgSrc && (
                <Image
                  src={article.imgSrc}
                  alt={article.imgAlt ?? ""}
                  className="img-border "
                  style={{
                    width: article.imgSrcWidth,
                    height: article.imgSrcHeight,
                  }}
                />
              )}
            </div>
            {article.ptParagraph && (
              <div className="margin-top">
                <Collapsible labelBold="Translation">
                  <p className="portuguese">{article.ptParagraph}</p>
                </Collapsible>
              </div>
            )}
          </div>
          {article.smaller && (
            <p className="p-size-smaller">{article.smaller}</p>
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
