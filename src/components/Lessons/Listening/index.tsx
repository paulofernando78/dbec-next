import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";

import { Card } from "../../Cards/Card";
import { AudioPlayer } from "../../Audioplayer";
import { Collapsible } from "../../Collapsibles/Collapsible/Collapsible";
import {
  FillInTheBlank,
  Question,
} from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { FlipCard } from "@/components/Cards/Flip";

export interface FollowupQuestion {
  enQuestion?: string;
  ptQuestion?: string;
}

export interface ScanQuestion {
  question: string;
  answer: string;
}

interface EnParagraph {
  component?: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps?: any;
  enParagraph?: string;
}

export interface Paragraph {
  paragraphNumber?: string;
  enParagraphs?: EnParagraph[];
  ptParagraph?: string;
}

export interface GistQuestion {
  question: string;
  answer: string;
}

export interface PreVocabulary {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: any;
}

export interface DiscussionQuestion {
  questions: {
    question?: string;
    component?: (props: any) => JSX.Element;
    componentProps?: any;
  }[];
}

interface ListeningProps {
  discussion: string;
  swiperFraction: SwiperFractionData[];
  discussionQuestions: DiscussionQuestion[];
  flipCards: FlipCard[];
  preVocabularies: PreVocabulary[];
  fillInTheBlanks: Question[];
  gistQuestions: GistQuestion[];
  audioSrc: string;
  paragraphs: Paragraph[];
  scanQuestions: ScanQuestion[];
  followupQuestions: FollowupQuestion[];
}

const baseAudioSrc = "/assets/audio/extras/listening/articles";

export const Listening = ({
  discussion,
  discussionQuestions,
  swiperFraction,
  flipCards,
  preVocabularies,
  fillInTheBlanks = [],
  gistQuestions,
  audioSrc,
  paragraphs,
  scanQuestions,
  followupQuestions,
}: ListeningProps) => {
  return (
    <div className="line-break">
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Discussion</p>
          <p className="p-size-smaller">'5</p>
        </div>
      </Card>
      <p className="bold">{discussion}</p>

      {/* Swiper */}
      <SwiperFraction images={swiperFraction} />

      {/* dicussionQuestions */}
      <div>
        {discussionQuestions.map(
          (discussionQuestion, discussionQuestionIndex) => (
            <div key={discussionQuestionIndex}>
              {discussionQuestion.questions.map((question, questionIndex) => (
                <span key={questionIndex}>
                  {/* question.component */}
                  {question.component && (
                    <span className="margin-right">
                      {question.component(question.componentProps)}
                    </span>
                  )}
                  {/* question */}
                  {question.question && (
                    <div key={discussionQuestionIndex}>
                      <span className="p-font display-inline margin-right">
                        {`${discussionQuestionIndex + 1}. ${question.question}`}
                      </span>
                    </div>
                  )}
                </span>
              ))}
            </div>
          )
        )}
      </div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Pre-Vocabulary</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
      <p className="bold">
        Let's flip the cards (randomly) and match the pictures with the
        vocabulary below.
      </p>

      {/* flipCards */}
      <FlipCard flipCards={flipCards} />

      {/* preVocabularies */}
      <div className="flex-8px-center-wrap">
        {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
          <span key={indexPreVocabulary}>
            {preVocabulary.component(preVocabulary.componentProps)}
          </span>
        ))}
      </div>

      {/* fillInTheBlanks */}
      <p className="bold">Now fill in the blanks with the right vocabulary.</p>
      <FillInTheBlank questions={fillInTheBlanks} />
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Listening (Gist)</p>
          <p className="p-size-smaller">10'</p>
        </div>
      </Card>

      {/* gistQuestions*/}
      <div>
        <p className="margin-bottom">
          After listening, discuss the question with your partner.
        </p>
        {gistQuestions.map((gistQuestion, gistQuestionIndex) => (
          <span key={gistQuestionIndex} className="p-font">
            {gistQuestion.question}
            <Collapsible labelBold="Answer">
              <p>{gistQuestion.answer}</p>
            </Collapsible>
          </span>
        ))}
      </div>
      <div className="audio-position-sticky">
        <AudioPlayer audioSrc={audioSrc} />
      </div>

      {/* Paragraphs */}
      {paragraphs.map((paragraph, paragraphIndex) => (
        <div key={paragraphIndex} className="line-break">
          <Card bgColor="lightgray">
            <p className="bold">Paragraph {`${paragraphIndex + 1}`}</p>
          </Card>

          <div>
            <div>
              <div>
                {/* enParagraphs */}
                {paragraph.enParagraphs?.map(
                  (enParagraph, enParagraphIndex) => (
                    <span key={enParagraphIndex}>
                      {/* enParagraph.component */}
                      {enParagraph.component && (
                        <span className="margin-right">
                          {enParagraph.component(enParagraph.componentProps)}
                        </span>
                      )}
                      {/* enParagraph */}
                      {enParagraph.enParagraph && (
                        <span className="p-font display-inline margin-right">
                          {enParagraph.enParagraph}
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>
            </div>
            {/* ptParagraph */}
            {paragraph.ptParagraph && (
              <span className="margin-top">
                <Collapsible labelBold="Translation">
                  <span className="portuguese">{paragraph.ptParagraph}</span>
                </Collapsible>
              </span>
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
        Check out the questons below. Listen again and take notes.
      </p>

      {/* scanQuestions */}
      <div>
        {scanQuestions.map((scanQuestion, scanQuestionIndex) => (
          <div key={scanQuestionIndex} className="margin-bottom">
            <span className="p-font bold display-inline">
              {scanQuestionIndex + 1}
            </span>{" "}
            <span className="display-inline p-font">
              {scanQuestion.question}
            </span>
            <Collapsible labelBold="Answer">
              <p>{scanQuestion.answer}</p>
            </Collapsible>
          </div>
        ))}
      </div>
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Follow-up questions</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card>
      
      {/* followupQuestions */}
      <div>
        {followupQuestions.map((followupQuestion, followQuestionIndex) => (
          <p key={followQuestionIndex}>
            {followQuestionIndex + 1}. {followupQuestion.enQuestion}{" "}
            <span className="portuguese">{followupQuestion.ptQuestion}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
