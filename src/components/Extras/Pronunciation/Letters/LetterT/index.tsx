import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "t"',
    sound: "/t/",
    phonetics: [
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɪ.mp3",
          label: "phonetics",
          phonetics: "/t/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/to.mp3",
              keyword: "to",
              label: "<span class='underline'>t</span>o",
              phonetics: "/tuː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/but.mp3",
              keyword: "but",
              label: "bu<span class='underline'>t</span>",
              phonetics: "/bʌt/",
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

export const LetterT = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
