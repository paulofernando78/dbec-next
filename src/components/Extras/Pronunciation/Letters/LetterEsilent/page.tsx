import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "e"',
    sound: "Silent",
    phonetics: [
      // /i/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "",
          label: "phonetics",
          phonetics: "silent",
        },
        words: [
          // wife
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wife.mp3",
              keyword: "wife",
              label: "wi<span class='color-red'>f</span>(e)",
              phonetics: "/waɪf/",
            },
          },
          // since
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/since.mp3",
              keyword: "since",
              label: "sin<span class='color-red'>c</span>(e)",
              phonetics: "/sɪns/",
            },
          },
          // age
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/age.mp3",
              keyword: "age",
              label: "a<span class='color-red'>g</span>(e)",
              phonetics: "/eɪdʒ/",
            },
          },
          // make
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/make.mp3",
              keyword: "make",
              label: "ma<span class='color-red'>k</span>(e)",
              phonetics: "/meɪk/",
            },
          },
          // same
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/same.mp3",
              keyword: "same",
              label: "sa<span class='color-red'>m</span>(e)",
              phonetics: "/seɪm/",
            },
          },
          // wine
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wine.mp3",
              keyword: "wine",
              label: "wi<span class='color-red'>n</span>(e)",
              phonetics: "/waɪn/",
            },
          },
          // ate
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/ate.mp3",
              keyword: "ate",
              label: "a<span class='color-red'>t</span>(e)",
              phonetics: "/eɪt/",
            },
          },
          // drive
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/drive.mp3",
              keyword: "drive",
              label: "dri<span class='color-red'>v</span>(e)",
              phonetics: "/draɪv/",
            },
          },
          // expensive
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/expensive.mp3",
              keyword: "expensive",
              label: "expensi<span class='color-red'>v</span>(e)",
              phonetics: "/ɪkˈspen.sɪv/",
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

export const LetterEsilent = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
