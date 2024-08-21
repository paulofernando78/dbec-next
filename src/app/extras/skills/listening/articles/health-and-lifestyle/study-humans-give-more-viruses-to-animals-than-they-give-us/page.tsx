"use client";
import { Listening } from "@/components/Lessons/Listening";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestion } from "@/components/Celta/Introduction";
import { FlipCard } from "@/components/Cards/Flip";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { Paragraph } from "@/components/Celta/Listening/ListeningForGist";
import { ScanQuestion } from "@/components/Celta/Listening/ListeningForScan";
import { FollowupQuestion } from "@/components/Celta/Listening/FollowUp";
import { ScrollToTop } from "@/components/ScrollToTop";

// Images
import { africanCivet, asianCivet } from "@/img/index";

const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "...",
      },
    ],
  },
  {
    questions: [
      {
        question: "...",
      },
    ],
  },
  {
    questions: [
      {
        question: "...",
      },
    ],
  },
];

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: africanCivet,
    imgAlt: "...",
  },
  {
    imgSrc: asianCivet,
    imgAlt: "...",
  },
];

const flipCards: FlipCard[] = [
  {
    imgSrc: cat1,
    imgAlt:
      'An image representing the concept of "consent" with a serene and symbolic depiction.',
  },
];

const preVocabularies: PreVocabulary[] = [
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

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    beforeBlank: "...",
    correctAnswer: ["challenge"],
    afterBlank: "...",
    lineBreakAfter: true,
  },
];

const paragraphs: Paragraph[] = [
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

const scanQuestions: ScanQuestion[] = [
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

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "...",
    // ptQuestion: ".",
  },
  {
    enQuestion: "...",
    // ptQuestion:
    //   ".",
  },
  {
    enQuestion: "...",
    // ptQuestion:
    //   ".",
  },
];

export default function StudyHumansGiveMoreVirusesToAnimalsThanTheyGiveUs() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Medicine"
        descriptions={[
          "Study: Humans Give More Viruses To Animals Than They Give Us",
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

      <a href="https://edition.cnn.com/2019/08/02/health/amputation-dog-lick-ohio-woman/index.html">
        <p>A woman lost her hands and legs to an infection from puppy kisses</p>
      </a>
    </>
  );
}
