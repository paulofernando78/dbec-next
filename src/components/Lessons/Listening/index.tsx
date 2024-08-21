import {
  Introduction,
  DiscussionQuestion,
} from "@/components/Celta/Introduction";
import { SwiperFractionData } from "@/components/Swiper/Fraction";

import {
  Question,
} from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { FlipCard } from "@/components/Cards/Flip";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { ListeningForGist, Paragraph } from "@/components/Celta/Listening/ListeningForGist";
import { ListeningForScan, ScanQuestion } from "@/components/Celta/Listening/ListeningForScan";
import { FollowUp, FollowupQuestion } from "@/components/Celta/Listening/FollowUp";

export interface GistQuestion {
  question: string;
  answer: string;
}

interface ListeningProps {
  swiperFraction: SwiperFractionData[];
  discussionQuestions: DiscussionQuestion[];
  flipCards: FlipCard[];
  preVocabularies: PreVocabulary[];
  fillInTheBlanks: Question[];
  audioSrc: string;
  paragraphs: Paragraph[];
  gistAnswer: string
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
  gistAnswer,
  scanQuestions,
  followupQuestions,
}: ListeningProps) => {
  return (
    <div className="line-break">
      <Introduction
        swiperFraction={swiperFraction}
        discussionQuestions={discussionQuestions}
      />
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
      <ListeningForScan
      scanQuestions={scanQuestions}
      />
      <FollowUp
      followupQuestions={followupQuestions}
      />
    </div>
  );
};
