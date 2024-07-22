import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "e"',
    sound: "/e/, /i/, /ɪ/,/ə/",
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
          // end
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/end.mp3",
              keyword: "end",
              label: "<span class='underline'>e</span>nd",
              phonetics: "/end/",
            },
          },
          // men
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/men.mp3",
              keyword: "men",
              label: "m<span class='underline'>e</span>n",
              phonetics: "/men/",
            },
          },
          // pet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pet.mp3",
              keyword: "pet",
              label: "p<span class='underline'>e</span>t",
              phonetics: "/pet/",
            },
          },
          // well
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/well.mp3",
              keyword: "well",
              label: "w<span class='underline'>e</span>ll",
              phonetics: "/wel/",
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
          // creative
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/creative.mp3",
              keyword: "creative",
              label: "cr<span class='underline'>e</span>ative",
              phonetics: "/kriˈeɪ.t̬ɪv/",
            },
          },
          // pediatrics
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pediatrics.mp3",
              keyword: "pediatrics",
              label: "p<span class='underline'>e</span>diatrics",
              phonetics: "/ˌpiː.diˈæt.rɪks/",
            },
          },
          // theater
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/theater.mp3",
              keyword: "theater",
              label: "th<span class='underline'>e</span>ater",
              phonetics: "/ˈθiː.ə.t̬ɚ/",
            },
          },
          // zebra
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/z/zebra.mp3",
              keyword: "zebra",
              label: "z<span class='underline'>e</span>bra",
              phonetics: "/ˈziː.brə/",
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
          // here
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/here.mp3",
              keyword: "here",
              label: "h<span class='underline'>e</span>re",
              phonetics: "/hɪr/",
            },
          },
          // redundancy
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
          // category
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
