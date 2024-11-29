import Link from "next/link";

import {
  AudioPlayer,
  Card,
  DictionaryCard,
  FillInTheBlanks,
  FlipCard,
  Radio,
  SwiperFraction,
  Whiteboard,
} from "@/components";

import { animalCat1, animalCat2 } from "@/img/index";
import { Dropdown } from "@/components/Molecules/ExerciseTemplates/Dropdown";

const radio = [
  {
    title: "Choose the correct answer.",
    question: "1. Question",
    options: [
      { label: "Answer 1", isCorrect: true },
      { label: "Answer 2", isCorrect: false },
    ],
  },
  {
    question: "2. Question",
    options: [
      { label: "Answer 1", isCorrect: true },
      { label: "Answer 2", isCorrect: false },
    ],
  },
];

const dropdown = [
  {
    title: "Title",
    subtitle: "subtitle",
    beforeOptions: "1. I",
    options: [
      { value: "am", label: "am", correctAnswer: true },
      { value: "is", label: "is", correctAnswer: false },
      { value: "are", label: "are", correctAnswer: false },
    ],
    width: "100",
    afterOptions: "a teacher.",
  },
  {
    beforeOptions: "2. He",
    options: [
      { value: "am", label: "am", correctAnswer: false },
      { value: "is", label: "is", correctAnswer: true },
      { value: "are", label: "are", correctAnswer: false },
    ],
    width: "100",
    afterOptions: "a student.",
    lineBreak: true,
  },
  {
    title: "Title",
    subtitle: "subtitle",
    beforeOptions: "1. I",
    options: [
      { value: "am", label: "am", correctAnswer: true },
      { value: "is", label: "is", correctAnswer: false },
      { value: "are", label: "are", correctAnswer: false },
    ],
    width: "100",
    afterOptions: "a teacher.",
    lineBreak: true,
  },
  {
    beforeOptions: "2. He",
    options: [
      { value: "am", label: "am", correctAnswer: false },
      { value: "is", label: "is", correctAnswer: true },
      { value: "are", label: "are", correctAnswer: false },
    ],
    width: "100",
    afterOptions: "a student.",
  },
];

const fillInTheBlanks = [
  {
    options: true,
    width: "100px",
    title: "1. Fill in the blank with the correct word.",
    beforeBlank: "...",
    placeholder: "...",
    correctAnswer: ["..."],
    afterBlank: "...",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "...",
    placeholder: "...",
    correctAnswer: ["..."],
    afterBlank: "...",
  },
];

const swiperFraction = [
  {
    imgSrc: animalCat1,
    imgAlt: "A cat picture 1",
  },
  {
    imgSrc: "/assets/img/animal-cat2.jpeg",
    imgAlt: "A cat picture 2",
  },
];

const flipCards = [
  {
    // width: "..."
    // height: "..."
    frontText: "What's the past of ask?",
    backText: "asked",
  },
  {
    frontText: "...  ",
    backText: "...",
  },
  {
    imgSrc: animalCat1,
    imgAlt: "A cat",
  },
];

export default function Mocks() {
  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <div className="line-break">
          {/* Create lesson*/}
          <p className="bold">Create lessons:</p>
          <div>
            <Link href="\materials\mocks\lesson-data\">
              <p>Lesson Data</p>
            </Link>
          </div>

          {/* Componets */}
          <div>
            <p className="bold">Components</p>
            <Link href="/materials/mocks/ContentCard">
              <p>ContentCard</p>
            </Link>
          </div>
        </div>
        <Card bgColor="black" textColor="white">
          <b>Audio Player</b>
        </Card>
        <AudioPlayer audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" />
        <Card bgColor="black" textColor="white">
          <b>Radio</b>
        </Card>
        <Radio questions={radio} />
        <Card bgColor="black" textColor="white">
          <b>Checkbox</b>
        </Card>
        <Card bgColor="black" textColor="white">
          <b>Dropdown</b>
        </Card>
        <Dropdown questions={dropdown} />
        <Card bgColor="black" textColor="white">
          <b>Fill in The Blanks</b>
        </Card>
        <FillInTheBlanks questions={fillInTheBlanks} />
        <Card bgColor="black" textColor="white">
          <b>Dictionary Card</b>
        </Card>
        <p>
          I'm feeling{" "}
          <DictionaryCard
            audioSrc="/a/annoyed.mp3"
            keyword="annoy"
            label="annoyed"
          />{" "}
          today.
        </p>
        <Card bgColor="black" textColor="white">
          <b>Swiper Fraction</b>
        </Card>
        <SwiperFraction images={swiperFraction} />
        <Card bgColor="black" textColor="white">
          <b>Flip Cards</b>
        </Card>
        <FlipCard
          flipCards={flipCards}
          // gridColumnWidth="..."
        />
        <Card bgColor="black" textColor="white">
          <b>Memory Game</b>
        </Card>
      </div>
    </div>
  );
}
