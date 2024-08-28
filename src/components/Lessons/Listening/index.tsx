import {
  Introduction,
  DiscussionQuestionData,
} from "@/components/Celta/Introduction";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { FillInTheBlanksData } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { FlipCardData } from "@/components/Cards/Flip";
import {
  PreVocabulary,
  PreVocabularyData,
} from "@/components/Celta/Listening/PreVocabulary";
import {
  ListeningForGist,
  ParagraphData,
} from "@/components/Celta/Listening/ListeningForGist";
import {
  ListeningForScan,
  ScanQuestionData,
} from "@/components/Celta/Listening/ListeningForScan";
import {
  FollowUp,
  FollowupQuestionData,
} from "@/components/Celta/Listening/FollowUp";

export interface GistQuestionData {
  question: string;
  answer: string;
}

interface ListeningProps {
  swiperFraction: SwiperFractionData[];
  discussionQuestions: DiscussionQuestionData[];
  flipCards: FlipCardData[];
  preVocabularies: PreVocabularyData[];
  fillInTheBlanks: FillInTheBlanksData[];
  audioSrc: string;
  paragraphs: ParagraphData[];
  gistAnswer: string;
  scanQuestions: ScanQuestionData[];
  followupQuestions: FollowupQuestionData[];
}

const baseAudioSrc = "/assets/audio/extras/listening/articles";

export const Listening = ({
  swiperFraction,
  discussionQuestions,
  flipCards,
  preVocabularies,
  fillInTheBlanks = [],
  audioSrc,
  paragraphs,
  gistAnswer,
  scanQuestions,
  followupQuestions,
}: ListeningProps) => {
  return (
    <div className="line-break">
      <Introduction introduction={introduction} />
      <PreVocabulary
        flipCards={flipCards}
        preVocabularies={preVocabularies}
        fillInTheBlanks={fillInTheBlanks}
      />
      <ListeningForGist
        audioSrc={audioSrc}
        paragraphs={paragraphs}
        gistAnswer={gistAnswer}
      />
      <ListeningForScan scanQuestions={scanQuestions} />
      <FollowUp followupQuestions={followupQuestions} />
    </div>
  );
};
