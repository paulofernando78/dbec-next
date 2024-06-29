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
              audioSrc: "/c/country.mp3",
              keyword: "country",
              label: "countr<span class='underline'>y</span>",
              phonetics: "/ˈkʌn.tri/",
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
              audioSrc: "/i/itchy.mp3",
              keyword: "itchy",
              label: "itch<span class='underline'>y</span>",
              phonetics: "/ˈɪtʃ.i/",
            },
          },
        ],
        examples: [
          {
            enExample: "Let's go to Disney Land to see Mickey Mouse.",
            ptExample: "...",
          },
        ],
        showHR: true
      },
      // /j/
      {
        beforeText: "***",
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
        ],
        examples: [
          {
            enExample: "John's 50 (years old).",
            ptExample: "O John tem 50 (anos de idade).",
          },
        ],
        showHR: true
      },
      // Listen to the difference
      {
        applyGrid:true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences.",
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
        examples: [
          {
            enExample: "...",
            ptExample: "....",
          },
        ],
      },
      // /aɪ/
      {
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
          }
        ],
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
