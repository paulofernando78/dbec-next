import { WarmUp, WarmUpData } from "@/components/Celta/WarmUp";
import {
  DiscussionQuestion,
  Introduction,
} from "@/components/Celta/Introduction";
import { SwiperFractionData } from "@/components/Swiper/Fraction";

interface VocabularyGrammarProps {
  warmUps: WarmUpData[];
  swiperFraction: SwiperFractionData[];
  discussedQuestions: DiscussionQuestion[];
}

export const VocabularyGrammar = ({
  warmUps,
  swiperFraction,
  discussedQuestions,
}: VocabularyGrammarProps) => {
  return (
    <div className="line-break">
      <WarmUp warmUps={warmUps} />
      <Introduction
        swiperFraction={swiperFraction}
        discussionQuestions={discussedQuestions}
      />
    </div>
  );
};
