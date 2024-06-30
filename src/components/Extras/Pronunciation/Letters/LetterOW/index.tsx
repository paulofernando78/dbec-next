import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"ow\"",
    sound: "/oʊ/, /aʊ/",
    phonetics: [
      {
        beforeText: "Listen and repeat.",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/xxx.mp3",
          label: "phonetics",
          phonetics: "/oʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/low.mp3",
              keyword: "low",
              label: "l<span class='underline'>ow</span>",
              phonetics: "/loʊ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/narrow.mp3",
              keyword: "narrow",
              label: "narr<span class='underline'>ow</span>",
              phonetics: "/ˈner.oʊ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/shallow.mp3",
              keyword: "shallow",
              label: "shall<span class='underline'>ow</span>",
              phonetics: "/ˈʃæl.oʊ/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
      },
      // /aʊ/
      {
        beforeText: "Listen and repeat.",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/xxx.mp3",
          label: "phonetics",
          phonetics: "/aʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cow.mp3",
              keyword: "cow",
              label: "c<span class='underline'>ow</span>",
              phonetics: "/kaʊ/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
      },
    ],
  },
];

export const LettersOW = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />

      </div>
    </>
  );
};
