import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"oo\"",
    sound: "/ʌ/, /ʊ/, /uː/",
    phonetics: [
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
          // blood
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/blood.mp3",
              keyword: "blood",
              label: "blood",
              phonetics: "/blʌd/",
            },
          },
          // flood
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/flood.mp3",
              keyword: "flood",
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
      beforeText: "listen and repeat.",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʊ.mp3",
          label: "phonetics",
          phonetics: "/ʊ/",
        },
        words: [
          // cook
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cook.mp3",
              keyword: "cook",
              label: "c<span class='underline'>oo</span>k",
              phonetics: "/kʊk/",
            },
          },
          // good
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/g/good.mp3",
              keyword: "good",
              label: "g<span class='underline'>oo</span>d",
              phonetics: "/gʊd/",
            },
          },
          // poor
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/poor.mp3",
              keyword: "poor",
              label: "p<span class='underline'>oo</span>r",
              phonetics: "/pʊr/",
            },
          }
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
      beforeText: "Listen and repeat.",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/u.mp3",
          label: "phonetics",
          phonetics: "/uː/",
        },
        words: [
          // boost
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/boost.mp3",
              keyword: "boost",
              label: "boost",
              phonetics: "/buːst/",
            },
          },
          // moon
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/moon.mp3",
              keyword: "moon",
              label: "moon",
              phonetics: "/muːn/",
            },
          },
          // noon
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/noon.mp3",
              keyword: "noon",
              label: "noon",
              phonetics: "/nuːn/",
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
