import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "e"',
    sound: "/e/, /i/, /ɪ/,/ə/ ,/ɝː/",
    phonetics: [
      // /e/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/e.mp3",
          label: "phonetics",
          phonetics: "/e/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/end.mp3",
              keyword: "end",
              label: "<span class='underline'>e</span>nd",
              phonetics: "/end/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/men.mp3",
              keyword: "men",
              label: "m<span class='underline'>e</span>n",
              phonetics: "/men/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          },
        ]
      },
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
              audioSrc: "/c/creative.mp3",
              keyword: "creative",
              label: "cr<span class='underline'>e</span>ative",
              phonetics: "/kriˈeɪ.t̬ɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pediatrics.mp3",
              keyword: "pediatrics",
              label: "p<span class='underline'>e</span>diatrics",
              phonetics: "/ˌpiː.diˈæt.rɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/theater.mp3",
              keyword: "theater",
              label: "th<span class='underline'>e</span>ater",
              phonetics: "/ˈθiː.ə.t̬ɚ/",
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
      // /ə/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ə.mp3",
          label: "phonetics",
          phonetics: "/ə/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/category.mp3",
              keyword: "categpry",
              label: "cat<span class='underline'>e</span>gory",
              phonetics: "/ˈkæt̬.ə.ɡɔːri/",
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/redundancy.mp3",
              keyword: "redundancy",
              label: "r<span class='underline'>e</span>dundancy",
              phonetics: "/rɪˈdʌn.dən.si/",
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
      // /ɝː/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɝ.mp3",
          label: "phonetics",
          phonetics: "/ɝː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/person.mp3",
              keyword: "person",
              label: "p<span class='underline'>er</span>son",
              phonetics: "/ˈpɝː.sən/",
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

export const LetterE = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
