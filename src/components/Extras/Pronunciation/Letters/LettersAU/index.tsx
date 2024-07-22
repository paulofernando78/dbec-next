import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
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
          // auto
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/auto.mp3",
              keyword: "auto",
              label: "<span class='underline'>au</span>to",
              phonetics: "/ˈɑː.t̬oʊ/",
            },
          },
          // exhausted
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/exhausted.mp3",
              keyword: "exhausted",
              label: "exh<span class='underline'>au</span>sted",
              phonetics: "/ɪɡˈzɑː.stɪd/",
            },
          },
          // fault
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fault.mp3",
              keyword: "fault",
              label: "f<span class='underline'>au</span>lt",
              phonetics: "/fɑːlt/",
            },
          },
          // maul
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maul.mp3",
              keyword: "maul",
              label: "m<span class='underline'>au</span>l",
              phonetics: "/mɑːl/",
            },
          },
          // vaul
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/v/vaul.mp3",
              keyword: "vaul",
              label: "v<span class='underline'>au</span>lt",
              phonetics: "/vɑːlt/",
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

export const LettersAU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
