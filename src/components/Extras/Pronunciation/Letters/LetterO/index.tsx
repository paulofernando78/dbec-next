import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "o"',
    sound: "/ɑː/, /ɔː/, /oʊ/",
    phonetics: [
      // ɑː
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɑ.mp3",
          label: "phonetics",
          phonetics: "/ɑː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/box.mp3",
              keyword: "box",
              label: "b<span class='underline'>o</span>x",
              phonetics: "/bɑːks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hot.mp3",
              keyword: "hot",
              label: "h<span class='underline'>o</span>t",
              phonetics: "/hɑːt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sponsor.mp3",
              keyword: "sponser",
              label: "sp<span class='underline'>o</span>nsor",
              phonetics: "/ˈspɑːn.sɚ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/strong.mp3",
              keyword: "strong",
              label: "str<span class='underline'>o</span>ng",
              phonetics: "/strɑːŋ/",
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
              audioSrc: "/b/boring.mp3",
              keyword: "boring",
              label: "b<span class='underline'>o</span>ring",
              phonetics: "/ˈbɔː.rɪŋ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/short.mp3",
              keyword: "short",
              label: "sh<span class='underline'>o</span>rt",
              phonetics: "/ʃɔːrt/",
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
      // oʊ
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɑ.mp3",
          label: "phonetics",
          phonetics: "/oʊ/",
        },
        words: [
        
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cold.mp3",
              keyword: "cold",
              label: "c<span class='underline'>o</span>ld",
              phonetics: "/koʊld/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/o/old.mp3",
              keyword: "old",
              label: "<span class='underline'>o</span>ld",
              phonetics: "/oʊld/",
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

export const LettersO = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
