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
        applyRedDashedBorder: true,
        beforeText: "Listen to the diffences and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/and.mp3",
              keyword: "and",
              label: "<span class='underline'>a</span>nd",
              phonetics: "/ænd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/end.mp3",
              keyword: "end",
              label: "<span class='underline'>e</span>nd",
              phonetics: "/end/",
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
              audioSrc: "/b/bed.mp3",
              keyword: "bed",
              label: "b<span class='underline'>e</span>d",
              phonetics: "/bed/",
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
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/men.mp3",
              keyword: "men",
              label: "m<span class='underline'>e</span>n",
              phonetics: "/men/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/tan.mp3",
              keyword: "tan",
              label: "t<span class='underline'>a</span>n",
              phonetics: "/tæn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/ten.mp3",
              keyword: "ten",
              label: "t<span class='underline'>e</span>n",
              phonetics: "/ten/",
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
