import { WarmUp, WarmUpData } from "@/components/Celta/WarmUp";
import {
  DiscussionQuestionData,
  Introduction,
} from "@/components/Celta/Introduction";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { Presentation, PresentationData } from "@/components/Celta/VocabularyGrammar/Presentation";

interface VocabularyGrammarProps {
  warmUps: WarmUpData[];
  swiperFraction: SwiperFractionData[];
  discussedQuestions: DiscussionQuestionData[];
  presentations: PresentationData[]
}

export const VocabularyGrammar = ({
  warmUps,
  swiperFraction,
  discussedQuestions,
  presentations,
}: VocabularyGrammarProps) => {
  return (
    <div className="line-break">
      <WarmUp warmUps={warmUps} />
      <Introduction
        swiperFraction={swiperFraction}
        discussionQuestions={discussedQuestions}
      />
      <Presentation presentations={presentations}/>
    </div>
  );
};
