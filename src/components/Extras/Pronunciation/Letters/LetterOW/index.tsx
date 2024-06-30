import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letter \"ow\"",
    sound: "...",
    phonetics: [
      {
        beforeText: "Listen and repeat",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/xxx.mp3",
          label: "phonetics",
          phonetics: "/aʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cow.mp3",
              keyword: "cow",
              label: "c<span class='underline'>ow</span>",
              phonetics: "/.../",
            },
          },
        ],
        exampleAudioSrc: "",
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

export const LettersOW = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />

      </div>
    </>
  );
};
