import { AudioPlayer } from "../Audioplayer/Audioplayer";
import { Card } from "../Card";
import { Collapsible } from "../Collapsible/Collapsible";
import styles from "./styles.module.css";

export interface FollowupQuestion {
  question?: string;
}

export interface ScanQuestion {
  question: string;
}

interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph?: string;
}

export interface PreVocabulary {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: any;
}

export interface DiscussionQuestion {
  question?: string;
}

export interface ArticleData {
  paragraphNumber?: string;
  enParagraphs?: EnParagraph[];
  ptParagraph?: string;
}

interface ArticlesProps {
  discussion: string;
  discussionQuestions: DiscussionQuestion[];
  preVocabularies: PreVocabulary[];
  audioSrc: string;
  articles: ArticleData[];
  scanQuestions: ScanQuestion[];
  followupQuestions: FollowupQuestion[];
}

const baseAudioSrc = "/assets/audio/extras/listening/articles";

export const Articles = ({
  discussion,
  discussionQuestions,
  preVocabularies,
  audioSrc,
  articles,
  scanQuestions,
  followupQuestions,
}: ArticlesProps) => {
  return (
    <div className="line-break">
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Discussion</p>
          <p className="p-size-smaller">'5</p>
        </div>
      </Card>
      <p className="bold">{discussion}</p>

      <div>
        {discussionQuestions.map((discussionQuestion, discussionQuestionIndex) => (
          <p key={discussionQuestionIndex}>
            <b>{discussionQuestionIndex + 1}</b> {discussionQuestion.question}
          </p>
        ))}
      </div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Pre-Vocabulary</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
      <div className="flex-8px-center-wrap">
        {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
          <span key={indexPreVocabulary}>
            {preVocabulary.component(preVocabulary.componentProps)}
          </span>
        ))}
      </div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Listening (Gist)</p>
          <p className="p-size-smaller">10'</p>
        </div>
      </Card>
      <p>
        What's the main point in the article? After listening, discuss it with
        your partner.
      </p>
      <div className="sticky">
        <AudioPlayer audioSrc={`${baseAudioSrc}${audioSrc}`} />
      </div>

      {/* ARTICLES */}
      {articles.map((article, articleIndex) => (
        <div key={articleIndex} className="line-break">
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
        </div>
      ))}

      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Listening (Scan)</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
      <p className="bold">
        Grab a piece of paper. Check out the quesitons below. Listen again and
        take notes.
      </p>
      <div>
        {scanQuestions.map((scanQuestion, scanQuestionIndex) => (
          <p key={scanQuestionIndex}>
            <span className="bold">{scanQuestionIndex + 1}</span> {scanQuestion.question}
          </p>
        ))}
      </div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Follow-up question</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
      <div>
        {followupQuestions.map((followupQuestion, followQuestionIndex) => (
          <p key={followQuestionIndex}>
            <span className="bold">{followQuestionIndex + 1}</span> {followupQuestion.question}
          </p>
        ))}
      </div>

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
