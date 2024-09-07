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
  VideoPlayer,
  Whiteboard,
} from "@/components";

import type { VocabularyComponent } from "@/types/PreVocabulary";

import { cat1, cat2 } from "@/img/index";
import { WarmUp } from "@/components/Lessons/Celta/WarmpUp/page";

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

const paragraphs = [
  {
    paragraph: "aaa",
  },
  {
    paragraph: "aaa",
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
        <WarmUp>
          <p>...</p>
        </WarmUp>
        {/* Introduction */}
        <BoardCard
          label="Introduction"
          smallerLabel="(Contextualization)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <p>Take a look at these pictures. / Let's watch a video.</p>
          <SwiperFraction images={swiperIntroduction} />
          <VideoPlayer videoSrc="https://www.youtube.com/embed/m1-Bx3h4cio" />
        </BoardCard>

        {/* Pre-vocabulary */}
        <BoardCard
          label="Pre-vocabulary"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <FlipCard flipCards={flipCards} />
          <PreVocabulary preVocabularies={words} />
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
          <p>...</p>
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
          <p>...</p>
        </BoardCard>

        {/* Follow-up */}
        <BoardCard
          label="Follow-up"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <p>...</p>
        </BoardCard>
      </div>

      <ScrollToTop />
    </>
  );
}
