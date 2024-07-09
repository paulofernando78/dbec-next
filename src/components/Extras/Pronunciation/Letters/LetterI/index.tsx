import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "i"',
    sound: "/i/, /ɪ/, /ə/, /aɪ/, /ɑː/",
    phonetics: [
      // /i/
      {
        beforeText: 'When the letter "i" sounds like in portuguese. Listen and repeat.',
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maori.mp3",
              keyword: "maori",
              label: "maor<span class='underline'>i</span>",
              phonetics: "/ˈmaʊ.ri/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/haiti.mp3",
              keyword: "haiti",
              label: "Hait<span class='underline'>i</span>",
              phonetics: "/ˈheɪ.ti/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pediatrics.mp3",
              keyword: "pediatrics",
              label: "ped<span class='underline'>i</span>atrics",
              phonetics: "/ˌpiː.diˈæt.rɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/police.mp3",
              keyword: "police",
              label: "pol<span class='underline'>i</span>ce",
              phonetics: "/pəˈliːs/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/ravine.mp3",
              keyword: "ravine",
              label: "rav<span class='underline'>i</span>ne",
              phonetics: "/rəˈviːn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sashimi.mp3",
              keyword: "sashimi",
              label:
                "sash<span class='underline'>i</span>m<span class='underline'>i</span>",
              phonetics: "/sæʃˈiː.mi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sushi.mp3",
              keyword: "sushi",
              label: "sush<span class='underline'>i</span>",
              phonetics: "/ˈsuː.ʃi/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          },
          {
            enExample: "...",
            ptExample: "...",
          },
          {
            enExample: "...",
            ptExample: "...",
          },
        ],
        showHR: true,
      },
      // /ɪ/
      {
        beforeText:
          'When the letter "i" has a different sound. It\'ll sound close to "ê" in portuguese. Listen and repeat.',
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɪ.mp3",
          label: "phonetics",
          phonetics: "/ɪ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/big.mp3",
              keyword: "big",
              label: "b<span class='underline'>i</span>g",
              phonetics: "/bɪg/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fix.mp3",
              keyword: "fix",
              label: "f<span class='underline'>i</span>x",
              phonetics: "/fɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/disease.mp3",
              keyword: "disease",
              label: "d<span class='underline'>i</span>sease",
              phonetics: "/dɪˈziːz/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/difficult.mp3",
              keyword: "difficult",
              label: "d<span class='underline'>i</span>fficult",
              phonetics: "/ˈdɪf.ə.kəlt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/it.mp3",
              keyword: "it",
              label: "<span class='underline'>i</span>t",
              phonetics: "/ɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live1.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/lɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/milk.mp3",
              keyword: "live",
              label: "m<span class='underline'>i</span>lk",
              phonetics: "/mɪlk/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mint.mp3",
              keyword: "mint",
              label: "m<span class='underline'>i</span>nt",
              phonetics: "/mɪnt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/minute.mp3",
              keyword: "minute",
              label: "m<span class='underline'>i</span>nute",
              phonetics: "/ˈmɪn.ɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sister.mp3",
              keyword: "sister",
              label: "s<span class='underline'>i</span>ster",
              phonetics: "/ˈsɪs.tɚ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/six.mp3",
              keyword: "six",
              label: "s<span class='underline'>i</span>x",
              phonetics: "/sɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/swim.mp3",
              keyword: "swim",
              label: "sw<span class='underline'>i</span>m",
              phonetics: "/swɪm/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thing.mp3",
              keyword: "thing",
              label: "th<span class='underline'>i</span>ng",
              phonetics: "/θɪŋ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/think.mp3",
              keyword: "think",
              label: "th<span class='underline'>i</span>nk",
              phonetics: "/θɪŋk/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
      // /ə/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ə.mp3",
          label: "phonetics",
          phonetics: "/ə/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "ann<span class='underline'>i</span>versary",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/episode.mp3",
              keyword: "episode",
              label: "ep<span class='underline'>i</span>sode",
              phonetics: "/ˈep.ə.soʊd/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
      // /aɪ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/aɪ.mp3",
          label: "phonetics",
          phonetics: "/aɪ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/five.mp3",
              keyword: "five",
              label: "f<span class='underline'>i</span>ve",
              phonetics: "/faɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/k/knight.mp3",
              keyword: "knight",
              label: "kn<span class='underline'>i</span>ght",
              phonetics: "/naɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/light.mp3",
              keyword: "light",
              label: "l<span class='underline'>i</span>ght",
              phonetics: "/laɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live2.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/laɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mind.mp3",
              keyword: "mind",
              label: "m<span class='underline'>i</span>nd",
              phonetics: "/maɪnd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/night.mp3",
              keyword: "night",
              label: "n<span class='underline'>i</span>ght",
              phonetics: "/naɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/q/quiet.mp3",
              keyword: "quiet",
              label: "qu<span class='underline'>i</span>et",
              phonetics: "/ˈkwaɪ.ət/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slide.mp3",
              keyword: "slide",
              label: "sl<span class='underline'>i</span>de",
              phonetics: "/slaɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/swipe.mp3",
              keyword: "swipe",
              label: "sw<span class='underline'>i</span>pe",
              phonetics: " /swaɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/time.mp3",
              keyword: "time",
              label: "t<span class='underline'>i</span>me",
              phonetics: "/taɪm/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/v/vital.mp3",
              keyword: "vital",
              label: "v<span class='underline'>i</span>tal",
              phonetics: "/ˈvaɪ.t̬əl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wide.mp3",
              keyword: "wide",
              label: "w<span class='underline'>i</span>de",
              phonetics: "/waɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wipe.mp3",
              keyword: "wipe",
              label: "w<span class='underline'>i</span>pe",
              phonetics: "/waɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/write.mp3",
              keyword: "weite",
              label: "wr<span class='underline'>i</span>te",
              phonetics: "/raɪt/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
      // /aɪ/
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
              audioSrc: "/l/lingerie.mp3",
              keyword: "lingerie",
              label: "l<span class='underline'>i</span>ngerie",
              phonetics: "/ˌlɑːn.ʒəˈreɪ/",
            },
          }
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
    ],
  },
];

export const LetterI = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
