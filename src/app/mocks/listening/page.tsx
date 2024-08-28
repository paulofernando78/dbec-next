"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Introduction, IntroductionData } from "@/components/Celta/Introduction";
import { FlipCardData } from "@/components/Cards/Flip";
import { PreVocabulary, PreVocabularyData } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlanksData } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { ListeningForGist, ParagraphData } from "@/components/Celta/Listening/ListeningForGist";
import { ListeningForScan, ScanQuestionData } from "@/components/Celta/Listening/ListeningForScan";
import { FollowUp, FollowupQuestionData } from "@/components/Celta/Listening/FollowUp";
import { ScrollToTop } from "@/components/ScrollToTop";

import { cat1, cat2 } from "@/img/index";

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
      <Introduction introduction={introduction} />
      {/* <PreVocabulary
        flipCards={flipCards}
        preVocabularies={preVocabularies}
        fillInTheBlanks={fillInTheBlanks}
      />
      <ListeningForGist
        audioSrc={audioSrc}
        paragraphs={paragraphs}
        gistAnswer={gistAnswer}
      />
      <ListeningForScan scanQuestions={scanQuestions} />
      <FollowUp followupQuestions={followupQuestions} /> */}
    </div>
      


      <ScrollToTop />
    </>
  );
}
