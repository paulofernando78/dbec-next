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
          // maori
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maori.mp3",
              keyword: "maori",
              label: "maor<span class='underline'>i</span>",
              phonetics: "/ˈmaʊ.ri/",
            },
          },
          // Haiti
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/haiti.mp3",
              keyword: "haiti",
              label: "Hait<span class='underline'>i</span>",
              phonetics: "/ˈheɪ.ti/",
            },
          },
          // pediatrics
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pediatrics.mp3",
              keyword: "pediatrics",
              label: "ped<span class='underline'>i</span>atrics",
              phonetics: "/ˌpiː.diˈæt.rɪks/",
            },
          },
          // police
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/police.mp3",
              keyword: "police",
              label: "pol<span class='underline'>i</span>ce",
              phonetics: "/pəˈliːs/",
            },
          },
          // ravine
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/ravine.mp3",
              keyword: "ravine",
              label: "rav<span class='underline'>i</span>ne",
              phonetics: "/rəˈviːn/",
            },
          },
          // sashimi
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
          // sushi
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
          // big
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/big.mp3",
              keyword: "big",
              label: "b<span class='underline'>i</span>g",
              phonetics: "/bɪg/",
            },
          },
          // fix
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fix.mp3",
              keyword: "fix",
              label: "f<span class='underline'>i</span>x",
              phonetics: "/fɪks/",
            },
          },
          // disease
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/disease.mp3",
              keyword: "disease",
              label: "d<span class='underline'>i</span>sease",
              phonetics: "/dɪˈziːz/",
            },
          },
          // difficult
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/difficult.mp3",
              keyword: "difficult",
              label: "d<span class='underline'>i</span>fficult",
              phonetics: "/ˈdɪf.ə.kəlt/",
            },
          },
          // it
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/it.mp3",
              keyword: "it",
              label: "<span class='underline'>i</span>t",
              phonetics: "/ɪt/",
            },
          },
          // live
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live1.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/lɪv/",
            },
          },
          // milk
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/milk.mp3",
              keyword: "live",
              label: "m<span class='underline'>i</span>lk",
              phonetics: "/mɪlk/",
            },
          },
          // mint
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mint.mp3",
              keyword: "mint",
              label: "m<span class='underline'>i</span>nt",
              phonetics: "/mɪnt/",
            },
          },
          // minute
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/minute.mp3",
              keyword: "minute",
              label: "m<span class='underline'>i</span>nute",
              phonetics: "/ˈmɪn.ɪt/",
            },
          },
          // sister
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sister.mp3",
              keyword: "sister",
              label: "s<span class='underline'>i</span>ster",
              phonetics: "/ˈsɪs.tɚ/",
            },
          },
          // six
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/six.mp3",
              keyword: "six",
              label: "s<span class='underline'>i</span>x",
              phonetics: "/sɪks/",
            },
          },
          // swim
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/swim.mp3",
              keyword: "swim",
              label: "sw<span class='underline'>i</span>m",
              phonetics: "/swɪm/",
            },
          },
          // thin
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thin.mp3",
              keyword: "thin",
              label: "th<span class='underline'>i</span>n",
              phonetics: "/θɪn/",
            },
          },
          // thing
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thing.mp3",
              keyword: "thing",
              label: "th<span class='underline'>i</span>ng",
              phonetics: "/θɪŋ/",
            },
          },
          // thank
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
          // anniversary
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "ann<span class='underline'>i</span>versary",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          // episode
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
          // five
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/five.mp3",
              keyword: "five",
              label: "f<span class='underline'>i</span>ve",
              phonetics: "/faɪv/",
            },
          },
          // knight
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/k/knight.mp3",
              keyword: "knight",
              label: "kn<span class='underline'>i</span>ght",
              phonetics: "/naɪt/",
            },
          },
          // light
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/light.mp3",
              keyword: "light",
              label: "l<span class='underline'>i</span>ght",
              phonetics: "/laɪt/",
            },
          },
          // live
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live2.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/laɪv/",
            },
          },
          // mind
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mind.mp3",
              keyword: "mind",
              label: "m<span class='underline'>i</span>nd",
              phonetics: "/maɪnd/",
            },
          },
          // night
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/night.mp3",
              keyword: "night",
              label: "n<span class='underline'>i</span>ght",
              phonetics: "/naɪt/",
            },
          },
          // pride
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pride.mp3",
              keyword: "pride",
              label: "pr<span class='underline'>i</span>de",
              phonetics: "/praɪd/",
            },
          },
          // quiet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/q/quiet.mp3",
              keyword: "quiet",
              label: "qu<span class='underline'>i</span>et",
              phonetics: "/ˈkwaɪ.ət/",
            },
          },
          // quiet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/ride.mp3",
              keyword: "ride",
              label: "r<span class='underline'>i</span>de",
              phonetics: "/raɪd/",
            },
          },
          // slide
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slide.mp3",
              keyword: "slide",
              label: "sl<span class='underline'>i</span>de",
              phonetics: "/slaɪd/",
            },
          },
          // swipe
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/swipe.mp3",
              keyword: "swipe",
              label: "sw<span class='underline'>i</span>pe",
              phonetics: " /swaɪp/",
            },
          },
          // time
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/time.mp3",
              keyword: "time",
              label: "t<span class='underline'>i</span>me",
              phonetics: "/taɪm/",
            },
          },
          // vital
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/v/vital.mp3",
              keyword: "vital",
              label: "v<span class='underline'>i</span>tal",
              phonetics: "/ˈvaɪ.t̬əl/",
            },
          },
          // wide
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wide.mp3",
              keyword: "wide",
              label: "w<span class='underline'>i</span>de",
              phonetics: "/waɪd/",
            },
          },
          // wipe
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wipe.mp3",
              keyword: "wipe",
              label: "w<span class='underline'>i</span>pe",
              phonetics: "/waɪp/",
            },
          },
          // write
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
          // lingerie
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
