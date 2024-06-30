import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "u"',
    sound: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/",
    phonetics: [
      // /uː/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/u.mp3",
          label: "phonetics",
          phonetics: "/uː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/student.mp3",
              keyword: "student",
              label: "st<span class='underline'>u</span>dent",
              phonetics: "/ˈstuː.dənt/",
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
      // /juː/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/xxx.mp3",
          label: "phonetics",
          phonetics: "/juː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/musician.mp3",
              keyword: "musician",
              label: "m<span class='underline'>u</span>sician",
              phonetics: "/mjuːˈzɪʃ.ən/",
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
      // /ʌ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʌ.mp3",
          label: "phonetics",
          phonetics: "/ʌ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dust.mp3",
              keyword: "dust",
              label: "d<span class='underline'>u</span>st",
              phonetics: "/dʌst/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/redundancy.mp3",
              keyword: "redundancy",
              label: "red<span class='underline'>u</span>ndancy",
              phonetics: "/rɪˈdʌn.dən.si/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/u/ultimate.mp3",
              keyword: "ultimate",
              label: "<span class='underline'>u</span>ltimate",
              phonetics: "/ˈʌl.tə.mət/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/u/ultimately.mp3",
              keyword: "ultimately",
              label: "ultimately",
              phonetics: "/ˈʌl.tə.mət.li/",
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
        showHR: true
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
              audioSrc: "/b/business.mp3",
              keyword: "business",
              label: "b<span class='underline'>u</span>siness",
              phonetics: "/ˈbɪz.nɪs/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/busy.mp3",
              keyword: "business",
              label: "b<span class='underline'>u</span>sy",
              phonetics: "/ˈbɪz.i/",
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
      // /ʊ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʊ.mp3",
          label: "phonetics",
          phonetics: "/ʊ/",
        },
        words: [
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
              audioSrc: "/l/lure.mp3",
              keyword: "lure",
              label: "l<span class='underline'>u</span>re",
              phonetics: "/lʊr/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/put.mp3",
              keyword: "put",
              label: "put",
              phonetics: "/pʊt/",
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
      // /jʊ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/xxx.mp3",
          label: "phonetics",
          phonetics: "/ʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cure.mp3",
              keyword: "cure",
              label: "c<span class='underline'>u</span>re",
              phonetics: "/kjʊr/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pure.mp3",
              keyword: "pure",
              label: "p<span class='underline'>u</span>re",
              phonetics: "/pjʊr/",
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

export const LetterU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
