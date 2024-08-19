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
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { Introduction } from "@/components/Celta/Introduction";
import { ListeningForGist } from "@/components/Celta/Listening/ListeningForGist";
import { Paragraph } from "@/components/Celta/Listening/Paragraph";

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
  discussionQuestions,
  swiperFraction,
  flipCards,
  preVocabularies,
  fillInTheBlanks = [],
  audioSrc,
  paragraphs,
  scanQuestions,
  followupQuestions,
}: ListeningProps) => {
  return (
    <div className="line-break">
      <Introduction>
        {/* Swiper */}
        <SwiperFraction images={swiperFraction} />

        {/* dicussionQuestions */}
        <div className="margin-top">
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
                          {`${discussionQuestionIndex + 1}. ${
                            question.question
                          }`}
                        </span>
                      </div>
                    )}
                  </span>
                ))}
              </div>
            )
          )}
        </div>
      </Introduction>
      <PreVocabulary>
        <div className="line-break">
          {/* flipCards */}
          <div className="">
            <FlipCard flipCards={flipCards} />
          </div>

          {/* preVocabulary */}
          <div className="flex-8px-center-wrap">
            {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
              <span key={indexPreVocabulary}>
                {preVocabulary.component(preVocabulary.componentProps)}
              </span>
            ))}
          </div>

          {/* fillInTheBlanks */}
          <div className="line-break">
            <p className="bold">
              Now fill in the blanks with the right vocabulary.
            </p>
            <FillInTheBlank questions={fillInTheBlanks} />
          </div>
        </div>
      </PreVocabulary>
      <ListeningForGist>
        {/* AudioPlayer */}
        <div className="audio-position-sticky margin-bottom">
          <AudioPlayer audioSrc={audioSrc} />
        </div>

        {/* Paragraphs */}
        <div className="line-break">
          {paragraphs.map((paragraph, paragraphIndex) => (
            <div
              key={paragraphIndex}
              className="line-break"
              style={{ marginBottom: ".5rem" }}
            >
              <Paragraph number={paragraphIndex + 1}>
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
                                {enParagraph.component(
                                  enParagraph.componentProps
                                )}
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
                        <span className="portuguese">
                          {paragraph.ptParagraph}
                        </span>
                      </Collapsible>
                    </span>
                  )}
                </div>
              </Paragraph>
            </div>
          ))}
        </div>
      </ListeningForGist>

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
