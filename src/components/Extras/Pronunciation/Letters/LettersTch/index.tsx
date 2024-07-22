import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "(t)ch"',
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
          // beach
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/beach.mp3",
              keyword: "beach",
              label: "bea<span class='underline'>ch</span>",
              phonetics: "/biːtʃ/",
            },
          },
          // catch
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/catch.mp3",
              keyword: "catch",
              label: "cat<span class='underline'>ch</span>",
              phonetics: "/kætʃ/",
            },
          },
          // chair
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chair.mp3",
              keyword: "chair",
              label: "<span class='underline'>ch</span>air",
              phonetics: "/tʃer/",
            },
          },
          // channel
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/channel.mp3",
              keyword: "channel",
              label: "<span class='underline'>ch</span>annel",
              phonetics: "/ˈtʃæn.əl/",
            },
          },
          // cheese
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cheese.mp3",
              keyword: "cheese",
              label: "<span class='underline'>ch</span>eese",
              phonetics: "/tʃiːz/",
            },
          },
          // church
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/church.mp3",
              keyword: "church",
              label: "<span class='underline'>ch</span>urch",
              phonetics: "/tʃɝːtʃ/",
            },
          },
          // coach
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/coach.mp3",
              keyword: "coach",
              label: "coa<span class='underline'>ch</span>",
              phonetics: "/koʊtʃ/",
            },
          },
          // french
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/french.mp3",
              keyword: "french",
              label: "Fren<span class='underline'>ch</span>",
              phonetics: "/frentʃ/",
            },
          },
          // lunch
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lunch.mp3",
              keyword: "lunch",
              label: "lun<span class='underline'>ch</span>",
              phonetics: "/lʌntʃ/",
            },
          },
          // match
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/match.mp3",
              keyword: "match",
              label: "mat<span class='underline'>ch</span>",
              phonetics: "/mætʃ/",
            },
          },
          // patch
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/patch.mp3",
              keyword: "patch",
              label: "pat<span class='underline'>ch</span>",
              phonetics: "/pætʃ/",
            },
          },
          // rich
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/rich.mp3",
              keyword: "rich",
              label: "ri<span class='underline'>ch</span>",
              phonetics: "/rɪtʃ/",
            },
          },
          // watch
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
      // French words
      {
        applyRedDashedBorder: true,
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/k.mp3",
          label: "phonetics",
          phonetics: "/ʃ/",
        },
        beforeText: "These words are french. Listen and repeat.",
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

export const LettersTch = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
