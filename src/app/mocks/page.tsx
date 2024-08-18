import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { AudioPlayer } from "@/components/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlank } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import SwiperFraction, {
  SwiperFractionData,
} from "@/components/Swiper/Fraction";

// Images
import { cat1, cat2, cat3 } from "@/img/index";
import { FlipCard } from "@/components/Cards/Flip";
import { Dropdown } from "@/components/ExerciseTemplates/Dropdown";
import Link from "next/link";

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
    subtitle: "Subtitle",
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
  }
];

const fillInTheBlanks = [
  {
    options: true,
    width: "100px",
    title: "1. Fill in the blank with the correct word.",
    beforeBlank: "The sky is",
    placeholder: "color",
    correctAnswer: ["blue"],
    afterBlank: "during a clear day.",
    // lineBreakAfter: true
  },
  {
    options: true,
    width: "100px",
    beforeBlank: "The sky is",
    placeholder: "color",
    correctAnswer: ["dark"],
    afterBlank: "during at night.",
  },
];

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
    frontText: "What's the past of ask?",
    backText: "asked",
  },
  {
    frontText:
      '...  ',
    backText: "...",
  },
  {
    imgSrc: cat1,
    imgAlt: "A cat",
  },
];

export default function Mocks() {
  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <div className="line-break">

          {/* Lessons */}
          <div>
            <p className="bold">Lessons</p>
            <Link href="/mocks/vocabulary-grammar/">
              <p>Vocabulary Grammar</p>
            </Link>
            <Link href="/mocks/listening/">
              <p>Listening</p>
            </Link>
          </div>
         <div>

          {/* Extras */}
          <p className="bold">Extras</p>
            <Link href="/mocks/grammar-in-use/elementary">
              <p>Grammar in Use • Elementary</p>
            </Link>
            <Link href="/mocks/grammar-in-use/intermediate">
              <p>Grammar in Use • Intermediate</p>
            </Link>
         </div>

         {/* Componets */}
         <div>
          <p className="bold">Components</p>
          <Link href="/mocks/ContentCard">
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
        <FillInTheBlank questions={fillInTheBlanks} />
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
          <b>Slider Fraction</b>
        </Card>
        <SwiperFraction images={swiperFraction} />
        <Card bgColor="black" textColor="white">
          <b>Flip Cards</b>
        </Card>
        <FlipCard flipCards={flipCards} />
        <Card bgColor="black" textColor="white">
          <b>Memory Game</b>
        </Card>
      </div>
    </div>
  );
}
