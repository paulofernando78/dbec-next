"use client";

import {
  Whiteboard,
  WarmUp,
  Introduction,
  PreVocabulary,
  AudioPlayer,
  DictionaryCard,
 
  Paragraph,
  ScrollToTop,
  BoardCard,
} from "@/components";

import type { VocabularyComponent, VocabularyProps } from "@/types/Vocabulary";

import { cat1, cat2 } from "@/img/index";

import {  } from "@/components/Lessons/Celta/Introduction";


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

const vocabularies: VocabularyComponent[] = [
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
        <Introduction
        prompt="Take a look at these pictures. / Let's watch a video."
        swiperFraction={swiperIntroduction}
        videoSrc="https://www.youtube.com/embed/m1-Bx3h4cio"
        />
        <PreVocabulary
        flipCards={flipCards}
        vocabularies={vocabularies}
        fillInTheBlanks={fillInTheBlanks }
        />
        {/* --- */}

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
