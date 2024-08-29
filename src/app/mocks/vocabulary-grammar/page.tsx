"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import SwiperFraction from "@/components/Swiper/Fraction";
import Text from "@/components/Lessons/Text";
import { AudioPlayer } from "@/components/Audioplayer";
import { Card } from "@/components/Cards/Card";
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

const meaningPrompt = [
  {
    prompt: "...",
  },
];

const conversation = [
  {
    prompt: "A: ...",
  },
  {
    prompt: "B: ...",
  },
];

const meaningChecking = [
  {
    prompt: "... ?",
  },
  {
    prompt: "... ?",
  },
];

const pronunciationPrompt = [
  {
    prompt: "...",
  },
];

const hcwpInstructions = [
  {
    prompt: "• aaa",
  },
];

const lcwpInstructions = [
  {
    prompt: "• bbb",
  },
];

const hcopInstructions = [
  {
    prompt: "• ccc",
  },
];

const lcopInstructions = [
  {
    prompt: "• ddd",
  },
];

const productionPrompt = [
  {
    prompt: "aaa",
  },
];

const wrapUpPrompt = [
  {
    prompt: "yyy"
  }
]

export default function MockVocabularyGrammar() {
  return (
    <>
      <Whiteboard
        title="Vocabulary / Grammar"
        subtitle="..."
        descriptions={["..."]}
      />
      <div className="line-break">
        <div className="line-break">
          <BoardCard
            label="Warm-up"
            time="5'"
            bgColor="black"
            textColor="white"
          >
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
            label="Presention"
            time="20'"
            bgColor="black"
            textColor="white"
          >
            <BoardCard label="Meaning" bgColor="lightgray" textColor="black">
              <Text texts={meaningPrompt} />
              <AudioPlayer audioSrc="" />
              <Text texts={conversation} />
              <Card bgColor="#FFFACD">
                <Text texts={meaningChecking} />
              </Card>
            </BoardCard>
            <BoardCard
              label="Pronunciation"
              bgColor="lightgray"
              textColor="black"
            >
              <Text texts={pronunciationPrompt} />
            </BoardCard>
            <BoardCard label="Form / Use" bgColor="lightgray" textColor="black">
              <p>...</p>
            </BoardCard>
          </BoardCard>
          <BoardCard label="Practice" bgColor="black" textColor="white">
            <BoardCard
              label="High Control Written Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={hcwpInstructions} />
              </Card>
            </BoardCard>
            <BoardCard
              label="Low Control Written Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={lcwpInstructions} />
              </Card>
            </BoardCard>
            <BoardCard
              label="High Control Oral Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={hcopInstructions} />
              </Card>
            </BoardCard>
            <BoardCard
              label="Low Control Oral Practice"
              bgColor="lightgray"
              textColor="black"
            >
              <Card bgColor="#FFBABA">
                <Text texts={lcopInstructions} />
              </Card>
            </BoardCard>
          </BoardCard>
          <BoardCard label="Production" bgColor="black" textColor="white">
            <Text texts={productionPrompt} />
          </BoardCard>
        </div>
        <BoardCard label="Wrap-up" bgColor="black" textColor="white">
          <Text texts={wrapUpPrompt} />
        </BoardCard>
      </div>
    </>
  );
}
