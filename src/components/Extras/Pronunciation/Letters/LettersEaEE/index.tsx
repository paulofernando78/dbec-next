import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ea" and "ee"',
    sound: "/i/",
    phonetics: [
      // /i/
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
              audioSrc: "/s/sweet.mp3",
              keyword: "sweet",
              label: "sw<span class='underline'>ee</span>t",
              phonetics: " /ˈswiːt/",
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
        showHR: true,
      },
      // /e/
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
              audioSrc: "/b/bread.mp3",
              keyword: "bread",
              label: "br<span class='underline'>ea</span>d",
              phonetics: "/bred/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lead2.mp3",
              keyword: "lead",
              label: "l<span class='underline'>ea</span>d",
              phonetics: "/led/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/tear2.mp3",
              keyword: "tear",
              label: "<span class='color-red'>*</span>t<span class='underline'>ea</span>r",
              phonetics: "/ter/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample:
              "The screen was made of lead to prevent X-rays from passing through.",
            ptExample:
              "A tela era feita de chumbo para evitar a passagem de raios X.",
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
