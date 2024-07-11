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
          // an
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/an.mp3",
              keyword: "an",
              label: "<span class='underline'>a</span>n",
              phonetics: "/æn/",
            },
          },
          // anniversary
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "<span class='underline'>a</span>nniversary",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          // apple
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/apple.mp3",
              keyword: "apple",
              label: "<span class='underline'>a</span>pple",
              phonetics: "/ˈæp.əl/",
            },
          },
          // bad
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bad.mp3",
              keyword: "bad",
              label: "b<span class='underline'>a</span>d",
              phonetics: "/bæd/",
            },
          },
          // bat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bat.mp3",
              keyword: "bat",
              label: "b<span class='underline'>a</span>t",
              phonetics: "/bæt/",
            },
          },
          // cap
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cap.mp3",
              keyword: "cap",
              label: "c<span class='underline'>a</span>p",
              phonetics: "/kæp/",
            },
          },
          // fat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fat.mp3",
              keyword: "fat",
              label: "f<span class='underline'>a</span>t",
              phonetics: "/fæt/",
            },
          },
          // fast
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fast.mp3",
              keyword: "fast",
              label: "f<span class='underline'>a</span>st",
              phonetics: "/fæst/",
            },
          },
          // hat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hat.mp3",
              keyword: "hat",
              label: "h<span class='underline'>a</span>t",
              phonetics: "/hæt/",
            },
          },
          // man
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/man.mp3",
              keyword: "man",
              label: "m<span class='underline'>a</span>n",
              phonetics: "/mæn/",
            },
          },
          // sad
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sad.mp3",
              keyword: "sad",
              label: "s<span class='underline'>a</span>d",
              phonetics: "/sæd/",
            },
          },
        ],
        exampleAudioSrc: "/assets/audio/extras/pronunciation/letter-a/æ.mp3",
        examples: [
          {
            enExample:
              "<span class='underline'>a</span>n <span class='underline'>a</span>pple.",
            ptExample: "uma maçã",
          },
          {
            enExample: "a wedding <span class='underline'>a</span>nniversary",
            ptExample: "um aniversário de casamento",
          },
          {
            enExample:
              "a b<span class='underline'>a</span>d m<span class='underline'>a</span>n",
            ptExample: "um homem mau",
          },
          {
            enExample:
              "a bl<span class='underline'>a</span>ck b<span class='underline'>a</span>t",
            ptExample: "um morgego preto",
          },
          {
            enExample:
              "a f<span class='underline'>a</span>t c<span class='underline'>a</span>t",
            ptExample: "um gato gordo",
          },
          {
            enExample:
              "a r<span class='underline'>a</span>d c<span class='underline'>a</span>p",
            ptExample: "um incrível/radical boné",
          },
        ],
      },
      // Difference between
      {
        applyRedDashedBorder: true,
        beforeText: "Listen to the difference, then repeat.",
        words: [
          // have
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/have.mp3",
              keyword: "have",
              label: "have",
              phonetics: "/hæv/",
            },
          },
          // heavy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/heavy.mp3",
              keyword: "heavy",
              label: "heav<span class='underline'>y</span>",
              phonetics: "/ˈhev.i/",
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
          // all
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/all.mp3",
              keyword: "all",
              label: "<span class='underline'>a</span>ll",
              phonetics: "/ɑːl/",
            },
          },
          // ball
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/ball.mp3",
              keyword: "ball",
              label: "b<span class='underline'>a</span>ll",
              phonetics: "/bɑːl/",
            },
          },
          // call
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "call",
              audioSrc: "/c/call.mp3",
              label: "c<span class='underline'>a</span>ll",
              phonetics: "/kɑːl/",
            },
          },
          // fall
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "fall",
              audioSrc: "/f/fall.mp3",
              label: "f<span class='underline'>a</span>ll",
              phonetics: "/fɑːl/",
            },
          },
          // hard
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "hard",
              audioSrc: "/h/hard.mp3",
              label: "h<span class='underline'>a</span>rd",
              phonetics: "/hɑːrd/",
            },
          },
          // mall
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "mall",
              audioSrc: "/m/mall.mp3",
              label: "m<span class='underline'>a</span>ll",
              phonetics: "/mɑːl/",
            },
          },
          // park
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "park",
              audioSrc: "/p/park.mp3",
              label: "p<span class='underline'>a</span>rk",
              phonetics: "/pɑːrk/",
            },
          },
          // small
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "small",
              audioSrc: "/s/small.mp3",
              label: "sm<span class='underline'>a</span>ll",
              phonetics: "/smɑːl/",
            },
          },
          // spa
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              keyword: "",
              audioSrc: "/s/spa.mp3",
              label: "sp<span class='underline'>a</span>",
              phonetics: "/spɑː/",
            },
          },
          // tall
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
        exampleAudioSrc: "",
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
      // Difference between
      {
        applyRedDashedBorder: true,
        beforeText: "Listen to the difference, then repeat.",
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
        exampleAudioSrc: "",
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
          // about
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/about.mp3",
              keyword: "about",
              label: "<span class='underline'>a</span>bout",
              phonetics: "/əˈbaʊt/",
            },
          },
          // alone
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/alone.mp3",
              keyword: "alone",
              label: "<span class='underline'>a</span>lone",
              phonetics: "/əˈloʊn/",
            },
          },
          // adventure
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/adventure.mp3",
              keyword: "about",
              label: "<span class='underline'>a</span>dventure",
              phonetics: "/ədˈven.tʃɚ/",
            },
          },
          // among
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/among.mp3",
              keyword: "among",
              label: "<span class='underline'>a</span>mong",
              phonetics: "/əˈmʌŋ/",
            },
          },
          // Brazil
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/brazil.mp3",
              keyword: "brazil",
              label: "Br<span class='underline'>a</span>zil",
              phonetics: "/brəˈzɪl/",
            },
          },
          // pajamas
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pajamas.mp3",
              keyword: "pajamas",
              label:
                "p<span class='underline'>a</span>jam<span class='underline'>a</span>s",
              phonetics: "/pəˈdʒɑː.məz/",
            },
          },
          // zebra
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/z/zebra.mp3",
              keyword: "zebra",
              label: "zebr<span class='underline'>a</span>",
              phonetics: "/ˈziː.brə/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "What is it about?",
            ptExample: "Do que se trata / É sobre o quê?",
          },
          {
            enExample: "an exciting adventure",
            ptExample: "uma aventura emocionante",
          },
          {
            enExample: "among the crowd",
            ptExample: "entre a multidão",
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
          // creative
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/creative.mp3",
              keyword: "creative",
              label: "cre<span class='underline'>a</span>tive",
              phonetics: "/kriˈeɪ.t̬ɪv/",
            },
          },
          // lazy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lazy.mp3",
              keyword: "lazy",
              label: "l<span class='underline'>a</span>zy",
              phonetics: "/ˈleɪ.zi/",
            },
          },
          // late
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/late.mp3",
              keyword: "late",
              label: "l<span class='underline'>a</span>te",
              phonetics: "/ˈleɪt/",
            },
          },
          // safe
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/safe.mp3",
              keyword: "safe",
              label: "s<span class='underline'>a</span>fe",
              phonetics: "/seɪf/",
            },
          },
          // same
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/same.mp3",
              keyword: "same",
              label: "s<span class='underline'>a</span>me",
              phonetics: "/seɪm/",
            },
          },
          // tame
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/tame.mp3",
              keyword: "tame",
              label: "t<span class='underline'>a</span>me",
              phonetics: "/teɪm/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "a creative person",
            ptExample: "uma pessoa criativa",
          },
          {
            enExample: "a lazy person",
            ptExample: "uma pessoa preguiçosa",
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
