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
