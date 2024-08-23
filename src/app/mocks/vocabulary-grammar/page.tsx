"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { VocabularyGrammar } from "@/components/Lessons/VocabularyGrammar";
import { WarmUpData } from "@/components/Celta/WarmUp";
import { SwiperFractionData } from "@/components/Swiper/Fraction";

import { DiscussionQuestionData } from "@/components/Celta/Introduction";
import {
  Presentation,
  PresentationData,
} from "@/components/Celta/VocabularyGrammar/Presentation";
import { Meaning } from "@/components/Celta/VocabularyGrammar/Presentation/Meaning";
import { Pronunciation } from "@/components/Celta/VocabularyGrammar/Presentation/Pronunciation";
import { FormUse } from "@/components/Celta/VocabularyGrammar/Presentation/FormUse";
import { CCQ } from "@/components/Celta/VocabularyGrammar/Presentation/CCQ";
import { Practice } from "@/components/Celta/VocabularyGrammar/Practice";
import { HCWP } from "@/components/Celta/VocabularyGrammar/Practice/HCWP";
import { ICQ } from "@/components/Celta/VocabularyGrammar/Practice/ICQ";
import { LCWP } from "@/components/Celta/VocabularyGrammar/Practice/LCWP";
import { HCOP } from "@/components/Celta/VocabularyGrammar/Practice/HCOP";
import { LCOP } from "@/components/Celta/VocabularyGrammar/Practice/LCOP";
import { Production } from "@/components/Celta/VocabularyGrammar/Production";

import { cat1 } from "@/img/index";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const warmUps: WarmUpData[] = [
  {
    question: "aaa",
  },
  {
    question: "bbb",
  },
];

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: cat1,
    imgAlt: "...",
  },
];

const discussedQuestions: DiscussionQuestionData[] = [
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
  {
    questions: [
      {
        question: "2.",
      },
    ],
  },
];

const presentations: PresentationData[] = [
  {
    text: "...",
  },
];

export default function MockVocabularyGrammar() {
  return (
    <>
      <Whiteboard
        title="Vocabulary / Grammar"
        subtitle="..."
        descriptions={["..."]}
      />
      <div className="line-break">
        <VocabularyGrammar
          warmUps={warmUps}
          swiperFraction={swiperFraction}
          discussedQuestions={discussedQuestions}
          presentations={presentations}
        />
        {/* <div className="line-break">

          <Presentation>
            <div className="celta-line-break">
              <Meaning>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </Meaning>
              <Pronunciation>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </Pronunciation>
              <FormUse>
                <div className="line-break">
                  <p>...</p>
                  <CCQ>
                    <p>...</p>
                  </CCQ>
                </div>
              </FormUse>
            </div>
          </Presentation>
          <Practice>
            <div className="celta-line-break">
              <HCWP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it individually.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </HCWP>
              <LCWP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it individually.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </LCWP>
              <HCOP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it in pairs.</p>
                    <p>• Listen to a dialogue.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </HCOP>
              <LCOP>
                <div className="line-break">
                  <p>...</p>
                  <ICQ>
                    <p>• Do it in pairs.</p>
                    <p>• Listen to a dialogue.</p>
                    <p>...</p>
                  </ICQ>
                </div>
              </LCOP>
            </div>
          </Practice>
          <Production>
            <div className="line-break">
              <ICQ>
                <p>• Mingle (walk around and talk to one another).</p>
                <p>• Do it in groups of...</p>
              </ICQ>
              <p>...</p>
            </div>
          </Production>
          <WrapUp />
        </div> */}
      </div>
    </>
  );
}
