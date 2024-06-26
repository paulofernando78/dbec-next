import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "ie"',
    phonetics: [
      {
        beforeText: "...",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cookie.mp3",
              keyword: "cookie",
              label: "cook<span class='underline'>ie</span>",
              phonetics: "/ˈkʊk.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/movie.mp3",
              keyword: "movie",
              label: "mov<span class='underline'>ie</span>",
              phonetics: "/ˈmuː.vi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/series.mp3",
              keyword: "series",
              label: "ser<span class='underline'>ie</span>s",
              phonetics: "/ˈsɪr.iːz/",
            },
          },
        ],
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          },
          {
            enExample: "...",
            ptExample: "...",
          },
          {
            enExample: "...",
            ptExample: "...",
          },
        ],
      },
    ],
  },
];

export const LetterIE = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
