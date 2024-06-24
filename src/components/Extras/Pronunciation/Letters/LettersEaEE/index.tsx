import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ea" and "ee"',
    phonetics: [
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/i.mp3",
              label: "phonetics",
              phonetics: "/i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/theater.mp3",
              keyword: "theater",
              label: "th<span class='underline'>ea</span>ter",
              phonetics: "/ˈθiː.ə.t̬ɚ/",
            },
          },
        ],
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
      },
    ],
  },
];

export const LetterEaEE = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
