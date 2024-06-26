import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "au"',
    sound: "/ɑː/",
    phonetics: [
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/æ.mp3",
          label: "phonetics",
          phonetics: "/ɑː/",
        },
        beforeText: "Listen and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/exhausted.mp3",
              keyword: "exhausted",
              label: "exh<span class='underline'>au</span>sted",
              phonetics: "/ɪɡˈzɑː.stɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fault.mp3",
              keyword: "fault",
              label: "f<span class='underline'>au</span>lt",
              phonetics: "/fɑːlt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maul.mp3",
              keyword: "maul",
              label: "m<span class='underline'>au</span>l",
              phonetics: "/mɑːl/",
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

export const LettersAU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
