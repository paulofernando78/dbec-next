import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "y"',
    sound: "/i/, /j/, /aɪ/",
    phonetics: [
      // /i/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          // angry
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/angry.mp3",
              keyword: "angry",
              label: "angr<span class='underline'>y</span>",
              phonetics: "/ˈæŋ.ɡri/",
            },
          },
          // anniversary
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "anniversar<span class='underline'>y</span>",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          // army
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/army.mp3",
              keyword: "army",
              label: "arm<span class='underline'>y</span>",
              phonetics: "/ˈɑːr.mi/",
            },
          },
          // badly
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/badly.mp3",
              keyword: "badly",
              label: "badl<span class='underline'>y</span>",
              phonetics: "/ˈbæd.li/",
            },
          },
          // carefully
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/carefully.mp3",
              keyword: "carefully",
              label: "carefull<span class='underline'>y</span>",
              phonetics: "/ˈker.fəl.i/",
            },
          },
          // country
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/country.mp3",
              keyword: "country",
              label: "countr<span class='underline'>y</span>",
              phonetics: "/ˈkʌn.tri/",
            },
          },
          // dirty
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dirty.mp3",
              keyword: "dirty",
              label: "dirt<span class='underline'>y</span>",
              phonetics: "/ˈdɝː.t̬i/",
            },
          },
          // early
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/early.mp3",
              keyword: "early",
              label: "earl<span class='underline'>y</span>",
              phonetics: "/ˈɝː.li/",
            },
          },
          // easy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/easy.mp3",
              keyword: "easy",
              label: "eas<span class='underline'>y</span>",
              phonetics: "/ˈɝː.li/",
            },
          },
          // empty
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/empty.mp3",
              keyword: "empty",
              label: "empt<span class='underline'>y</span>",
              phonetics: "/ˈemp.ti/",
            },
          },
          // every
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/every.mp3",
              keyword: "every",
              label: "ever<span class='underline'>y</span>",
              phonetics: "/ˈev.ri/",
            },
          },
          // friendly
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/friendly.mp3",
              keyword: "friendly",
              label: "friendl<span class='underline'>y</span>",
              phonetics: "/ˈfrend.li/",
            },
          },
          // happy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/happy.mp3",
              keyword: "happy",
              label: "happ<span class='underline'>y</span>",
              phonetics: "/ˈhæp.i/",
            },
          },
          // healthy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/healthy.mp3",
              keyword: "healthy",
              label: "health<span class='underline'>y</span>",
              phonetics: "/ˈhel.θi/",
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
          // hungry
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hungry.mp3",
              keyword: "hungry",
              label: "hungr<span class='underline'>y</span>",
              phonetics: "/ˈhʌŋ.ɡri/",
            },
          },
          // itchy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/itchy.mp3",
              keyword: "itchy",
              label: "itch<span class='underline'>y</span>",
              phonetics: "/ˈɪtʃ.i/",
            },
          },
          // lazy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lazy.mp3",
              keyword: "lazy",
              label: "laz<span class='underline'>y</span>",
              phonetics: "/ˈleɪ.zi/",
            },
          },
          // library
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/library.mp3",
              keyword: "library",
              label: "librar<span class='underline'>y</span>",
              phonetics: "/ˈlaɪ.brer.i/",
            },
          },
          // noisy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/noisy.mp3",
              keyword: "noisy",
              label: "nois<span class='underline'>y</span>",
              phonetics: "/ˈnɔɪ.zi/",
            },
          },
          // savyy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/savvy.mp3",
              keyword: "savvy",
              label: "savv<span class='underline'>y</span>",
              phonetics: "/ˈsæv.i/",
            },
          },
          // slowly
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slowly.mp3",
              keyword: "slowly",
              label: "slowl<span class='underline'>y</span>",
              phonetics: "/ˈsloʊ.li/",
            },
          },
          // strawberry
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/strawberry.mp3",
              keyword: "strawberry",
              label: "strawberr<span class='underline'>y</span>",
              phonetics: "/ˈstrɑːˌber.i/",
            },
          },
          // study
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/study.mp3",
              keyword: "study",
              label: "stud<span class='underline'>y</span>",
              phonetics: "/ˈstʌd.i/",
            },
          },
          // thirsty
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thirsty.mp3",
              keyword: "thirsty",
              label: "thirst<span class='underline'>y</span>",
              phonetics: "/ˈθɝː.sti/",
            },
          },
          // ugly
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/u/ugly.mp3",
              keyword: "ugly",
              label: "ugl<span class='underline'>y</span>",
              phonetics: "/ˈʌɡ.li/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "a fresh strawberry",
            ptExample: "um morango fresco",
          },
          {
            enExample: "...",
            ptExample: "...",
          },
        ],
      },
      // Listen to the difference
      {
        applyGrid: true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences and repeat.",
        words: [
          // easy
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/easy.mp3",
              keyword: "easy",
              label: "eas<span class='underline'>y</span>",
              phonetics: "/ˈiː.zi/",
            },
          },
          // ease
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/ease.mp3",
              keyword: "ease",
              label: "ease",
              phonetics: "/iːz/",
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
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "....",
          },
        ],
      },
      // /j/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/j.mp3",
          label: "phonetics",
          phonetics: "/j/",
        },
        words: [
          // year
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/year.mp3",
              keyword: "year",
              label: "<span class='underline'>y</span>ear",
              phonetics: "/jɪr/",
            },
          },
          // yo-yo
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/yo-yo.mp3",
              keyword: "yo-yo",
              label:
                "<span class='underline'>y</span>o-<span class='underline'>y</span>o",
              phonetics: "/ˈjoʊ.joʊ/",
            },
          },
          // you
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/you.mp3",
              keyword: "you",
              label: "<span class='underline'>y</span>ou",
              phonetics: "/juː/",
            },
          },
          // young
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/young.mp3",
              keyword: "young",
              label: "<span class='underline'>y</span>oung",
              phonetics: "/juː/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "John's 50 (years old).",
            ptExample: "O John tem 50 (anos de idade).",
          },
        ],
      },
      // Listen to the difference
      {
        applyGrid: true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences and repeat.",
        words: [
          // year
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/year.mp3",
              keyword: "year",
              label: "<span class='underline'>y</span>ear",
              phonetics: "/jɪr/",
            },
          },
          // ear
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/ear.mp3",
              keyword: "ear",
              label: "<span class='underline'>ea</span>r",
              phonetics: "/ɪr/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "....",
          },
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
          // achetype
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/archetype.mp3",
              keyword: "archetype",
              label: "archet<span class='underline'>y</span>pe",
              phonetics: "/ˈɑːr.kə.taɪp/",
            },
          },
          // type
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/type.mp3",
              keyword: "type",
              label: "t<span class='underline'>y</span>pe",
              phonetics: "/taɪp/",
            },
          },
          // xylophone
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/x/xylophone.mp3",
              keyword: "xylophone",
              label: "x<span class='underline'>y</span>lophone",
              phonetics: "/ˈzaɪ.lə.foʊn/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "....",
          },
        ],
      },
    ],
  },
];

export const LetterY = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
