"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import SwiperFraction from "@/components/Swiper/Fraction";
import {
  DiscussionQuestion,
  PreVocabulary,
  GistQuestion,
  Listening,
  Paragraph,
  ScanQuestion,
  FollowupQuestion,
} from "@/components/Lessons/Listening";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlanks/FillInTheBlanks";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
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

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "1. ...",
    correctAnswer: "...",
    afterBlank: "...",
    lineBreakAfter: true,
  },
];

const gistQuestions: GistQuestion[] = [
  {
    question: "...",
    answer: "...",
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
    answer: ""
  },
];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "...",
    ptQuestion: "...",
  },
  {
    enQuestion: "...",
    ptQuestion: "...",
  },
  {
    enQuestion: "...",
    ptQuestion: "...",
  },
];

export default function ScientistsTestMrnaVaccinesToProtectAgainstBirdFlu() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Listening"
        descriptions={["Scientists test Mrna vaccines to protect against bird flu"]}
        subdescription="June 10, 2024"
      />
      <div className="line-break">
        <SwiperFraction images={swiperFraction} />
        <div>
          <Listening
            discussion="Check out the pictures above. Swipe them to the right and answer the questions."
            discussionQuestions={discussionQuestions}
            preVocabularies={preVocabularies}
            fillInTheBlanks={fillInTheBlanks}
            gistQuestions={gistQuestions}
            audioSrc="..."
            paragraphs={paragraphs}
            scanQuestions={scanQuestions}
            followupQuestions={followupQuestions}
          />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}



