"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { WarmUp, WarmUpData } from "@/components/Celta/WarmUp";
import { Introduction, IntroductionData } from "@/components/Celta/Introduction";
import {
  Meaning,
  MeaningData,
} from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
import {
  Pronunciation,
  PronunciationData,
} from "@/components/Celta/VocabularyGrammar/Presentation/Pronunciation";
import {
  FormUse,
  FormUseData,
} from "@/components/Celta/VocabularyGrammar/Presentation/FormUse";
import { HCWPData } from "@/components/Celta/VocabularyGrammar/Practice/HCWP";
import { LCWPData } from "@/components/Celta/VocabularyGrammar/Practice/LCWP";
import { HCOPData } from "@/components/Celta/VocabularyGrammar/Practice/HCOP";
import { LCOPData } from "@/components/Celta/VocabularyGrammar/Practice/LCOP";
import {
  Production,
  ProductionData,
} from "@/components/Celta/VocabularyGrammar/Production";
import { CCQData } from "@/components/Celta/VocabularyGrammar/Presentation/CCQ";
import { ICQData } from "@/components/Celta/VocabularyGrammar/Practice/ICQ";

import { cat1, cat2 } from "@/img/index";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Presentation } from "@/components/Celta/VocabularyGrammar/Presentation";
import { Practice } from "@/components/Celta/VocabularyGrammar/Practice";
import { WrapUp } from "@/components/Celta/WrapUp";

const warmUps: WarmUpData[] = [
  {
    question: "aaa",
  },
  {
    question: "bbb",
  },
];

const introduction: IntroductionData = 
  {
    prompt: "aaa",
    swiperFraction: [
      {
        imgSrc: cat1,
        imgAlt: "...",
      },
      {
        imgSrc: cat2,
        imgAlt: "...",
      },
    ],
    discussionQuestions: [
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
    ],
  }

const meanings: MeaningData[] = [
  {
    prompt: "...",
  },
  {
    audioSrc:
      "/assets/audio/courses/beginner/IC5_L0_Unit 01 Pg 002 Ex 01 Conversation Pt A.mp3",
    conversations: [
      {
        statement: "A: How are you doing?",
      },
      {
        statement: "B: I'm pretty good, How about you?",
      },
    ],
  },
  {
    ccqs: [
      {
        checking: "xxx",
      },
    ],
  },
];

const pronunciations: PronunciationData[] = [
  {
    prompt: "...",
  },
];

const formUses: FormUseData[] = [
  {
    prompt: "...",
  },
];

const formUseCCQS: CCQData[] = [
  {
    checking: "bbb",
  },
];

const hcwps: HCWPData[] = [
  {
    prompt: "...",
  },
];

const icqHCWP: ICQData[] = [
  { instruction: "aaa" },
  { instruction: "..." },
  { instruction: "..." },
];

const lcwps: LCWPData[] = [
  {
    prompt: "...",
  },
];

const icqLCWP: ICQData[] = [
  { instruction: "bbb" },
  { instruction: "..." },
  { instruction: "..." },
];

const hcops: HCOPData[] = [
  {
    prompt: "...",
  },
];

const icqHCOP: ICQData[] = [
  { instruction: "ccc" },
  { instruction: "..." },
  { instruction: "..." },
];

const lcops: LCOPData[] = [
  {
    prompt: "...",
  },
];

const icqLCOP: ICQData[] = [
  { instruction: "ddd" },
  { instruction: "..." },
  { instruction: "..." },
];

const productions: ProductionData[] = [
  {
    prompt: "aaa",
  },
  {
    instructions: [
      {
        prompt: "• ...",
      },
      {
        prompt: "• ...",
      },
    ],
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
        <div className="line-break">
          {warmUps && <WarmUp warmUps={warmUps} />}
          <Introduction introduction={introduction} />
          <Presentation>
            <Meaning meanings={meanings} />
            <Pronunciation pronunciations={pronunciations} />
            <FormUse formUses={formUses} ccqs={formUseCCQS} />
          </Presentation>
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
          <Production productions={productions} />
          <WrapUp />
        </div>
      </div>
    </>
  );
}
