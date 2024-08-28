import { WarmUp, WarmUpData } from "@/components/Celta/WarmUp";
import {
  Introduction,
  IntroductionData,
} from "@/components/Celta/Introduction";
import {
  Presentation,
} from "@/components/Celta/VocabularyGrammar/Presentation";
import { MeaningData } from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
import { PronunciationData } from "@/components/Celta/VocabularyGrammar/Presentation/Pronunciation";
import { FormUseData } from "@/components/Celta/VocabularyGrammar/Presentation/FormUse";
import {
  Practice,
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
import { CCQData } from "@/components/Celta/VocabularyGrammar/Presentation/CCQ";
import { ICQData } from "@/components/Celta/VocabularyGrammar/Practice/ICQ";

interface VocabularyGrammarProps {
  warmUps?: WarmUpData[];
  introductions: IntroductionData[]
  meanings: MeaningData[];
  pronunciations: PronunciationData[];
  formUses: FormUseData[];
  formUseCCQS: CCQData[];
  hcwps: HCWPData[];
  icqHCWP: ICQData[];
  lcwps: LCWPData[];
  icqLCWP: ICQData[];
  hcops: HCOPData[];
  icqHCOP: ICQData[];
  lcops: LCOPData[];
  icqLCOP: ICQData[];
  productions: ProductionData[];
}

export const VocabularyGrammar = ({
  warmUps,
  introductions,
  meanings,
  pronunciations,
  formUses,
  formUseCCQS,
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
      {warmUps && <WarmUp warmUps={warmUps} />}
      <Introduction
        introductions={introductions}
      />
      <Presentation
        meanings={meanings}
        pronunciations={pronunciations}
        formUses={formUses}
        formUseCCQS={formUseCCQS}
      />
      <Practice
        hcwps={hcwps}
        icqHCWP={icqHCWP}
        lcwps={lcwps}
        icqLCWP={icqLCWP}
        hcops={hcops}
        icqHCOP={icqHCOP}
        lcops={lcops}
        icqLCOP={icqLCOP}
      />
      <Production productions={productions}/>
      <WrapUp />
    </div>
  );
};
