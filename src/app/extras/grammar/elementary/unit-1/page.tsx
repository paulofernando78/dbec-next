import { GrammarInUse } from "@/components/Lessons/GrammarInUse";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

// Imgs
import { lisa } from "@/img/index";

const lessons = [
  // A
  {
    cardBgColor: "red",
    cardTextColor: "white",
    cardLabel: "A",
    contents: [
      {
        imgSrc: lisa,
        imgAlt: "A pic of a girl",
        imgWidth: "350px",
        text: "aaa",
        examples: [
          { example: "I<span class='bold'>'m</span> Lisa." },
          { example: "I<span class='bold'>'m</span> twenty-two (years old)." },
          {
            example:
              "I<span class='bold'>'m</span> American. I<span class='bold'>'m</span> from Chicago.",
          },
          { example: "I<span class='bold'>'m</span> a student." },
          {
            example:
              "My father<span class='bold'>'s</span> a doctor, and my mother<span class='bold'> is</span> a journalist.",
          },
          { example: "My favorite color <span class='bold'>is</span> blue." },
          {
            example:
              "My favorite sports <span class='bold'>are</span> tennis and swimming.",
          },
          { example: "I<span class='bold'>'m</span> interested in art." },
          {
            example:
              "I<span class='bold'>'m</span> not interested in politics.",
          },
        ],
        subContents: [
          {
            cardLabel: "Affirmative",
            text: "aaa",
            examples: [
              {
                example: "bbb"
              }
            ]
          }
        ]
      },
    ],
  },
  // B
];

export default function Unit1() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 1 • am / is / are"]}
      />
      <div className="line-break"></div>
      <GrammarInUse lessons={lessons} />
    </>
  );
}
