"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Listening } from "@/components/Lessons/Listening";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestionData } from "@/components/Celta/Introduction";
import { FlipCardData } from "@/components/Cards/Flip";
import { PreVocabularyData } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlanksData } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { ParagraphData } from "@/components/Celta/Listening/ListeningForGist";
import { ScanQuestionData } from "@/components/Celta/Listening/ListeningForScan";
import { FollowupQuestionData } from "@/components/Celta/Listening/FollowUp";
import { ScrollToTop } from "@/components/ScrollToTop";

import { cat1 } from "@/img/index";

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
];

const discussionQuestions: DiscussionQuestionData[] = [
  {
    questions: [
      {
        question: "...",
      },
      {
        question: "...",
      }
    ],
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

const paragraphs: ParagraphData[] = [
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
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
    ptParagraph: "...",
  },
  {
    enParagraphs: [
      {
        enParagraph: "...",
      },
    ],
    ptParagraph: "...",
  },
];

const scanQuestions: ScanQuestionData[] = [
  {
    question: "...",
    answer: "...",
  },
  {
    question: "...",
    answer: "...",
  },
  {
    question: "...",
    answer: "...",
  },
  {
    question: "...",
    answer: "...",
  },
];

const followupQuestions: FollowupQuestionData[] = [
  {
    enQuestion: "...",
    // ptQuestion: ".",
  },
  {
    enQuestion:
      "...",
    // ptQuestion:
    //   ".",
  },
  {
    enQuestion:
      "...",
    // ptQuestion:
    //   ".",
  },
];

export default function MockListening() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={[
          "...",
        ]}
        subdescription="Month #, 20..."
      />
      <div className="line-break">
        <Listening
          swiperFraction={swiperFraction}
          discussionQuestions={discussionQuestions}
          flipCards={flipCards}
          preVocabularies={preVocabularies}
          fillInTheBlanks={fillInTheBlanks}
          audioSrc="..."
          paragraphs={paragraphs}
          gistAnswer="..."
          scanQuestions={scanQuestions}
          followupQuestions={followupQuestions}
        />
      </div>
      <ScrollToTop />
    </>
  );
}
