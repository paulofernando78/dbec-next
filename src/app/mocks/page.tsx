import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { FillInTheBlanks } from "@/components/ExerciseTemplates/FillInTheBlanks/FillInTheBlanks";

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
    afterBlank: "during a clear day.",
    options: ["blue", "red", "green"],
    correctAnswer: ["blue"],
    placeholder: "color",
    // lineBreakAfter: true
  },
  {
    width: "100px",
    beforeBlank: "The sky is",
    afterBlank: "during a clear day.",
    options: ["blue", "red", "green"],
    correctAnswer: ["blue"],
    placeholder: "color"
  },
];

export default function Mocks() {
  return (
    <div>
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
        <FillInTheBlanks questions={fillInTheBlanksExercise} />
        <Card bgColor="black" textColor="white">
          <b>Dictionary Card</b>
        </Card>

        <p>
          I'm feeling <DictionaryCard audioSrc="/g/good.mp3" label="annoy" />{" "}
          today.
        </p>
      </div>
    </div>
  );
}
