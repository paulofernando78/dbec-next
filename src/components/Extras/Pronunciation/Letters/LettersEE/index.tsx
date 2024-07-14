import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"ee\"",
    sound: "/i/, /ɪ/",
    phonetics: [
      // /i/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          // coffee
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/coffee.mp3",
              keyword: "coffee",
              label: "coff<span class='underline'>ee</span>",
              phonetics: "/ˈkɑː.fi/",
            },
          },
          // queen
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/q/queen.mp3",
              keyword: "queen",
              label: "qu<span class='underline'>ee</span>n",
              phonetics: "/kwiːn/",
            },
          },
          // sweet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sweet.mp3",
              keyword: "sweet",
              label: "sw<span class='underline'>ee</span>t",
              phonetics: "/ˈswiːt/",
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
      // /ɪ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɪ.mp3",
          label: "phonetics",
          phonetics: "/ɪ/",
        },
        words: [
          // engineer
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/engineer.mp3",
              keyword: "engineer",
              label: "engin<span class='underline'>ee</span>r",
              phonetics: " /ˌen.dʒɪˈnɪr/",
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
      }
    ],
  },
];

export const LettersEE = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
