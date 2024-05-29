import Image from "next/image";
import { StaticImageData } from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card/Card";
import styles from "./styles.module.css";

export interface ArticleData {
  beforeImgSrc?: StaticImageData | string;
  beforeAltName?: string;
  beforeImgSrcWidth?: string;
  beforeImgSrcHeight?: string;
  firstComponent?: (props: { audioSrc: string; label: string }) => JSX.Element;
  firstComponentProps?: any;
  firstEnParagraph: string;
  secondComponent?: (props: { audioSrc: string; label: string }) => JSX.Element;
  secondComponentProps?: any;
  secondEnParagraph?: string;
  thirdComponent?: (props: { audioSrc: string; label: string }) => JSX.Element;
  thirdComponentProps?: any;
  thirdEnParagraph?: string;
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
      {articles.map((article, index) => (
        <div key={index} className="line-break">
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
            <p>
              {article.firstComponent && (
                <span className="margin-right">
                  {article.firstComponent(article.firstComponentProps)}
                </span>
              )}
              <span className="margin-right">{article.firstEnParagraph}</span>

              {article.secondComponent && (
                <span className="margin-right">
                  {article.secondComponent(article.secondComponentProps)}
                </span>
              )}
              <span className="margin-right">{article.secondEnParagraph}</span>

              {article.thirdComponent && (
                <span className="margin-right">
                  {article.thirdComponent(article.thirdComponentProps)}
                </span>
              )}
              <span className="margin-right">{article.thirdEnParagraph}</span>
            </p>

            <p className="portuguese">{article.ptParagraph}</p>
            <p className="p-size-smaller">{article.smaller}</p>
          </div>
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
