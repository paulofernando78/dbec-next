import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "ea" • "ee" (long) vs. "i" (short)',
    sound: "/i/ vs /ɪ/",
    phonetics: [
      {
        beforeText: "Listen and repeat.",
        applyGrid: true,
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bead.mp3",
              keyword: "bead",
              label: "b<span class='underline'>ea</span>d",
              phonetics: "/biːd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bid.mp3",
              keyword: "bid",
              label: "b<span class='underline'>i</span>d",
              phonetics: "/bɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cheap.mp3",
              keyword: "cheap",
              label: "ch<span class='underline'>ea</span>p",
              phonetics: "/tʃiːp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chip.mp3",
              keyword: "chip",
              label: "ch<span class='underline'>i</span>p",
              phonetics: "/tʃɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/deed.mp3",
              keyword: "deed",
              label: "deed",
              phonetics: "/diːd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/did.mp3",
              keyword: "did",
              label: "d<span class='underline'>i</span>d",
              phonetics: "/dɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/eat.mp3",
              keyword: "eat",
              label: "<span class='underline'>ea</span>t",
              phonetics: "/iːt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/it.mp3",
              keyword: "it",
              label: "<span class='underline'>i</span>t",
              phonetics: "/ɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/feet.mp3",
              keyword: "feet",
              label: "f<span class='underline'>ee</span>t",
              phonetics: "/fiːt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fit.mp3",
              keyword: "fit",
              label: "f<span class='underline'>i</span>t",
              phonetics: "/fɪt/",
            },
          },

          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/least.mp3",
              keyword: "least",
              label: "l<span class='underline'>eas</span>t",
              phonetics: "/liːst/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/list.mp3",
              keyword: "list",
              label: "l<span class='underline'>i</span>st",
              phonetics: "/lɪst/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/leave.mp3",
              keyword: "leave",
              label: "l<span class='underline'>ea</span>ve",
              phonetics: "/liːv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live1.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/lɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/read.mp3",
              keyword: "read",
              label: "r<span class='underline'>ea</span>d",
              phonetics: "/riːd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/rid.mp3",
              keyword: "rid",
              label: "r<span class='underline'>i</span>d",
              phonetics: "/rɪd/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/seat.mp3",
              keyword: "seat",
              label: "s<span class='underline'>ea</span>t",
              phonetics: "/siːt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sit.mp3",
              keyword: "sit",
              label: "s<span class='underline'>i</span>t",
              phonetics: "/sɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/seek.mp3",
              keyword: "seek",
              label: "s<span class='underline'>ee</span>k",
              phonetics: "/siːk/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sick.mp3",
              keyword: "sick",
              label: "s<span class='underline'>i</span>ck",
              phonetics: "/sɪk/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sheep.mp3",
              keyword: "sheep",
              label: "sh<span class='underline'>ee</span>p",
              phonetics: "/ʃiːp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/ship.mp3",
              keyword: "ship",
              label: "sh<span class='underline'>i</span>p",
              phonetics: "/ʃɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sleep.mp3",
              keyword: "sleep",
              label: "sleep",
              phonetics: "/sliːp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slip.mp3",
              keyword: "slip",
              label: "sl<span class='underline'>i</span>p",
              phonetics: "/slɪp/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/steal.mp3",
              keyword: "steel",
              label: "st<span class='underline'>ea</span>l",
              phonetics: "/stiːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/still.mp3",
              keyword: "still",
              label: "st<span class='underline'>i</span>ll",
              phonetics: "/stɪl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/weak.mp3",
              keyword: "weak",
              label: "w<span class='underline'>ea</span>k",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wick.mp3",
              keyword: "wick",
              label: "w<span class='underline'>i</span>ck",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wheel.mp3",
              keyword: "wheel",
              label: "wh<span class='underline'>ee</span>l",
              phonetics: "/wiːl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/will.mp3",
              keyword: "will",
              label: "w<span class='underline'>i</span>ll",
              phonetics: "/wɪl/",
            },
          },
        ],
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

export const LettersEAi = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
