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
import { HCWPData } from "@/components/Celta/VocabularyGrammar/Practice/HCWP";
import { LCWPData } from "@/components/Celta/VocabularyGrammar/Practice/LCWP";

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
  hcwps: HCWPData[]
  lcwps: LCWPData[]
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
  hcwps,
  lcwps
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
      practices={practices}
      hcwps={hcwps}
      lcwps={lcwps}
      />
      
    </div>
  );
};
