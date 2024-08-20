"use client";
"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { SwiperFractionData } from "@/components/Swiper/Fraction";
import { DiscussionQuestion } from "@/components/Celta/Introduction";
import { FlipCard } from "@/components/Cards/Flip";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Question } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { Paragraph } from "@/components/Celta/Listening/ListeningForGist";
import { ScanQuestion } from "@/components/Celta/Listening/ListeningForScan";
import { ScrollToTop } from "@/components/ScrollToTop";

import {
  GistQuestion,
  Listening,
} from "@/components/Lessons/Listening";

// Images
import {
  debris1,
  spaceJunk1,
  stage1,
  track1,
  strategy1,
  sustainable1,
  disappoint1,
  occur1,
} from "@/img/index";
import { FollowupQuestion } from "@/components/Celta/Listening/FollowUp";


const discussionQuestions: DiscussionQuestion[] = [
  {
    questions: [
      {
        question: "What is it?",
      },
    ],
  },
  {
    questions: [
      {
        question: "Does Brazil launch rockets to space?",
      },
    ],
  }
];

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrcLink:
      "https://gdb.voanews.com/01000000-0aff-0242-d2d6-08dcbb19ddcb_cx0_cy8_cw0_w1200_r1.jpg",
    imgAltLink: "...",
  },
  {
    imgSrcLink:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAltLink: "...",
  },
];

const flipCards: FlipCard[] = [
  {
    imgSrc: disappoint1,
    imgAlt: "An image of a woman disappointed.",
  },
  {
    imgSrc: occur1,
    imgAlt: "An image of car accident.",
  },
  {
    imgSrc: track1,
    imgAlt: "Tracks of dinosaur.",
  },
  {
    imgSrc: sustainable1,
    imgAlt: "An image of sustainable.",
  },
  {
    imgSrc: debris1,
    imgAlt: "An image of debris scattered across a rough surface",
  },
  {
    imgSrc: stage1,
    imgAlt: "An image of parental stages.",
  },
  {
    imgSrc: strategy1,
    imgAlt: "An image of a chess pawn.",
  },
  {
    imgSrc: spaceJunk1,
    imgAlt: "An image of space junk floating in the darkness of space.",
  },
];

const preVocabularies: PreVocabulary[] = [
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/debris.mp3",
      keyword: "debris",
      label: "debris",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/space-junk.mp3",
      keyword: "junk",
      label: "space junk",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/stage.mp3",
      keyword: "stage",
      label: "stage",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/t/track.mp3",
      keyword: "track",
      label: "track",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/strategy.mp3",
      keyword: "strategy",
      label: "strategy",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/s/sustainable.mp3",
      keyword: "sustainable",
      label: "sustainable",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/d/disappoint.mp3",
      keyword: "disappoint",
      label: "disappoint",
      phonetics: "...",
    },
  },
  {
    component: (props) => <DictionaryCard {...props} />,
    componentProps: {
      audioSrc: "/o/occur.mp3",
      keyword: "occur",
      label: "occur",
      phonetics: "...",
    },
  },
];

const fillInTheBlanks: Question[] = [
  {
    options: true,
    width: "100px",
    title: "1. Fill in the blank with the correct word.",
    beforeBlank: "...",
    correctAnswer: ["..."],
    afterBlank: "...",
    lineBreakAfter: true,
  }
];

const paragraphs: Paragraph[] = [
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  },
  {
    enParagraphs: [
      {
        enParagraph:
          "...",
      },
    ],
    ptParagraph:
      "...",
  }
];

const scanQuestions: ScanQuestion[] = [
  {
    question: "What happened to the Chinese rocket?",
    answer: "...",
  },
  {
    question: "How many pieces of debris were created?",
    answer: "...",
  },
  {
    question: "How many satellites are at risk?",
    answer: "...",
  },
  {
    question: "What caused the rocket to break apart?",
    answer: "...",
  },

];

const followupQuestions: FollowupQuestion[] = [
  {
    enQuestion: "Do you agree with the age restrictions? Why or why not?",
    // ptQuestion: "...",
  },
  {
    enQuestion: "What can be done to prevent space debris?",
    // ptQuestion: "...",
  },
  {
    enQuestion: "How might this issue affect future space missions?",
    // ptQuestion: "...",
  }
];

export default function ChineseRocketBreaksUpInSpace() {
  return (
    <>
      <Whiteboard
        title="Skills"
        subtitle="Listening"
        descriptions={[
          "Chinese Rocket Breaks Up in Space, Releasing Hundreds of Debris Pieces",
        ]}
      />
      <div className="line-break">
        <Listening
          discussion="Check out the pictures above. Swipe them to the right and answer the questions."
          swiperFraction={swiperFraction}
          discussionQuestions={discussionQuestions}
          flipCards={flipCards}
          preVocabularies={preVocabularies}
          fillInTheBlanks={fillInTheBlanks}
          audioSrc="https://voa-audio-ns.akamaized.net/vle/2024/08/13/01000000-0aff-0242-f5cb-08dcbba87c1a.mp3"
          paragraphs={paragraphs}
          scanQuestions={scanQuestions}
          followupQuestions={followupQuestions}
        />
      </div>
      <ScrollToTop />
      <div className="line-break">
       
      
      

     

  
      </div>
    </>
  );
}
