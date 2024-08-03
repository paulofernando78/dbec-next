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
              { text: "<span class='underline'>subject + verb (short form)</span>" },
              { text: "I <span class='bod'>am</span> (I'm)" },
              { text: "you <span class='bold'>are</span> (you're)" },
              { text: "he <span class='bold'>is</span> (he's)" },
              { text: "she <span class='bold'>is</span> (she's)" },
              { text: "it <span class='bold'>is</span> (it's)" },
              { text: "we <span class='bold'>are</span> (we're)" },
              { text: "you <span class='bold'>are</span> (you're)" },
              { text: "they <span class='bold'>are</span> (they're)" },
            ],
            examples: [
              {
                example: "I<span class='bold'>'m</span> cold. Can you close the window, please?",
              },
              {
                example: "I<span class='bold'>'m</span> 32 (years old). My sister is 29.",
              },
              {
                example: "It<span class='bold'>'s</span> ten (o'clock). You<span class='bold'>'re</span> late again.",
              },
              {
                example: "Ann and I <span class='bold'>are</span> good friends.",
              },
              {
                example: "Your keys <span class='bold'>are</span> on the table.",
              },
              {
                example: "Steve <span class='bold'>is</span> sick. He<span class='bold'>'s</span> in bed.",
              },
              {
                example: "Jane <span class='bold'>is</span> scared of spiders.",
              },
            ],
          },
          {
            cardLabel: "Negative",
            texts: [
              { text: "<span class='underline'>subject + verb not (short form)</span>" },
              { text: "I <span class='bold'>am not</span> (I'm not)" },
              {
                text: "you <span class='bold'>are not</span> (you're not or you aren't)",
              },
              {
                text: "he <span class='bold'>is not</span> (he's not or he isn't)",
              },
              {
                text: "she span class='bold'>is not</span> (she's not or she isn't)",
              },
              {
                text: "it span class='bold'>is not</span> (it's not or it isn't)",
              },
              {
                text: "we <span class='bold'>are not</span> (we're not or wearen't)",
              },
              {
                text: "you <span class='bold'>are not</span> (you're not or youaren't)",
              },
              {
                text: "they <span class='bold'>are not</span> (they're not or they aren't)",
              },
            ],
            examples: [
              {
                example: "I<span class='bold'>'m</span> not cold. You can open the window.",
              },
              {
                example: "I<span class='bold'>'m</span> not 32 (years old). Actually, I<span>'m</span> 30.",
              },
              {
                example: "Steve <span class='bold'>isn't</span> sick anymore. He<span class='bold'>'s</span> at work now.",
              },
              {
                example:
                  "My brother <span class='bold'>isn't</span> scared of dogs. He<span class='bold'>'s</span> afraid of snakes.",
              },
              {
                example:
                  "It's still ten (o'clock). You<span class='bold'>'re not</span> late.",
              },
              {
                example:
                  "Ann and I <span class='bold'>aren't</span> good friends. She<span class='bold'>'s</span> just an acquaintance.",
              },
              {
                example:
                  "Your keys <span class='bold'>aren't</span> on the table. They<span class='bold'>'re not</span> in your pocket. Check that out!",
              },
            ],
          },
          {
            texts: [{ text: "<span class='bold'>We say it's hot / warm / cold / sunny / dark / etc.</span>" }],
            examples: [
              {
                example: "It<span class='bold'>'s</span> sunny today, but it <span class='bold'>isn't</span> warm.",
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
