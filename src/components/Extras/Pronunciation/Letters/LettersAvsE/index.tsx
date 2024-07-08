import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "a" vs. "e"',
    sound: "/æ/ vs. /e/",
    phonetics: [
      {
        applyGrid: true,
        applyRedDashedBorder: true,
        beforeText: "Listen to the diffences and repeat.",
        words: [
          // and
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/and.mp3",
              keyword: "and",
              label: "<span class='underline'>a</span>nd",
              phonetics: "/ænd/",
            },
          },
          // end
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/end.mp3",
              keyword: "end",
              label: "<span class='underline'>e</span>nd",
              phonetics: "/end/",
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
          // bed
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bed.mp3",
              keyword: "bed",
              label: "b<span class='underline'>e</span>d",
              phonetics: "/bed/",
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
          // bet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bet.mp3",
              keyword: "bet",
              label: "b<span class='underline'>e</span>t",
              phonetics: "/bet/",
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
          // men
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/men.mp3",
              keyword: "men",
              label: "m<span class='underline'>e</span>n",
              phonetics: "/men/",
            },
          },
          // pan
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pan.mp3",
              keyword: "pan",
              label: "p<span class='underline'>a</span>n",
              phonetics: "/pæn/",
            },
          },
          // pen
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/pen.mp3",
              keyword: "pen",
              label: "p<span class='underline'>e</span>n",
              phonetics: "/pen/",
            },
          },
          // rad
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/rad.mp3",
              keyword: "rad",
              label: "r<span class='underline'>a</span>d",
              phonetics: "/ræd/",
            },
          },
          // red
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/red.mp3",
              keyword: "red",
              label: "r<span class='underline'>e</span>d",
              phonetics: "/red/",
            },
          },
          // tan
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/tan.mp3",
              keyword: "tan",
              label: "t<span class='underline'>a</span>n",
              phonetics: "/tæn/",
            },
          },
          // ten
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/ten.mp3",
              keyword: "ten",
              label: "t<span class='underline'>e</span>n",
              phonetics: "/ten/",
            },
          },

          // than
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/than.mp3",
              keyword: "than",
              label: "th<span class='underline'>a</span>n",
              phonetics: "/ðæn/",
            },
          },
          // then
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/then.mp3",
              keyword: "then",
              label: "th<span class='underline'>e</span>n",
              phonetics: "/ðen/",
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

export const LetterAvsE = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
