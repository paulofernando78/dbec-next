"use client";
import { Card } from "@/components/Cards/Card";

import {
  AudioPlayer,
  BoardCard,
  DictionaryCard,
  FillInTheBlanks,
  FlipCard,
  PreVocabulary,
  Radio,
  ScrollToTop,
  SwiperFraction,
  Text,
  VideoPlayer, 
  Whiteboard,
} from "@/components";

import { cat1, cat2 } from "@/img/index";
import { VocabularyComponent } from "@/types/PreVocabulary";

const warmUpPrompt = [
  {
    prompt: "...",
  },
  {
    prompt: "• ...",
  },
];

const introductionPrompt = [
  {
    prompt: "Take a look at these pictures. / Let's watch a video...",
  },
];

const swiperIntroduction = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
  {
    imgSrc: cat2,
    imgAlt: "...",
  },
];

const introductionQuestion = [
  {
    prompt: "...",
  },
];

const meaningPrompt = [
  {
    prompt: "...",
  },
];

const conversation = [
  {
    prompt: "A: ...",
  },
  {
    prompt: "B: ...",
  },
];

const meaningChecking = [
  {
    prompt: "... ?",
  },
  {
    prompt: "... ?",
  },
];

const preVocabularyPrompt1 = [
  {
    prompt: "...",
  },
];

const preVocabularyPrompt2 = [
  {
    prompt: "Now fill in the blanks with the words above.",
  },
];

const flipCards = [
  {
    imgSrc: cat1,
    imgAlt:
      'An image representing the concept of "consent" with a serene and symbolic depiction.',
  },
];

const words: VocabularyComponent[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "....mp3",
      keyword: "...",
      label: "...",
      phonetics: "/.../",
    },
  },
];

const fillInTheBlanks = [
  {
    options: true,
    width: "100px",
    beforeBlank: "...",
    correctAnswer: ["..."],
    afterBlank: "...",
    lineBreakAfter: true,
  },
];

const pronunciationPrompt = [
  {
    prompt: "...",
  },
];

const hcwpInstructions = [
  {
    prompt: "• ...",
  },
];

const radio = [
  {
    title: "Exercise 1.",
    question: "1. Question",
    options: [
      { label: "Answer 1", isCorrect: true },
      { label: "Answer 2", isCorrect: false },
    ],
  },
  {
    question: "2. Question",
    options: [
      { label: "Answer 1", isCorrect: true },
      { label: "Answer 2", isCorrect: false },
    ],
  },
];

const lcwpInstructions = [
  {
    prompt: "• ...",
  },
];

const hcopInstructions = [
  {
    prompt: "• ...",
  },
];

const lcopInstructions = [
  {
    prompt: "• ...",
  },
];

const productionPrompt = [
  {
    prompt: "...",
  },
];

const wrapUpPrompt = [
  {
    prompt: "yyy",
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
            
      {/* Warm-up */}
          <BoardCard
            label="Warm-up"
            time="5'"
            bgColor="black"
            textColor="white"
          >
            <Text texts={warmUpPrompt} />
          </BoardCard>

          {/* Pre-vocabulary */}
          <BoardCard
            label="Pre-vocabulary"
            time="5-10'"
            bgColor="black"
            textColor="white"
          >
            <Text texts={preVocabularyPrompt1} />
            <FlipCard flipCards={flipCards} />
            <PreVocabulary preVocabularies={words} />
            <Text texts={preVocabularyPrompt2} />
            <FillInTheBlanks questions={fillInTheBlanks} />
          </BoardCard>

          {/* Introduction */}
          <BoardCard
            label="Introduction"
            smallerLabel="(Contextualization)"
            time="5-10'"
            bgColor="black"
            textColor="white"
          >
            <Text texts={introductionPrompt} />
            <SwiperFraction images={swiperIntroduction} />
            <Text texts={introductionQuestion} />
          </BoardCard>

          {/* Presentation */}
          <BoardCard
            label="Presention"
            time="20'"
            bgColor="black"
            textColor="white"
          >

            {/* Meaning */}
            <BoardCard label="Meaning" bgColor="lightgray" textColor="black">
              <Text texts={meaningPrompt} />
              <AudioPlayer audioSrc="" />
              <Text texts={conversation} />
              <Card bgColor="#FFFACD">
                <Text texts={meaningChecking} />
              </Card>
            </BoardCard>

            {/* Pronunciation */}
            <BoardCard
              label="Pronunciation"
              bgColor="lightgray"
              textColor="black"
            >
              <Text texts={pronunciationPrompt} />
            </BoardCard>
            <BoardCard label="Form / Use" bgColor="lightgray" textColor="black">
              <p>...</p>
            </BoardCard>

            {/* Practice */}
          </BoardCard>
          <BoardCard label="Practice" bgColor="black" textColor="white">

            {/* High Control Written Practice */}
            <BoardCard
              label="High Control Written Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={hcwpInstructions} />
              </Card>
              <Radio questions={radio} />
            </BoardCard>

            {/* Low Control Written Practice */}
            <BoardCard
              label="Low Control Written Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={lcwpInstructions} />
              </Card>
            </BoardCard>

            {/* High Controo Oral Practice */}
            <BoardCard
              label="High Control Oral Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={hcopInstructions} />
              </Card>
            </BoardCard>

            {/* Low Control Oral Practice */}
            <BoardCard
              label="Low Control Oral Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={lcopInstructions} />
              </Card>
            </BoardCard>
          </BoardCard>

          {/* Production */}
          <BoardCard label="Production" bgColor="black" textColor="white">
            <Text texts={productionPrompt} />
          </BoardCard>
        </div>

        {/* Wrap-up */}
        <BoardCard label="Wrap-up" bgColor="black" textColor="white">
          <Text texts={wrapUpPrompt} />
        </BoardCard>
      </div>
      <ScrollToTop />
    </>
  );
}
