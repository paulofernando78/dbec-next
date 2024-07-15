import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ng"',
    sound: "/ŋ/",
    phonetics: [
      // /i/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ŋ.mp3",
          label: "phonetics",
          phonetics: "/ŋ/",
        },
        words: [
          // instersting
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/interesting.mp3",
              keyword: "interesting",
              label: "interesti<span class='underline'>ng</span>",
              phonetics: "/ˈɪn.trɪ.stɪŋ/",
            },
          },
          // movie
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/g/going.mp3",
              keyword: "going",
              label: "goi<span class='underline'>ng</span>",
              phonetics: "/ˈɡoʊ.ɪŋ/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
    ],
  },
];

export const LettersNG = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
