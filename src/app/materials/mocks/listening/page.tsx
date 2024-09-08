"use client";

import {
  Whiteboard,
  WarmUp,
  Introduction,
  PreVocabulary,
  DictionaryCard,
  ScrollToTop,
  BoardCard,
} from "@/components";

import type { VocabularyComponent } from "@/types/Vocabulary";

import { cat1, cat2 } from "@/img/index";
import { ListeningGist } from "@/components/Lessons/Celta/ListeningGist";
import { ListeningDetail } from "@/components/Lessons/Celta/ListeningDetail";
import { Followup } from "@/components/Lessons/Celta/Followup";

const warmUpPrompt = "What can you remember from the last lesson?";

const introductionPrompt =
  "Take a look at these pictures. / Let's watch a video.";

const introductionSwiper = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
  {
    imgSrc: cat2,
    imgAlt: "...",
  },
];

const introductionVideoSrc = "https://www.youtube.com/embed/m1-Bx3h4cio";

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

const listeningGistPrompt = "xxx";

const paragraphs = [
  {
    paragraph: "aaa",
  },
  {
    paragraph: "bbb",
  },
  {
    paragraph: "ccc",
  },
];

const listeningGistAudio = "";

const listeningGistVideo = "https://www.youtube.com/embed/m1-Bx3h4cio";

const ListeningDetailQuestions = [
  {
    question: "aaa",
  },
  {
    question: "bbb",
  },
  {
    question: "ccc",
  },
];

const followupQuestions = [
  {
    question: "ddd",
  },
  {
    question: "eee",
  },
  {
    question: "fff",
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
        <WarmUp prompt={warmUpPrompt} />
        <Introduction
          prompt={introductionPrompt}
          swiperFraction={introductionSwiper}
          videoSrc={introductionVideoSrc}
        />
        <PreVocabulary
          flipCards={flipCards}
          vocabularies={vocabularies}
          fillInTheBlanks={fillInTheBlanks}
        />
        <ListeningGist
          prompt={listeningGistPrompt}
          audioSrc={listeningGistAudio}
          videoSrc={listeningGistVideo}
          paragraphs={paragraphs}
        />
        <ListeningDetail questions={ListeningDetailQuestions} />
        <Followup questions={followupQuestions} />
      </div>
      <ScrollToTop />
    </>
  );
}
