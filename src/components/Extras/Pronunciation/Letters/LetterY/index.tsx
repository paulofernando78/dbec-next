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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/angry.mp3",
              keyword: "angry",
              label: "angr<span class='underline'>y</span>",
              phonetics: "/ˈæŋ.ɡri/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/anniversary.mp3",
              keyword: "anniversary",
              label: "anniversar<span class='underline'>y</span>",
              phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/army.mp3",
              keyword: "army",
              label: "arm<span class='underline'>y</span>",
              phonetics: "/ˈɑːr.mi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/badly.mp3",
              keyword: "badly",
              label: "badl<span class='underline'>y</span>",
              phonetics: "/ˈbæd.li/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/carefully.mp3",
              keyword: "carefully",
              label: "carefull<span class='underline'>y</span>",
              phonetics: "/ˈker.fəl.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/country.mp3",
              keyword: "country",
              label: "countr<span class='underline'>y</span>",
              phonetics: "/ˈkʌn.tri/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dirty.mp3",
              keyword: "dirty",
              label: "dirt<span class='underline'>y</span>",
              phonetics: "/ˈdɝː.t̬i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/early.mp3",
              keyword: "early",
              label: "earl<span class='underline'>y</span>",
              phonetics: "/ˈɝː.li/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/easy.mp3",
              keyword: "easy",
              label: "eas<span class='underline'>y</span>",
              phonetics: "/ˈɝː.li/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/empty.mp3",
              keyword: "empty",
              label: "empt<span class='underline'>y</span>",
              phonetics: "/ˈemp.ti/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/every.mp3",
              keyword: "every",
              label: "ever<span class='underline'>y</span>",
              phonetics: "/ˈev.ri/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/friendly.mp3",
              keyword: "friendly",
              label: "friendl<span class='underline'>y</span>",
              phonetics: "/ˈfrend.li/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/happy.mp3",
              keyword: "happy",
              label: "happ<span class='underline'>y</span>",
              phonetics: "/ˈhæp.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/healthy.mp3",
              keyword: "healthy",
              label: "health<span class='underline'>y</span>",
              phonetics: "/ˈhel.θi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/heavy.mp3",
              keyword: "heavy",
              label: "heav<span class='underline'>y</span>",
              phonetics: "/ˈhev.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hungry.mp3",
              keyword: "hungry",
              label: "hungr<span class='underline'>y</span>",
              phonetics: "/ˈhʌŋ.ɡri/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/itchy.mp3",
              keyword: "itchy",
              label: "itch<span class='underline'>y</span>",
              phonetics: "/ˈɪtʃ.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lazy.mp3",
              keyword: "lazy",
              label: "laz<span class='underline'>y</span>",
              phonetics: "/ˈleɪ.zi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/library.mp3",
              keyword: "library",
              label: "librar<span class='underline'>y</span>",
              phonetics: "/ˈlaɪ.brer.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/n/noisy.mp3",
              keyword: "noisy",
              label: "nois<span class='underline'>y</span>",
              phonetics: "/ˈnɔɪ.zi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slowly.mp3",
              keyword: "slowly",
              label: "slowl<span class='underline'>y</span>",
              phonetics: "/ˈsloʊ.li/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/strawberry.mp3",
              keyword: "strawberry",
              label: "strawberr<span class='underline'>y</span>",
              phonetics: "/ˈstrɑːˌber.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thirsty.mp3",
              keyword: "thirsty",
              label: "thirst<span class='underline'>y</span>",
              phonetics: "/ˈθɝː.sti/",
            },
          },
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
            enExample: "a fresh strawberriy",
            ptExample: "um morango fresco",
          },
          {
            enExample: "...",
            ptExample: "...",
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/year.mp3",
              keyword: "year",
              label: "<span class='underline'>y</span>ear",
              phonetics: "/jɪr/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/yo-yo.mp3",
              keyword: "yo-yo",
              label: "<span class='underline'>y</span>o-<span class='underline'>y</span>o",
              phonetics: "/ˈjoʊ.joʊ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/you.mp3",
              keyword: "you",
              label: "<span class='underline'>y</span>ou",
              phonetics: "/juː/",
            },
          },
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
        applyGrid:true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/y/year.mp3",
              keyword: "year",
              label: "<span class='underline'>y</span>ear",
              phonetics: "/jɪr/",
            },
          },
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/archetype.mp3",
              keyword: "archetype",
              label: "archet<span class='underline'>y</span>pe",
              phonetics: "/ˈɑːr.kə.taɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/type.mp3",
              keyword: "type",
              label: "t<span class='underline'>y</span>pe",
              phonetics: "/taɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/x/xylophone.mp3",
              keyword: "xylophone",
              label: "x<span class='underline'>y</span>lophone",
              phonetics: "/ˈzaɪ.lə.foʊn/",
            },
          }
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
