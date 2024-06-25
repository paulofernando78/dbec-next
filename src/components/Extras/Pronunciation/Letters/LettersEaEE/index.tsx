import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ea" and "ee"',
    sound: "/i/",
    phonetics: [
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dream.mp3",
              keyword: "dream",
              label: "dr<span class='underline'>ea</span>m",
              phonetics: "/driːm/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/theater.mp3",
              keyword: "theater",
              label: "th<span class='underline'>ea</span>ter",
              phonetics: "/ˈθiː.ə.t̬ɚ/",
            },
          },
        ],
        examples: [
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
          {
            enExample: "...",
            ptExample: "..."
          },
        ],
        showHR: true
      },
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
          phoneticsComponentProps: {
            audioSrc: "/phonetics/e.mp3",
            label: "phonetics",
            phonetics: "/e/",
          },
          words: [
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/l/lead2.mp3",
                keyword: "lead",
                label: "lead",
                phonetics: "/led/",
              },
            },
          ],
          examples: [
            {
              enExample: "The screen was made of lead to prevent X-rays from passing through.",
              ptExample: "A tela era feita de chumbo para evitar a passagem de raios X."
            },
          ],
        },
    ],
  },
];

export const LetterEaEE = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
