import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ie"',
    sound: "/i/, /aɪ/",
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/z/zombie.mp3",
              keyword: "zombie",
              label: "zomb<span class='underline'>ie</span>",
              phonetics: "/ˈzɑːm.bi/",
            },
          }
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
      // /aɪ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/aɪ.mp3",
          label: "phonetics",
          phonetics: "/aɪ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lie.mp3",
              keyword: "lie",
              label: "l<span class='underline'>ie</span>",
              phonetics: "/laɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pie.mp3",
              keyword: "pie",
              label: "p<span class='underline'>ie</span>",
              phonetics: "/paɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/tie.mp3",
              keyword: "tie",
              label: "t<span class='underline'>ie</span>",
              phonetics: "/taɪ/",
            },
          }
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

export const LetterIE = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
