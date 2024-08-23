import { WarmUp, WarmUpData } from "@/components/Celta/WarmUp";
import {
  DiscussionQuestionData,
  Introduction,
} from "@/components/Celta/Introduction";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import {
  Presentation,
  PresentationData,
} from "@/components/Celta/VocabularyGrammar/Presentation";
import { MeaningData } from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
import { PronunciationData } from "@/components/Celta/VocabularyGrammar/Presentation/Pronunciation";
import { FormUseData } from "@/components/Celta/VocabularyGrammar/Presentation/FormUse";

interface VocabularyGrammarProps {
  warmUps: WarmUpData[];
  swiperFraction: SwiperFractionData[];
  discussedQuestions: DiscussionQuestionData[];
  presentations: PresentationData[];
  meanings: MeaningData[];
  pronunciations: PronunciationData[]
  formUses: FormUseData[]
}

export const VocabularyGrammar = ({
  warmUps,
  swiperFraction,
  discussedQuestions,
  presentations,
  meanings,
  pronunciations,
  formUses
}: VocabularyGrammarProps) => {
  return (
    <div className="line-break">
      <WarmUp warmUps={warmUps} />
      <Introduction
        swiperFraction={swiperFraction}
        discussionQuestions={discussedQuestions}
      />
      <Presentation
      presentations={presentations} meanings={meanings}
      pronunciations={pronunciations}
      formUses={formUses}/>
    </div>
  );
};
