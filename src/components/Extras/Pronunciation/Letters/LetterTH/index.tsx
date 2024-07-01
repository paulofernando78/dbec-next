import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "th"',
    sound: "/θ/, /ð/",
    phonetics: [
      // /θ/
      {
        beforeText: "That's when \"th\" doesn't vibrate. Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/θ.mp3",
          label: "phonetics",
          phonetics: "/θ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thick.mp3",
              keyword: "thick",
              label: "<span class='underline'>th</span>ick",
              phonetics: "/θɪk/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thank.mp3",
              keyword: "thank",
              label: "<span class='underline'>th</span>ank",
              phonetics: "/θæŋk/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thing.mp3",
              keyword: "thing",
              label: "<span class='underline'>th</span>ing",
              phonetics: "/θɪŋ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/think.mp3",
              keyword: "think",
              label: "<span class='underline'>th</span>ink",
              phonetics: "/θɪŋk/",
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
      // /ð/
      {
        beforeText: "That's when \"th\" vibrates. Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɪ.mp3",
          label: "phonetics",
          phonetics: "/t/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/the1.mp3",
              keyword: "the",
              label: "<span class='underline'>th</span>e",
              phonetics: "/ðə/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/the2.mp3",
              keyword: "the",
              label: "<span class='underline'>th</span>e",
              phonetics: "/ðiː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/with.mp3",
              keyword: "with",
              label: "wi<span class='underline'>th</span>",
              phonetics: "/wɪð/",
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

export const LetterTH = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
