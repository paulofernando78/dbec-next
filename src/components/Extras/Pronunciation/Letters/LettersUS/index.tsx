import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"us\"",
    sound: "/əs/",
    phonetics: [
      {
      beforeText: "Listen and repeat.",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/əs.mp3",
          label: "phonetics",
          phonetics: "/əs/",
        },
        words: [
          // dangerous
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/focus.mp3",
              keyword: "focus",
              label: "foc<span class='underline'>us</span>",
              phonetics: "/ˈfoʊ.kəs/",
            },
          }
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
      }
    ],
  },
];

export const LettersUS = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
