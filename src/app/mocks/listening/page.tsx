// Images
import { cat1, cat2, cat3 } from "@/img/index";

import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { WarmUp } from "@/components/Celta/WarmUp";
import { Introduction } from "@/components/Celta/Introduction";
import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";
import { PreVocabulary } from "@/components/Celta/Listening/PreVocabulary";
import { ListeningForGist } from "@/components/Celta/Listening/ListeningForGist";
import { AudioPlayer } from "@/components/Audioplayer";
import { Paragraph } from "@/components/Celta/Listening/Paragraph";
import { Translation } from "@/components/Collapsibles/Translation/Translation";
import { ListeningForScan } from "@/components/Celta/Listening/ListeningForScan";
import { Answer } from "@/components/Collapsibles/Answer/Answer";
import { FollowUp } from "@/components/Celta/Listening/FollowUp";
import { WrapUp } from "@/components/Celta/WrapUp";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FlipCard } from "@/components/Cards/Flip";
import { Dropdown } from "@/components/ExerciseTemplates/Dropdown";
import { subtle } from "crypto";

const swiperFraction: SwiperFractionData[] = [
  {
    imgSrc: cat1,
    imgAlt: "A cat picture 1",
  },
  {
    imgSrc: cat2,
    imgAlt: "A cat picture 2",
  },
  {
    imgSrc: cat3,
    imgAlt: "A cat picture 3",
  },
];

const flipCards = [
  {
    imgSrc: cat1,
    imgAlt: "A cat",
  },
  {
    imgSrc: cat1,
    imgAlt: "A cat",
  },
];

const dropdown = [
  {
    title: "Select the right answer.",
    subtitle: "test",
    beforeOptions: "1. ...",
    options: [{ value: "...", label: "...", correctAnswer: true }],
    width: "100",
    afterOptions: "...",
    lineBreak: true,
  },
  {
    beforeOptions: "2. ...",
    options: [{ value: "...", label: "...", correctAnswer: true }],
    width: "100",
    afterOptions: "...",
    lineBreak: true,
  },
];

export default function Listening() {
  return (
    <>
      <Whiteboard title="Skills" subtitle="Listening" descriptions={["..."]} />
      <div className="line-break">
        <WarmUp>
          <p>...</p>
        </WarmUp>
        <Introduction>
          <p className="margin-bottom">
            Take a look at the pictures below. Swipe them to the right and
            answer the questions. / Watch the video and answer the question.
          </p>
          <SwiperFraction images={swiperFraction} />
        </Introduction>
        <PreVocabulary>
          <div className="line-break">
            <DictionaryCard keyword="..." label="..." audioSrc="" />
            <FlipCard flipCards={flipCards} />
          </div>
        </PreVocabulary>
        <p className="red">COLOCAR DROPDOWN EXERCISES</p>
        <Dropdown questions={dropdown} />

        <ListeningForGist />
        <AudioPlayer audioSrc="" />
        <Paragraph number="1">
          <div className="line-break">
            <p>...</p>
            <Translation>
              <p>...</p>
            </Translation>
          </div>
        </Paragraph>
        <ListeningForScan>
          <p>• ...</p>
          <Answer>
            <p>...</p>
          </Answer>
        </ListeningForScan>
        <FollowUp>
          <p>• ...</p>
        </FollowUp>
        <WrapUp />
      </div>
    </>
  );
}
