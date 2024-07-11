import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ear"',
    sound: "/ɝː/",
    phonetics: [
      // /ɝː/
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɝ.mp3",
          label: "phonetics",
          phonetics: "/ɝ/",
        },
        beforeText: "Listen and repeat.",
        words: [
          // learn
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/learn.mp3",
              keyword: "learn",
              label: "l<span class='underline'>ear</span>n",
              phonetics: "/lɝːn/",
            },
          },
          // pearl
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pearl.mp3",
              keyword: "pearl",
              label: "p<span class='underline'>ear</span>l",
              phonetics: "/pɝːl/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          },
        ],
      },
    ],
  },
];

export const LettersEAR = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
