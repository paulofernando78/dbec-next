import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "oa"',
    sound: "/ɔː/",
    phonetics: [
      // /ɔː/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɔ.mp3",
          label: "phonetics",
          phonetics: "/ɔː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/boar.mp3",
              keyword: "boar",
              label: "b<span class='underline'>oa</span>r",
              phonetics: "/bɔːr/",
            },
          }
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          },
        ],
      },
      // /oʊ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/oʊ.mp3",
          label: "phonetics",
          phonetics: "/oʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/boat.mp3",
              keyword: "boat",
              label: "b<span class='underline'>oa</span>t",
              phonetics: "/boʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/toad.mp3",
              keyword: "toad",
              label: "t<span class='underline'>oa</span>d",
              phonetics: "/toʊd/",
            },
          }
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

export const LettersOA = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
