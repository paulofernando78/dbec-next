import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "sh"',
    sound: "/ʃ/",
    phonetics: [
      {
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʃ.mp3",
          label: "phonetics",
          phonetics: "/ʃ/",
        },
        beforeText: "Listen and repeat.",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/ash.mp3",
              keyword: "ash",
              label: "a<span class='underline'>sh</span>",
              phonetics: "/æʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/brush.mp3",
              keyword: "brush",
              label: "bru<span class='underline'>sh</span>",
              phonetics: "/brʌʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/crash.mp3",
              keyword: "crash",
              label: "cra<span class='underline'>sh</span>",
              phonetics: "/kræʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fish.mp3",
              keyword: "fish",
              label: "fi<span class='underline'>sh</span>",
              phonetics: "/fɪʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/finish.mp3",
              keyword: "finish",
              label: "fini<span class='underline'>sh</span>",
              phonetics: "/ˈfɪn.ɪʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/flash.mp3",
              keyword: "flash",
              label: "fla<span class='underline'>sh</span>",
              phonetics: "/flæʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/share.mp3",
              keyword: "share",
              label: "<span class='underline'>sh</span>are",
              phonetics: "/ʃer/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/smash.mp3",
              keyword: "smash",
              label: "sma<span class='underline'>sh</span>",
              phonetics: "/smæʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/splash.mp3",
              keyword: "splash",
              label: "spla<span class='underline'>sh</span>",
              phonetics: "/splæʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wish.mp3",
              keyword: "wish",
              label: "wi<span class='underline'>sh</span>",
              phonetics: "/wɪʃ/",
            },
          }
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "...",
            ptExample: "...",
          }
        ],
      },
    ],
  },
];

export const LettersSH = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
