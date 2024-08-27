"use client";
import { VocabularyGrammar } from "@/components/Lessons/VocabularyGrammar";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { WarmUpData } from "@/components/Celta/WarmUp";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestionData } from "@/components/Celta/Introduction";
import { PresentationData } from "@/components/Celta/VocabularyGrammar/Presentation";
import { ConversationData, MeaningData } from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
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
  }
];

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
    prompt: "aaa",
  },
];

const meaningConversations: ConversationData[] = [
  {
    statement: "A: How are you doing?"
  },
  {
    statement: "B: I'm pretty good, How about you?"
  }
]

const meaningCCQS: CCQData[] = [
  {
    checking: "aaa",
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
        prompt: "1"
      },
      {
        prompt: "2"
      }
    ]
  }
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
          meaningConversations={meaningConversations}
          meaningCCQS={meaningCCQS}
          pronunciations={pronunciations}
          formUses={formUses}
          formUseCCQS={formUseCCQS}
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
      </div>
    </>
  );
}
