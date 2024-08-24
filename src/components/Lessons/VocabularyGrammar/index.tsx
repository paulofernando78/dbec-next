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
import { Practice, PracticeData } from "@/components/Celta/VocabularyGrammar/Practice";
import { CCQData } from "@/components/Celta/VocabularyGrammar/Presentation/CCQ";

interface VocabularyGrammarProps {
  warmUps: WarmUpData[];
  swiperFraction: SwiperFractionData[];
  discussedQuestions: DiscussionQuestionData[];
  presentations: PresentationData[];
  meanings: MeaningData[];
  pronunciations: PronunciationData[]
  formUses: FormUseData[]
  ccqs: CCQData[]
  practices: PracticeData[]
}

export const VocabularyGrammar = ({
  warmUps,
  swiperFraction,
  discussedQuestions,
  presentations,
  meanings,
  pronunciations,
  formUses,
  ccqs,
  practices,
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
      formUses={formUses}
      ccqs={ccqs}
      />
      <Practice
      practices={practices} />
    </div>
  );
};
