import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ch"',
    sound: "/tʃ/, /ʃ/, /k/",
    phonetics: [
      // /tʃ/
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/tʃ.mp3",
          label: "phonetics",
          phonetics: "/tʃ/",
        },
        beforeText: "Listen and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/beach.mp3",
              keyword: "beach",
              label: "bea<span class='underline'>ch</span>",
              phonetics: "/biːtʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/catch.mp3",
              keyword: "catch",
              label: "cat<span class='underline'>ch</span>",
              phonetics: "/kætʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chair.mp3",
              keyword: "chair",
              label: "<span class='underline'>ch</span>air",
              phonetics: "/tʃer/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cheese.mp3",
              keyword: "cheese",
              label: "<span class='underline'>ch</span>eese",
              phonetics: "/tʃiːz/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/church.mp3",
              keyword: "church",
              label: "<span class='underline'>ch</span>urch",
              phonetics: "/tʃɝːtʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/coach.mp3",
              keyword: "coach",
              label: "coa<span class='underline'>ch</span>",
              phonetics: "/koʊtʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/french.mp3",
              keyword: "french",
              label: "Fren<span class='underline'>ch</span>",
              phonetics: "/frentʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lunch.mp3",
              keyword: "lunch",
              label: "lun<span class='underline'>ch</span>",
              phonetics: "/lʌntʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/match.mp3",
              keyword: "match",
              label: "mat<span class='underline'>ch</span>",
              phonetics: "/mætʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/patch.mp3",
              keyword: "patch",
              label: "pat<span class='underline'>ch</span>",
              phonetics: "/pætʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/rich.mp3",
              keyword: "rich",
              label: "ri<span class='underline'>ch</span>",
              phonetics: "/rɪtʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/watch.mp3",
              keyword: "watch",
              label: "wat<span class='underline'>ch</span>",
              phonetics: "/wɑːtʃ/",
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
      // /ʃ/
      {
        applyRedDashedBorder: true,
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/k.mp3",
          label: "phonetics",
          phonetics: "/ʃ/",
        },
        beforeText: "Listen and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/champagne.mp3",
              keyword: "champagne",
              label: "<span class='underline'>ch</span>ampagne",
              phonetics: "/ʃæmˈpeɪn/",
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
      // /k/
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/k.mp3",
          label: "phonetics",
          phonetics: "/k/",
        },
        beforeText: "Listen and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/technology.mp3",
              keyword: "technology",
              label: "te<span class='underline'>ch</span>nology",
              phonetics: "/tekˈnɑː.lə.dʒi/",
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
    ],
  },
];

export const LettersCH = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
