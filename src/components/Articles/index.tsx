import Image from "next/image";
import { StaticImageData } from "next/image";
import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card";
import { Collapsible } from "../Collapsible/Collapsible";
import styles from "./styles.module.css";

interface FollowupQuestion {
  question?: string;
}

interface ScanQuestion {
  question?: string;
}

interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph?: string;
}

interface Vocabulary {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: any;
}

interface DiscussionQuestion {
  question?: string;
}

export interface ArticleData {
  discussion?: boolean;
  discussionQuestion?: string;
  discussionQuestions?: DiscussionQuestion[];
  preVocabulary?: boolean;
  vocabularies?: Vocabulary[];
  listeningGist?: boolean;
  audioSrc?: string;
  paragraphNumber?: string;
  enParagraphs?: EnParagraph[];
  imgSrc?: StaticImageData | string;
  imgAlt?: string;
  imgSrcWidth?: string;
  imgSrcHeight?: string;
  ptParagraph?: string;
  listeningScan?: boolean;
  scanQuestion?: boolean;
  scanQuestions?: ScanQuestion[];
  followupQuestion?: boolean;
  followupQuestions?: FollowupQuestion[];
}

interface ArticlesProps {
  titleImgSrc: StaticImageData;
  titleImgAlt: string;
  articles: ArticleData[];
}

const baseAudioSrc = "/assets/audio/extras/listening/articles";

export const Articles = ({
  titleImgSrc,
  titleImgAlt,
  articles
}: ArticlesProps) => {
  return (
    <div className="line-break">
      <Image
        src={titleImgSrc}
        alt={titleImgAlt}
        className={`img-border ${styles["image"]}`}
      />

      {/* ARTICLES */}
      {articles.map((article, articleIndex) => (
        <div key={articleIndex} className="line-break">
          {/* COLOCAR CAROSSEL */}
          {article.discussion && (
            <Card bgColor="Black" textColor="White">
              <div className="flex-8px-start-space-between">
                <p className="bold">Discussion</p>
                <p className="p-size-smaller">'5</p>
              </div>
            </Card>
          )}
          {article.discussionQuestion && (
            <p className="bold">{article.discussionQuestion}</p>
          )}
          <div>
            {article.discussionQuestions?.map(
              (discussionQuestion, discussionQuestionIndex) => (
                <p key={discussionQuestionIndex}>
                  <span className="bold">•</span> {discussionQuestion.question}
                </p>
              )
            )}
          </div>
          {article.preVocabulary && (
            <Card bgColor="Black" textColor="White">
              <div className="flex-8px-start-space-between">
                <p className="bold">Pre-Vocabulary</p>
                <p className="p-size-smaller">'10</p>
              </div>
            </Card>
          )}
          <div className="flex-8px-center-wrap">
            {article.vocabularies?.map((vocabulary, indexVocabulary) => (
              <span key={indexVocabulary}>
                {vocabulary.component(vocabulary.componentProps)}
              </span>
            ))}
          </div>
          {article.listeningGist && (
            <div className="line-break">
              <Card bgColor="Black" textColor="White">
                <div className="flex-8px-start-space-between">
                  <p className="bold">Listening (Gist)</p>
                  <p className="p-size-smaller">10'</p>
                </div>
              </Card>
              <p>
                What's the article talking about? Are your predictions correct?
              </p>
            </div>
          )}
          {article.audioSrc && (
            <div className="sticky">
              <AudioPlayer audioSrc={`${baseAudioSrc}${article.audioSrc}`} />
            </div>
          )}
          {article.paragraphNumber && (
            <Card bgColor="lightgray">
              <p className="bold">{article.paragraphNumber}</p>
            </Card>
          )}
          <div>
            <div>
              <div>
                {article.enParagraphs?.map((enParagraph, enParagraphIndex) => (
                  <span key={enParagraphIndex}>
                    {enParagraph.component && (
                      <span className="margin-right">
                        {enParagraph.component(enParagraph.componentProps)}
                      </span>
                    )}
                    {enParagraph.enParagraph && (
                      <span className="p-font inline margin-right">
                        {enParagraph.enParagraph}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            {article.ptParagraph && (
              <div className="margin-top">
                <Collapsible labelBold="Translation">
                  <p className="portuguese">{article.ptParagraph}</p>
                </Collapsible>
              </div>
            )}
          </div>
          <div className="line-break">
            {article.listeningScan && (
              <Card bgColor="Black" textColor="White">
                <div className="flex-8px-start-space-between">
                  <p className="bold">Listening (Scan)</p>
                  <p className="p-size-smaller">'10</p>
                </div>
              </Card>
            )}
          </div>
          {article.scanQuestion && (
            <p className="bold">
              Grab a piece of paper. Check out the quesitons below. Listen again
              and take notes.
            </p>
          )}
          <div>
            {article.scanQuestions?.map((scanQuestion, scanQuestionIndex) => (
              <p key={scanQuestionIndex}>
                <span className="bold">•</span> {scanQuestion.question}
              </p>
            ))}
          </div>
          {article.followupQuestion && (
            <Card bgColor="Black" textColor="White">
              <div className="flex-8px-start-space-between">
                <p className="bold">Follow-up question</p>
                <p className="p-size-smaller">'10</p>
              </div>
            </Card>
          )}
          <div>
            {article.followupQuestions?.map(
              (followupQuestion, followQuestionIndex) => (
                <p key={followQuestionIndex}>
                  <b>•</b> {followupQuestion.question}
                </p>
              )
            )}
          </div>
        </div>
      ))}

      <div></div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Exercises</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
    </div>
  );
};
