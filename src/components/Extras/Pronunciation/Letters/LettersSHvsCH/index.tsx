import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"sh\" vs. \"ch\"",
    phonetics: [
      {
        applyGrid: true,
        beforeText: "Listen to the differences.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wash.mp3",
              keyword: "wash",
              label: "wa<span class='underline'>sh</span>",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/watch.mp3",
              keyword: "watch",
              label: "wat<span class='underline'>ch</span>",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wash.mp3",
              keyword: "wash",
              label: "wa<span class='underline'>sh</span>",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/watch.mp3",
              keyword: "watch",
              label: "wat<span class='underline'>ch</span>",
              phonetics: "/.../",
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

export const LettersSHvsCH = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
