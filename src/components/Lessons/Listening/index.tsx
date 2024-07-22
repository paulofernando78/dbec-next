import { Card } from "../../Cards/Card";
import { AudioPlayer } from "../../Audioplayer";
import { Collapsible } from "../../Collapsible/Collapsible";
import { FillInTheBlanks } from "@/components/ExerciseTemplates/FillInTheBlanks/FillInTheBlanks";

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

export interface FillInTheBlank {
  questions: {
    options: boolean;
    width: string;
    beforeBlank: string;
    correctAnswer: string;
    afterBlank: string;
    lineBreakAfter: boolean;
  }[];
}

export interface PreVocabulary {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: any;
}

export interface DiscussionQuestion {
  questions: {
    question: string;
    component?: (props: any) => JSX.Element;
    componentProps?: any;
  }[];
}

interface ListeningProps {
  discussion: string;
  discussionQuestions: DiscussionQuestion[];
  preVocabularies: PreVocabulary[];
  fillInTheBlanks: FillInTheBlank[];
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

      <div>
        {/* dicussionQuestions */}
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
                  <span className="p-font display-inline margin-right">
                    {question.question}
                  </span>
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
      <p className="bold">Let's match the pictures with the vocabulary.</p>
      {/* flipCards */}

      {/* preVocabularies */}
      <div className="flex-8px-center-wrap">
        {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
          <span key={indexPreVocabulary}>
            {preVocabulary.component(preVocabulary.componentProps)}
          </span>
        ))}
      </div>
      <p className="bold">Now fill in the blanks with the right vocabulary.</p>
      <FillInTheBlanks questions={fillInTheBlanks} />
      <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Listening (Gist)</p>
          <p className="p-size-smaller">10'</p>
        </div>
      </Card>

      {/* gistQuestions*/}
      <div>
        <p>After listening, discuss the question with your partner.</p>
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
          {paragraph.paragraphNumber && (
            <Card bgColor="lightgray">
              <p className="bold">{paragraph.paragraphNumber}</p>
            </Card>
          )}
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
      <div>
        {/* scanQuestions */}
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
      <div>
        {/* followupQuestions */}
        {followupQuestions.map((followupQuestion, followQuestionIndex) => (
          <p key={followQuestionIndex}>
            <span className="bold">{followQuestionIndex + 1}</span>{" "}
            {followupQuestion.enQuestion}{" "}
            <span className="portuguese">{followupQuestion.ptQuestion}</span>
          </p>
        ))}
      </div>

      {/* <Card bgColor="Black" textColor="White">
        <div className="flex-8px-start-space-between">
          <p className="bold">Exercises</p>
          <p className="p-size-smaller">'10</p>
        </div>
      </Card> */}
    </div>
  );
};
