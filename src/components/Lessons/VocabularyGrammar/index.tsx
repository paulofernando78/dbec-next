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
import {
  Practice,
  PracticeData,
} from "@/components/Celta/VocabularyGrammar/Practice";
import { HCWPData } from "@/components/Celta/VocabularyGrammar/Practice/HCWP";
import { LCWPData } from "@/components/Celta/VocabularyGrammar/Practice/LCWP";
import { HCOPData } from "@/components/Celta/VocabularyGrammar/Practice/HCOP";
import { LCOPData } from "@/components/Celta/VocabularyGrammar/Practice/LCOP";
import {
  Production,
  ProductionData,
} from "@/components/Celta/VocabularyGrammar/Production";
import { WrapUp } from "@/components/Celta/WrapUp";
import { MeaningCCQData } from "@/components/Celta/VocabularyGrammar/Presentation/MeaningCCQ";
import { FormUseCCQData } from "@/components/Celta/VocabularyGrammar/Presentation/FormUseCCQ";
import { ICQData } from "@/components/Celta/VocabularyGrammar/Practice/ICQ";

interface VocabularyGrammarProps {
  warmUps: WarmUpData[];
  swiperFraction: SwiperFractionData[];
  discussedQuestions: DiscussionQuestionData[];
  presentations: PresentationData[];
  meanings: MeaningData[];
  meaningCCQS: MeaningCCQData[]
  pronunciations: PronunciationData[];
  formUses: FormUseData[];
  formUseCCQS: FormUseCCQData[]
  practices: PracticeData[];
  hcwps: HCWPData[];
  icqHCWP: ICQData[]
  lcwps: LCWPData[];
  icqLCWP: ICQData[]
  hcops: HCOPData[];
  icqHCOP: ICQData[]
  lcops: LCOPData[];
  icqLCOP: ICQData[]
  productions: ProductionData[];
}

export const VocabularyGrammar = ({
  warmUps,
  swiperFraction,
  discussedQuestions,
  presentations,
  meanings,
  pronunciations,
  meaningCCQS,
  formUses,
  formUseCCQS,
  practices,
  hcwps,
  icqHCWP,
  lcwps,
  icqLCWP,
  hcops,
  icqHCOP,
  lcops,
  icqLCOP,
  productions,
}: VocabularyGrammarProps) => {
  return (
    <div className="line-break">
      <WarmUp warmUps={warmUps} />
      <Introduction
        swiperFraction={swiperFraction}
        discussionQuestions={discussedQuestions}
      />
      <Presentation
        presentations={presentations}
        meanings={meanings}
        pronunciations={pronunciations}
        formUses={formUses}
        meaningCCQS={meaningCCQS}
        formUseCCQS={formUseCCQS}
      />
      <Practice
        practices={practices}
        hcwps={hcwps}
        icqHCWP={icqHCWP}
        lcwps={lcwps}
        icqLCWP={icqLCWP}
        hcops={hcops}
        icqHCOP={icqHCOP}
        lcops={lcops}
        icqLCOP={icqLCOP}
      />
      <Production productions={productions} />
      <WrapUp />
    </div>
  );
};
