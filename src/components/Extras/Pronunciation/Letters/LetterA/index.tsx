import { Card } from "@/components/Cards/Card";
import {
  PronunciationCard,
  Pronunciation,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "a"',
    phonetics: [
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/æ.mp3",
              label: "phonetics",
              phonetics: "/æ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/an.mp3",
              label: "<span class='underline'>a</span>n",
              phonetics: "/æn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              label: "<span class='underline'>a</span>nniversary",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/apple.mp3",
              label: "<span class='underline'>a</span>pple",
              phonetics: "/ˈæp.əl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bad.mp3",
              label: "b<span class='underline'>a</span>d",
              phonetics: "/bæd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bat.mp3",
              label: "b<span class='underline'>a</span>t",
              phonetics: "/bæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cap.mp3",
              label: "c<span class='underline'>a</span>p",
              phonetics: "/kæp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fat.mp3",
              label: "f<span class='underline'>a</span>t",
              phonetics: "/fæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hat.mp3",
              label: "h<span class='underline'>a</span>t",
              phonetics: "/hæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/man.mp3",
              label: "m<span class='underline'>a</span>n",
              phonetics: "/mæn/",
            },
          },
        ],
        examples: [
          {
            enExample: "It's <span class='underline'>a</span>n <span class='underline'>a</span>pple.",
            ptExample: "É uma maçã."
          },
          {
            enExample: "We're going to celebrate our wedding <span class='underline'>a</span>nniversary.",
            ptExample: "Vamos celebrar nosso aniversário de casamento."
          },
          {
            enExample: "He's a b<span class='underline'>a</span>d m<span class='underline'>a</span>n.",
            ptExample: "Ele é um homem mau."
          },
          {
            enExample: "It's a bl<span class='underline'>a</span>ck b<span class='underline'>a</span>t.",
            ptExample: "É um morgego preto."
          },
          {
            enExample: "The c<span class='underline'>a</span>t is f<span class='underline'>a</span>t.",
            ptExample: "O gato está gordo."
          },
          {
            enExample: "Your c<span class='underline'>a</span>p is r<span class='underline'>a</span>d.",
            ptExample: "Seu boné é incrível/radical."
          },
        ],
        showHR: true,
      },
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/ɑ.mp3",
              label: "phonetics",
              phonetics: "/ɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/ball.mp3",
              label: "b<span class='underline'>a</span>ll",
              phonetics: "/bɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/call.mp3",
              label: "c<span class='underline'>a</span>ll",
              phonetics: "/kɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fall.mp3",
              label: "f<span class='underline'>a</span>ll",
              phonetics: "/fɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mall.mp3",
              label: "m<span class='underline'>a</span>ll",
              phonetics: "/mɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/small.mp3",
              label: "sm<span class='underline'>a</span>ll",
              phonetics: "/smɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/spa.mp3",
              label: "sp<span class='underline'>a</span>",
              phonetics: "/spɑː/",
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
      {
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/call.mp3",
              label: "call",
              phonetics: "/kɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cow.mp3",
              label: "cow",
              phonetics: "/kaʊ/",
            },
          },
        ],
        examples: [
          {
            enExample: "Call me later.",
            ptExample: "..."
          },
          {
            enExample: "Look, there's a cow.",
            ptExample: "..."
          }
        ]
      },
    ],
  },
];

export const LetterA = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
