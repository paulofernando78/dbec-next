import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "et"',
    sound: "/eɪ/",
    phonetics: [
      // /eɪ/
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
              audioSrc: "/b/ballet.mp3",
              keyword: "ballet",
              label: "ball<span class='underline'>et</span>",
              phonetics: "/bælˈeɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/buffet.mp3",
              keyword: "buffet",
              label: "buff<span class='underline'>et</span>",
              phonetics: "/bəˈfeɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/filet.mp3",
              keyword: "filet",
              label: "fil<span class='underline'>et</span>",
              phonetics: "/fɪˈleɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sorbet.mp3",
              keyword: "sorbet",
              label: "sorb<span class='underline'>et</span>",
              phonetics: "/sɔːrˈbeɪ/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "a ballet dancer",
            ptExample: "um bailarino(a)",
          },
          {
            enExample: "a buffet wedding",
            ptExample: "um casamento com buffet.",
          },
          {
            enExample: "lemon sorbet",
            ptExample: "sorbet de limão",
          },
        ],
      },
    ],
  },
];

export const LettersET = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
