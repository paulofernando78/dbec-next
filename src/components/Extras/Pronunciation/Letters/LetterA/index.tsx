import { Card } from "@/components/Cards/Card";
import {
  PronunciationCard,
  Pronunciation,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "a"',
    sound: "/æ/, /ɑː/, /ə/, /eɪ/",
    phonetics: [
      // /æ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/æ.mp3",
          label: "phonetics",
          phonetics: "/æ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/an.mp3",
              keyword: "an",
              label: "<span class='underline'>a</span>n",
              phonetics: "/æn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "<span class='underline'>a</span>nniversary",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/apple.mp3",
              keyword: "apple",
              label: "<span class='underline'>a</span>pple",
              phonetics: "/ˈæp.əl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bad.mp3",
              keyword: "bad",
              label: "b<span class='underline'>a</span>d",
              phonetics: "/bæd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bat.mp3",
              keyword: "bat",
              label: "b<span class='underline'>a</span>t",
              phonetics: "/bæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cap.mp3",
              keyword: "cap",
              label: "c<span class='underline'>a</span>p",
              phonetics: "/kæp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fat.mp3",
              keyword: "fat",
              label: "f<span class='underline'>a</span>t",
              phonetics: "/fæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hat.mp3",
              keyword: "hat",
              label: "h<span class='underline'>a</span>t",
              phonetics: "/hæt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/man.mp3",
              keyword: "man",
              label: "m<span class='underline'>a</span>n",
              phonetics: "/mæn/",
            },
          },
        ],
        examples: [
          {
            enExample:
              "It's <span class='underline'>a</span>n <span class='underline'>a</span>pple.",
            ptExample: "É uma maçã.",
          },
          {
            enExample:
              "We're going to celebrate our wedding <span class='underline'>a</span>nniversary.",
            ptExample: "Vamos celebrar nosso aniversário de casamento.",
          },
          {
            enExample:
              "He's a b<span class='underline'>a</span>d m<span class='underline'>a</span>n.",
            ptExample: "Ele é um homem mau.",
          },
          {
            enExample:
              "It's a bl<span class='underline'>a</span>ck b<span class='underline'>a</span>t.",
            ptExample: "É um morgego preto.",
          },
          {
            enExample:
              "The c<span class='underline'>a</span>t is f<span class='underline'>a</span>t.",
            ptExample: "O gato está gordo.",
          },
          {
            enExample:
              "Your c<span class='underline'>a</span>p is r<span class='underline'>a</span>d.",
            ptExample: "Seu boné é incrível/radical.",
          },
        ],
        showHR: true,
      },
      // /ɑː/
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
              audioSrc: "/a/all.mp3",
              keyword: "all",
              label: "<span class='underline'>a</span>ll",
              phonetics: "/ɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/ball.mp3",
              keyword: "ball",
              label: "b<span class='underline'>a</span>ll",
              phonetics: "/bɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "call",
              audioSrc: "/c/call.mp3",
              label: "c<span class='underline'>a</span>ll",
              phonetics: "/kɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "fall",
              audioSrc: "/f/fall.mp3",
              label: "f<span class='underline'>a</span>ll",
              phonetics: "/fɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "mall",
              audioSrc: "/m/mall.mp3",
              label: "m<span class='underline'>a</span>ll",
              phonetics: "/mɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "small",
              audioSrc: "/s/small.mp3",
              label: "sm<span class='underline'>a</span>ll",
              phonetics: "/smɑːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "",
              audioSrc: "/s/spa.mp3",
              label: "sp<span class='underline'>a</span>",
              phonetics: "/spɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "tall",
              audioSrc: "/t/tall.mp3",
              label: "t<span class='underline'>a</span>ll",
              phonetics: "/tɑːl/",
            },
          },
        ],
        examples: [
          {
            enExample: "That's all folks!",
            ptExample: "É isso aí pessoal!",
          },
          {
            enExample: "Kick the ball.",
            ptExample: "Chute a bola.",
          },
          {
            enExample: "Can I call you now?",
            ptExample: "Posso te ligar mais agora?",
          },
          {
            enExample: "Let's go to the mall.",
            ptExample: "Vamos para o shopping.",
          },
          {
            enExample: "The building is very tall.",
            ptExample: "O prédio/edifício é muito alto.",
          },

        ],
      },
      // Difference between call and cow
      {
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/call.mp3",
              keyword: "call",
              label: "c<span class='underline'>a</span>ll",
              phonetics: "/kɑːl/",
            },
          },
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
        examples: [
          {
            enExample: "Call me later.",
            ptExample: "Me liga mais tarde.",
          },
          {
            enExample: "Look, there's a cow.",
            ptExample: "Veja, uma vaca!",
          },
        ],
      },
      // /ə/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ə.mp3",
          keyword: "",
          label: "phonetics",
          phonetics: "/ə/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/about.mp3",
              keyword: "about",
              label: "<span class='underline'>a</span>bout",
              phonetics: "/əˈbaʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/adventure.mp3",
              keyword: "about",
              label: "<span class='underline'>a</span>dventure",
              phonetics: "/ədˈven.tʃɚ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/among.mp3",
              keyword: "among",
              label: "<span class='underline'>a</span>mong",
              phonetics: "/.../",
            },
          },
        ],
        examples: [
          {
            enExample: "What is it about?",
            ptExample: "Do que se trata / Sobre o que é?",
          },
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/creative.mp3",
              keyword: "creative",
              label: "cre<span class='underline'>a</span>tive",
              phonetics: "/kriˈeɪ.t̬ɪv/",
            },
          },
        ],
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

export const LetterA = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
