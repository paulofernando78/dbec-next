import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "oo" vs. "u"',
    sound: "/uː/ vs /ʊ/",
    phonetics: [
      {
        applyGrid: true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fool.mp3",
              keyword: "fool",
              label: "f<span class='underline'>oo</span>l",
              phonetics: "/fuːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/full.mp3",
              keyword: "full",
              label: "f<span class='underline'>u</span>ll",
              phonetics: "/fʊl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pool.mp3",
              keyword: "pool",
              label: "p<span class='underline'>oo</span>l",
              phonetics: "/puːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pull.mp3",
              keyword: "pull",
              label: "p<span class='underline'>u</span>ll",
              phonetics: "/pʊl/",
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

export const LetterOOvsU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
