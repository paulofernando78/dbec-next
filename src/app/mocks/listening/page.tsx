"use client";

import {
  AudioPlayer,
  BoardCard,
  DictionaryCard,
  FillInTheBlanks,
  FlipCard,
  Paragraph,
  PreVocabulary,
  ScrollToTop,
  SwiperFraction,
  Text,
  VideoPlayer,
  Whiteboard,
} from "@/components";

import type { VocabularyComponent } from "@/types/PreVocabulary";

import { cat1, cat2 } from "@/img/index";

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
    prompt: "Take a look at these pictures. / Let's watch a video..",
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

const gistPrompt = [
  {
    prompt: "...",
  },
];

const paragraphs = [
  {
    paragraph: "aaa",
  },
  {
    paragraph: "aaa",
  },
];

const scanPrompt = [
  {
    prompt: "...",
  },
];

const followupPrompt = [
  {
    prompt: "...",
  },
];

export default function MockListening() {
  return (
    <>
      <Whiteboard
        title="Listening"
        subTitle="..."
        descriptions={["..."]}
        subDescription="Month #, 20..."
      />
      <div className="line-break">
        {/* Warm-up */}
        <BoardCard label="Warm-up" bgColor="black" textColor="white">
          <Text texts={warmUpPrompt} />
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
          <VideoPlayer videoSrc="https://www.youtube.com/embed/m1-Bx3h4cio" />
          <Text texts={introductionPrompt} />
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

        {/* Listen gor gist */}
        <BoardCard
          label="Listen for gist"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <Text texts={gistPrompt} />
          <AudioPlayer audioSrc="" />
          <Paragraph paragraphs={paragraphs} />
        </BoardCard>

        {/* Listen for scan */}
        <BoardCard
          label="Listening for scan"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <Text texts={scanPrompt} />
        </BoardCard>

        {/* Follow-up */}
        <BoardCard
          label="Follow-up"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <Text texts={followupPrompt} />
        </BoardCard>
      </div>

      <ScrollToTop />
    </>
  );
}
