import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letter \"oo\"",
    sound: "/ʌ/, /ʊ/, /uː/",
    phonetics: [
      // /ʌ/ 
      {
      beforeText: "Listen and repeat",
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
              audioSrc: "/b/blood.mp3",
              keyword: "blood",
              label: "blood",
              phonetics: "/blʌd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/flood.mp3",
              keyword: "blood",
              label: "flood",
              phonetics: "/flʌd/",
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
      // ʊ
      {
      beforeText: "listen and repeat",
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
              audioSrc: "/c/cook.mp3",
              keyword: "cook",
              label: "cook",
              phonetics: "/kʊk/",
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
      // uː
      {
      beforeText: "Listen and repeat",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʊ.mp3",
          label: "phonetics",
          phonetics: "/uː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/moon.mp3",
              keyword: "moon",
              label: "moon",
              phonetics: "/muːn/",
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

export const LettersOO = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
