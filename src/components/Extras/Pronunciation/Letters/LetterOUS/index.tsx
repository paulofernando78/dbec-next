import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letter \"ous\"",
    sound: "/əs/",
    phonetics: [
      {
      beforeText: "Listen and repeat",
      phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/əs.mp3",
          label: "phonetics",
          phonetics: "/əs/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dangerous.mp3",
              keyword: "dangerous",
              label: "danger<span class='underline'>ous</span>",
              phonetics: "/ˈdeɪn.dʒɚ.əs/",
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

export const LettersOUS = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
