import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "ui"',
    sound: "/ɪ/",
    phonetics: [
     
      {
        beforeText: "...",
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
                audioSrc: "/b/build.mp3",
                keyword: "build",
                label: "b<span class='underline'>ui</span>ld",
                phonetics: "/bɪld/",
              },
            },
          ],
          examples: [
            {
              enExample: "...",
              ptExample: "..."
            },
          ],
        },
    ],
  },
];

export const LetterUI = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
