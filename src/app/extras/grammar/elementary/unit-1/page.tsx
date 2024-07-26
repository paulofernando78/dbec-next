import { GrammarInUse } from "@/components/Lessons/GrammarInUse";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const lessons = [
  {
    bgColor: "red",
    section: "A",
    text: "xxx",
    examples: [
      { example: "example" },
      { example: "example" },
      { example: "example" },
    ],
  },
  {
    section: "B",
    text: "xxx",
    examples: [
      { example: "example" },
      { example: "example" },
      { example: "example" },
    ],
  },
  {
    section: "C",
    text: "xxx",
    examples: [
      { example: "example" },
      { example: "example" },
      { example: "example" },
    ],
  },
];

export default function Unit1() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 1 • am/is/are"]}
      />
      <div className="line-break"></div>
      <GrammarInUse lessons={lessons} />
    </>
  );
}
