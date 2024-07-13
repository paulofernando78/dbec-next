"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import SwiperFraction from "@/components/SwiperFraction";
import {
  DiscussionQuestion,
  PreVocabulary,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import {
  cat1
} from "@/img/index";
import { ScrollToTop } from "@/components/ScrollToTop";

const swiperFraction = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
];

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "1.",
      },
      {
        component: (props) => <DictionaryCard {...props} />,
        componentProps: {
          audioSrc: "",
          label: "...",
        },
        question: "...",
      },
    ],
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/x/xxx.mp3",
      keyword: "...",
      label: "...",
      phonetics: ""
    },
  },
];

const paragraphs: Paragraph[] = [
  {
    paragraphNumber: "Paragraph 1",
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 2",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 3",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 4",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 5",

    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 6",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 7",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 8",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 9",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 10",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 11",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 12",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 13",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 14",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    paragraphNumber: "Paragraph 15",
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
  },
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "...",
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    question: "...",
  },
];

const radioExercises = [
  {
    title: "1. Choose the correct answer.",
    question: "1. ...",
    options: [
      {
        label: "a) ...",
        isCorrect: true,
      },
      {
        label: "b) ...",
        isCorrect: false,
      },
      { label: "c) ...", isCorrect: false },
    ],
  },
];

export default function WeightLossOptionsForChildrenAreHardToGet() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={["Florida Approves Law Banning Social Media for Children under 14"]}
        subdescription="March 27, 2024"
      />
      <div className="line-break">
        <SwiperFraction images={swiperFraction} />
        <div>
          <Listening
            discussion="Check out the pictures above. Swipe them to the right and answer the questions."
            discussionQuestions={discussionQuestions}
            preVocabularies={preVocabularies}
            audioSrc="..."
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <Radio questions={radioExercises} />
        <ScrollToTop />
      </div>
    </>
  );
}