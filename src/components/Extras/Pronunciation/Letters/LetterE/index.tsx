import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "e"',
    phonetics: [
      {
      beforeText: "...",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/e.mp3",
              label: "phonetics",
              phonetics: "/e/",
            },
          },
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
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
        showHR: true
      },
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/i.mp3",
              label: "phonetics",
              phonetics: "/i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/creative.mp3",
              keyword: "creative",
              label: "cr<span class='underline'>e</span>ative",
              phonetics: "/kriˈeɪ.t̬ɪv/",
            },
          },
        ],
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
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
