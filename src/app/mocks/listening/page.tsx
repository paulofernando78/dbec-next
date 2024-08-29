"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import SwiperFraction from "@/components/Swiper/Fraction";
import Text from "@/components/Lessons/Text";
import { AudioPlayer } from "@/components/Audioplayer";
import { Card } from "@/components/Cards/Card";

import { FlipCard, FlipCardData } from "@/components/Cards/Flip";
import {
  PreVocabulary,
  PreVocabularyData,
} from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import {
  FillInTheBlanks,
  FillInTheBlanksData,
} from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import {
  ListeningForGist,
  ParagraphData,
} from "@/components/Celta/Listening/ListeningForGist";
import {
  ListeningForScan,
  ScanQuestionData,
} from "@/components/Celta/Listening/ListeningForScan";
import {
  FollowUp,
  FollowupQuestionData,
} from "@/components/Celta/Listening/FollowUp";
import { ScrollToTop } from "@/components/ScrollToTop";

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
    prompt: "...",
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

const preVocabularyPrompt = [
  {
    prompt: "...",
  },
];

const gistPrompt = [
  {
    prompt: "...",
  },
];

const flipCards: FlipCardData[] = [
  {
    imgSrc: cat1,
    imgAlt:
      'An image representing the concept of "consent" with a serene and symbolic depiction.',
  },
];

const preVocabularies: PreVocabularyData[] = [
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

const fillInTheBlanks: FillInTheBlanksData[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "...",
    correctAnswer: ["challenge"],
    afterBlank: "...",
    lineBreakAfter: true,
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
        subtitle="..."
        descriptions={["..."]}
        subdescription="Month #, 20..."
      />
      <div className="line-break">
        <BoardCard label="Warm-up" bgColor="black" textColor="white">
          <Text texts={warmUpPrompt} />
        </BoardCard>
        <BoardCard
          label="Introduction"
          smallerLabel="(Contextualization)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <Text texts={introductionPrompt} />
          <SwiperFraction images={swiperIntroduction} />
        </BoardCard>
        <BoardCard
          label="Pre-vocabulary"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
          <Text texts={gistPrompt} />
          <FlipCard flipCards={flipCards}/>
          {/* <FillInTheBlanks questions={} /> */}
        </BoardCard>
        <BoardCard
          label="Listen for gist"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white"
        >
        <AudioPlayer audioSrc=""/>
        
        </BoardCard>
     
        <BoardCard label="Listening for scan"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white">
        <Text texts={scanPrompt} />
        </BoardCard>
        <BoardCard label="Follow-up"
          smallerLabel="(Ideia)"
          time="5-10'"
          bgColor="black"
          textColor="white">
        <Text texts={followupPrompt} />
        </BoardCard>
      
   
      </div>

      <ScrollToTop />
    </>
  );
}
