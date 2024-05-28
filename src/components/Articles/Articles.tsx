import Image from "next/image";
import { StaticImageData } from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card/Card";
import styles from "./styles.module.css";

interface ArticlesProps {
  BeforeImgSrc?: StaticImageData | string;
  BeforeAltName?: string;
  BeforeImgSrcWidth?: string;
  BeforeImgSrcHeight?: string;
  firstComponent?: (props: any) => JSX.Element;
  firstComponentProps?: any;
  firstEnParagraph: string
  secondComponent?: (props: any) => JSX.Element;
  secondComponentProps?: any;
  secondEnParagraph: string
  enParagraph?: string;
  ptParagraph?: string;
  AfterImgSrc?: StaticImageData | string;
  AfterAltName?: string;
  AfterImgSrcWidth?: string;
  AfterImgSrcHeight?: string;
  smaller?: string;

}

interface Articles {
  articles: ArticlesProps[];
  audioSrc?: string;
}

export const Articles = ({ articles, audioSrc }: Articles) => {
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
          {article.BeforeImgSrc && (
            <Image
              src={article.BeforeImgSrc}
              alt={article.BeforeAltName ?? ""}
              className="img-border"
              style={{ width: article.BeforeImgSrcWidth, height: article.BeforeImgSrcHeight}}
            />
          )}
          <div>
            <p>
              {article.firstComponent && (
                <span style={{ marginRight: "8px" }}>
                  {article.firstComponent(article.firstComponentProps)}
                </span>
              )}
              {article.firstEnParagraph}

              {article.secondComponent && (
                <span style={{ margin: "8px" }}>
                  {article.secondComponent(article.secondComponentProps)}
                </span>
              )}
              {article.secondEnParagraph}
            </p>

            <p className="portuguese">{article.ptParagraph}</p>
            <p className="smaller">{article.smaller}</p>
          </div>
          {article.AfterImgSrc && (
            <Image
              src={article.AfterImgSrc}
              alt={article.AfterAltName ?? ""}
              className="img-border"
              style={{ width: article.AfterImgSrcWidth, height: article.AfterImgSrcHeight}}
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