"use client";
import { VocabularyGrammar } from "@/components/Lessons/VocabularyGrammar";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { WarmUpData } from "@/components/Celta/WarmUp";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestionData } from "@/components/Celta/Introduction";
import { PresentationData } from "@/components/Celta/VocabularyGrammar/Presentation";
import { MeaningData } from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
import { PronunciationData } from "@/components/Celta/VocabularyGrammar/Presentation/Pronunciation";
import { FormUseData } from "@/components/Celta/VocabularyGrammar/Presentation/FormUse";
import { PracticeData } from "@/components/Celta/VocabularyGrammar/Practice";
import { HCWPData } from "@/components/Celta/VocabularyGrammar/Practice/HCWP";
import { LCWPData } from "@/components/Celta/VocabularyGrammar/Practice/LCWP";
import { HCOPData } from "@/components/Celta/VocabularyGrammar/Practice/HCOP";
import { LCOPData } from "@/components/Celta/VocabularyGrammar/Practice/LCOP";
import { ProductionData } from "@/components/Celta/VocabularyGrammar/Production";
import { CCQData } from "@/components/Celta/VocabularyGrammar/Presentation/CCQ";
import { ICQData } from "@/components/Celta/VocabularyGrammar/Practice/ICQ";

import { cat1 } from "@/img/index";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const warmUps: WarmUpData[] = [
  {
    question: "aaa",
  },
  {
    question: "bbb",
  },
];

const introductions = [
  {
    prompt: "aaa",
  },
  {
    prompt: "bbb",
  }
]

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
];

const discussedQuestions: DiscussionQuestionData[] = [
  {
    questions: [
      {
        question: "1. ...",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "/.../....mp3",
          label: "...",
        },
        question: "...",
      },
    ],
  },
  {
    questions: [
      {
        question: "2.",
      },
    ],
  },
];

const meanings: MeaningData[] = [
  {
    text: "...",
  },
];

const meaningCCQS: CCQData[] = [
  {
    checking: "aaa",
  },
];

const pronunciations: PronunciationData[] = [
  {
    text: "...",
  },
];

const formUses: FormUseData[] = [
  {
    text: "...",
  },
];

const formUseCCQS: CCQData[] = [ 
  {
    checking: "bbb",
  },
];

const practices: PracticeData[] = [
  {
    text: "...",
  },
];

const hcwps: HCWPData[] = [
  {
    text: "...",
  },
];

const icqHCWP: ICQData[] = [
  { instruction: "aaa" },
  { instruction: "..." },
  { instruction: "..." },
];

const lcwps: LCWPData[] = [
  {
    text: "...",
  },
];

const icqLCWP: ICQData[] = [
  { instruction: "bbb" },
  { instruction: "..." },
  { instruction: "..." },
];

const hcops: HCOPData[] = [
  {
    text: "...",
  },
];

const icqHCOP: ICQData[] = [
  { instruction: "ccc" },
  { instruction: "..." },
  { instruction: "..." },
];

const lcops: LCOPData[] = [
  {
    text: "...",
  },
];

const icqLCOP: ICQData[] = [
  { instruction: "ddd" },
  { instruction: "..." },
  { instruction: "..." },
];

const productions: ProductionData[] = [
  {
    text: "...",
  },
];

export default function MockVocabularyGrammar() {
  return (
    <>
      <Whiteboard
        title="Vocabulary / Grammar"
        subtitle="..."
        descriptions={["..."]}
      />
      <div className="line-break">
        <VocabularyGrammar
          warmUps={warmUps}
          introductions={introductions}
          swiperFraction={swiperFraction}
          discussedQuestions={discussedQuestions}
          meanings={meanings}
          meaningAudioSrc=""
          meaningCCQS={meaningCCQS}
          pronunciations={pronunciations}
          formUses={formUses}
          formUseCCQS={formUseCCQS}
          practices={practices}
          hcwps={hcwps}
          icqHCWP={icqHCWP}
          lcwps={lcwps}
          icqLCWP={icqLCWP}
          hcops={hcops}
          icqHCOP={icqHCOP}
          lcops={lcops}
          icqLCOP={icqLCOP}
          productions={productions}
        />
        {/* <div className="line-break">

          <Presentation>
            <div className="celta-line-break">
              <Meaning>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </Meaning>
              <Pronunciation>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </Pronunciation>
              <FormUse>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </FormUse>
            </div>
          </Presentation>
          <Practice>
            <div className="celta-line-break">
              <HCWP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it individually.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </HCWP>
              <LCWP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it individually.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </LCWP>
              <HCOP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it in pairs.</p>
                    <p>• Listen to a dialogue.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </HCOP>
              <LCOP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it in pairs.</p>
                    <p>• Listen to a dialogue.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </LCOP>
            </div>
          </Practice>
          <Production>
            <div className="line-break">
              <ICQ>
                <p>• Mingle (walk around and talk to one another).</p>
                <p>• Do it in groups of...</p>
              </ICQ>
              <p>...</p>
            </div>
          </Production>
          <WrapUp />
        </div> */}
      </div>
    </>
  );
}
