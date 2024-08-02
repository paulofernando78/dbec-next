import { GrammarInUse } from "@/components/Lessons/GrammarInUse";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

// Imgs
import { cat1 } from "@/img/index";

const lessons = [
  // A
  {
    cardBgColor: "red",
    cardTextColor: "white",
    cardLabel: "A",
    contents: [
      {
        imgSrc: cat1,
        imgAlt: "...",
        imgWidth: "350px",
        text: "xxx",
        subLetter: "...",
        exampleTexts: [
          {
            example: "...",
          },
        ],
        examples: [{ example: "..." }],
      },
    ],
  },
  // B
  
];

export default function Unit2() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 2 • am/is/are (questons)"]}
      />
      <div className="line-break"></div>
      <GrammarInUse lessons={lessons} />
    </>
  );
}
