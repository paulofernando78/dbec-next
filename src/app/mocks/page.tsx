import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Card/Card";
import { AudioPlayer } from "@/components/Audioplayer/Audioplayer";
import { Radio } from "@/components/ExerciseTemplates/Radio/Radio";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

// const radio = [
//     {
//         title: "1. Choose the correct answer.",
//         question: "1. Question",
//         options: [
//             { id: "1", option: "Answer 1" },
//             { id: "2", option: "Answer 2" },
//             { id: "3", option: "Answer 3" },
//         ],
//         correctOptionId: 1
//   }
// ];

// const radio = [
//   {
//     title: "1. Choose the correct answer.",
//     question: "1. Question",
//     options: ["Answer 1", "Answer 2", "Answer 3"],
//     correctOptionId: 1,
//   },
// ];

const radio = [
  {
    title: "1. Choose the correct answer.",
    question: "1. Question",
    options: [
        { isCorrect: false, label: "Answer 1" },
        { isCorrect: true, label: "Answer 2" },
        { isCorrect: false, label: "Answer 3" },
    ],
  },
];

export default function Mocks() {
  return (
    <div>
      <Whiteboard title="Mocks" />
      <div className="line-break">
        <Card>
          <b>Audio Player</b>
        </Card>
        <AudioPlayer audioSrc="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg" />
        <Card>
          <b>Radio</b>
        </Card>
        <Radio questions={radio} />
        <Card>
          <b>Checkbox</b>
        </Card>
        <Card>
          <b>Dropdown</b>
        </Card>
        <Card>
          <b>Fill in The Blanks</b>
        </Card>
        <Card>
          <b>Dictionary Card</b>
        </Card>

        <p>
          I'm feeling <DictionaryCard audioSrc="/g/good.mp3" label="good" />{" "}
          today.
        </p>
      </div>
    </div>
  );
}
