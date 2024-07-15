import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letters \"sh\" vs. \"ch\"",
    sound: "/ʃ/ vs. /tʃ/",
    phonetics: [
      {
        applyRedDashedBorder: true,
        applyGrid: true,
        beforeText: "Listen to the differences.",
        words: [
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
              audioSrc: "/c/chair.mp3",
              keyword: "chair",
              label: "<span class='underline'>ch</span>air",
              phonetics: "/tʃer/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/share.mp3",
              keyword: "sheep",
              label: "<span class='underline'>sh</span>eep",
              phonetics: "/ʃiːp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chair.mp3",
              keyword: "cheap",
              label: "<span class='underline'>ch</span>eap",
              phonetics: "/tʃiːp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/ship.mp3",
              keyword: "ship",
              label: "<span class='underline'>sh</span>ip",
              phonetics: "/ʃɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chip.mp3",
              keyword: "chip",
              label: "<span class='underline'>ch</span>ip",
              phonetics: "/ʃɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wash.mp3",
              keyword: "wash",
              label: "wa<span class='underline'>sh</span>",
              phonetics: "/wɑːʃ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/watch.mp3",
              keyword: "watch",
              label: "wat<span class='underline'>ch</span>",
              phonetics: "/wɑːtʃ/",
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
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/witch.mp3",
              keyword: "witch",
              label: "wit<span class='underline'>ch</span>",
              phonetics: "/wɪtʃ/",
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
