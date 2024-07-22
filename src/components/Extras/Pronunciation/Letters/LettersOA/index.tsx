import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/Pronunciation";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "oa"',
    sound: "/ɔː/, /oʊ/",
    phonetics: [
      // /ɔː/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ɔ.mp3",
          label: "",
          phonetics: "/ɔː/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/boar.mp3",
              keyword: "boar",
              label: "b<span class='underline'>oa</span>r",
              phonetics: "/bɔːr/",
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
      // /oʊ/
      {
        beforeText: "Listen and repeat.",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/oʊ.mp3",
          label: "",
          phonetics: "/oʊ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/o/oat.mp3",
              keyword: "oat",
              label: "<span class='underline'>oa</span>t",
              phonetics: "/oʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/boat.mp3",
              keyword: "boat",
              label: "b<span class='underline'>oa</span>t",
              phonetics: "/boʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/coat.mp3",
              keyword: "coat",
              label: "c<span class='underline'>oa</span>t",
              phonetics: "/coʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/moat.mp3",
              keyword: "moat",
              label: "m<span class='underline'>oa</span>t",
              phonetics: "/moʊt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/toad.mp3",
              keyword: "toad",
              label: "t<span class='underline'>oa</span>d",
              phonetics: "/toʊd/",
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

export const LettersOA = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
