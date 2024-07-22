import {
  PronunciationCard,
  Pronunciation,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "ai"',
    sound: "/e/",
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
          // pair
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pair.mp3",
              keyword: "pair",
              label: "p<span class='underline'>ai</span>r",
              phonetics: "/per/",
            },
          },
          // stair
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/stair.mp3",
              keyword: "stair",
              label: "st<span class='underline'>ai</span>r",
              phonetics: "/ster/",
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
      // /eɪ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/eɪ.mp3",
          label: "phonetics",
          phonetics: "/eɪ/",
        },
        words: [
          // Cain
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cain.mp3",
              keyword: "cain",
              label: "C<span class='underline'>ai</span>n",
              phonetics: "/keɪn/",
            },
          },
          // main
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/main.mp3",
              keyword: "main",
              label: "m<span class='underline'>ai</span>n",
              phonetics: "/meɪn/",
            },
          },
          // maintain
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maintain.mp3",
              keyword: "maintain",
              label:
                "m<span class='underline'>ai</span>nt<span class='underline'>ai</span>n",
              phonetics: "/meɪnˈteɪn/",
            },
          },
          // maintenace
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maintenance.mp3",
              keyword: "maintenance",
              label: "m<span class='underline'>ai</span>ntenance",
              phonetics: "/ˈmeɪn.tən.əns/",
            },
          },
          // pain
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pain.mp3",
              keyword: "pain",
              label: "p<span class='underline'>ai</span>n",
              phonetics: "/peɪn/",
            },
          },
          // Spain
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/spain.mp3",
              keyword: "spain",
              label: "Sp<span class='underline'>ai</span>n",
              phonetics: "/speɪn/",
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

export const LettersAI = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
