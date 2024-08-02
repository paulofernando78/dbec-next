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
        imgWidth: "70%",
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
            texts: [
              { text: "subject + verb (short form)" },
              { text: "I am (I'm)" },
              { text: "you are (you're)" },
              { text: "he is (he's)" },
              { text: "she is (she's)" },
              { text: "it is (it's)" },
              { text: "we are (we're)" },
              { text: "you are (you're)" },
              { text: "they are (they're)" },
            ],
            examples: [
              {
                example: "I'm cold. Can you close the window, please?",
              },
              {
                example: "I'm 32 (years old). My sister is 29.",
              },
              {
                example: "It's ten (o'clock). You're late again.",
              },
              {
                example: "Ann and I are good friends.",
              },
              {
                example: "Your keys are on the table.",
              },
              {
                example: "Steve is sick. He's in bed.",
              },
              {
                example: "Jane is scared of spiders.",
              },
            ],
          },
          {
            cardLabel: "Negative",
            examples: [
              {
                example: "bbb",
              },
              {
                example: "bbb",
              },
            ],
          },
        ],
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
