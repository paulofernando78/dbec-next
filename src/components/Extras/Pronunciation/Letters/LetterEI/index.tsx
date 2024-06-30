import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ei"',
    sound: "/eɪ/",
    phonetics: [
      // /e/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/eɪ.mp3",
          label: "phonetics",
          phonetics: "/eɪ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/weigh.mp3",
              keyword: "eight",
              label: "<span class='underline'>ei</span>ght",
              phonetics: "/eɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/weigh.mp3",
              keyword: "weigh",
              label: "w<span class='underline'>ei</span>gh",
              phonetics: "/weɪ/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "He's only eight (years old).",
            ptExample: "Ele tem apenas oito anos de idade.",
          },
          {
            enExample: "How much do you weigh?",
            ptExample: "Quanto você pesa/",
          }
        ],
      },
    ],
  },
];

export const LetterEI = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
