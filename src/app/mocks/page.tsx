import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlanks } from "@/components/ExerciseTemplates/FillInTheBlanks/FillInTheBlanks";
import Carousel from "@/components/Carousel";

// Images
import { cat } from "@/img/index"

const radioExercise = [
  {
    title: "1. Choose the correct answer.",
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

const fillInTheBlanksExercise = [
  {
    width: "100px",
    title: "1. Fill in the blank with the correct word.",
    beforeBlank: "The sky is",
    placeholder: "color",
    correctAnswer: ["blue"],
    afterBlank: "during a clear day.",
    // lineBreakAfter: true
  },
  {
    width: "100px",
    beforeBlank: "The sky is",
    placeholder: "color",
    correctAnswer: ["dark"],
    afterBlank: "during at night.",
  },
];

export default function Mocks() {
  return (
    <>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <Card bgColor="black" textColor="white">
          <b>Audio Player</b>
        </Card>
        <AudioPlayer audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" />
        <Card bgColor="black" textColor="white">
          <b>Radio</b>
        </Card>
        <Radio questions={radioExercise} />
        <Card bgColor="black" textColor="white">
          <b>Checkbox</b>
        </Card>
        <Card bgColor="black" textColor="white">
          <b>Dropdown</b>
        </Card>
        <Card bgColor="black" textColor="white">
          <b>Fill in The Blanks</b>
        </Card>
        <FillInTheBlanks questions={fillInTheBlanksExercise} display={""} />
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
      </div>
      <Carousel imgSrc={cat} imgAlt=""/>
    </>
  );
}
