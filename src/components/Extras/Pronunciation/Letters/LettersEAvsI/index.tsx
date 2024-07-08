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
        applyRedDashedBorder: true,
        beforeText: "Listen to the differences and repeat.",
        applyGrid: true,
        words: [
          // /iː/
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/i.mp3",
              keyword: "beach",
              label: "phonetics",
              phonetics: "/iː/",
            },
          },
          // /ɪ/
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/ɪ.mp3",
              keyword: "bitch",
              label: "phonetics",
              phonetics: "/ɪ/",
            },
          },
          // beach
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/beach.mp3",
              keyword: "beach",
              label: "b<span class='underline'>ea</span>ch",
              phonetics: "/biːtʃ/",
            },
          },
          // bitch
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bitch.mp3",
              keyword: "bitch",
              label: "b<span class='underline'>i</span>tch",
              phonetics: "/bɪtʃ/",
            },
          },
          // bead
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bead.mp3",
              keyword: "bead",
              label: "b<span class='underline'>ea</span>d",
              phonetics: "/biːd/",
            },
          },
          // bid
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bid.mp3",
              keyword: "bid",
              label: "b<span class='underline'>i</span>d",
              phonetics: "/bɪd/",
            },
          },
          // beat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/beat.mp3",
              keyword: "beat",
              label: "b<span class='underline'>ea</span>t",
              phonetics: "/biːt/",
            },
          },
          // bit
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/b/bit.mp3",
              keyword: "bit",
              label: "b<span class='underline'>i</span>t",
              phonetics: "/bɪt/",
            },
          },
          // cheap
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/cheap.mp3",
              keyword: "cheap",
              label: "ch<span class='underline'>ea</span>p",
              phonetics: "/tʃiːp/",
            },
          },
          // chip
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chip.mp3",
              keyword: "chip",
              label: "ch<span class='underline'>i</span>p",
              phonetics: "/tʃɪp/",
            },
          },
          // deed
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/deed.mp3",
              keyword: "deed",
              label: "d<span class='underline'>ee</span>d",
              phonetics: "/diːd/",
            },
          },
          // did
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/did.mp3",
              keyword: "did",
              label: "d<span class='underline'>i</span>d",
              phonetics: "/dɪd/",
            },
          },
          // deep
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/deep.mp3",
              keyword: "deep",
              label: "d<span class='underline'>ee</span>p",
              phonetics: "/diːp/",
            },
          },
          // dip
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dip.mp3",
              keyword: "dip",
              label: "d<span class='underline'>i</span>p",
              phonetics: "/dɪp/",
            },
          },
          // eat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/e/eat.mp3",
              keyword: "eat",
              label: "<span class='underline'>ea</span>t",
              phonetics: "/iːt/",
            },
          },
          // it
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/i/it.mp3",
              keyword: "it",
              label: "<span class='underline'>i</span>t",
              phonetics: "/ɪt/",
            },
          },
          // feet
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/feet.mp3",
              keyword: "feet",
              label: "f<span class='underline'>ee</span>t",
              phonetics: "/fiːt/",
            },
          },
          // fit
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/f/fit.mp3",
              keyword: "fit",
              label: "f<span class='underline'>i</span>t",
              phonetics: "/fɪt/",
            },
          },
          // least
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/least.mp3",
              keyword: "least",
              label: "l<span class='underline'>eas</span>t",
              phonetics: "/liːst/",
            },
          },
          // list
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/list.mp3",
              keyword: "list",
              label: "l<span class='underline'>i</span>st",
              phonetics: "/lɪst/",
            },
          },
          // leave
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/leave.mp3",
              keyword: "leave",
              label: "l<span class='underline'>ea</span>ve",
              phonetics: "/liːv/",
            },
          },
          // live
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/live1.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/lɪv/",
            },
          },
          // read
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/read.mp3",
              keyword: "read",
              label: "r<span class='underline'>ea</span>d",
              phonetics: "/riːd/",
            },
          },
          // rid
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/rid.mp3",
              keyword: "rid",
              label: "r<span class='underline'>i</span>d",
              phonetics: "/rɪd/",
            },
          },
          // seat
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/seat.mp3",
              keyword: "seat",
              label: "s<span class='underline'>ea</span>t",
              phonetics: "/siːt/",
            },
          },
          // sit
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sit.mp3",
              keyword: "sit",
              label: "s<span class='underline'>i</span>t",
              phonetics: "/sɪt/",
            },
          },
          // seek
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/seek.mp3",
              keyword: "seek",
              label: "s<span class='underline'>ee</span>k",
              phonetics: "/siːk/",
            },
          },
          // sick
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sick.mp3",
              keyword: "sick",
              label: "s<span class='underline'>i</span>ck",
              phonetics: "/sɪk/",
            },
          },
          // sheep
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sheep.mp3",
              keyword: "sheep",
              label: "sh<span class='underline'>ee</span>p",
              phonetics: "/ʃiːp/",
            },
          },
          // ship
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/ship.mp3",
              keyword: "ship",
              label: "sh<span class='underline'>i</span>p",
              phonetics: "/ʃɪp/",
            },
          },
          // sleep
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sleep.mp3",
              keyword: "sleep",
              label: "sleep",
              phonetics: "/sliːp/",
            },
          },
          // slip
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/slip.mp3",
              keyword: "slip",
              label: "sl<span class='underline'>i</span>p",
              phonetics: "/slɪp/",
            },
          },
          // steel
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/steal.mp3",
              keyword: "steel",
              label: "st<span class='underline'>ea</span>l",
              phonetics: "/stiːl/",
            },
          },
          // still
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/still.mp3",
              keyword: "still",
              label: "st<span class='underline'>i</span>ll",
              phonetics: "/stɪl/",
            },
          },
          // weak
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/weak.mp3",
              keyword: "weak",
              label: "w<span class='underline'>ea</span>k",
              phonetics: "/.../",
            },
          },
          // wick
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wick.mp3",
              keyword: "wick",
              label: "w<span class='underline'>i</span>ck",
              phonetics: "/.../",
            },
          },
          // wheel
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wheel.mp3",
              keyword: "wheel",
              label: "wh<span class='underline'>ee</span>l",
              phonetics: "/wiːl/",
            },
          },
          // will
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/will.mp3",
              keyword: "will",
              label: "w<span class='underline'>i</span>ll",
              phonetics: "/wɪl/",
            },
          },
          // wheep
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/wheep.mp3",
              keyword: "wheep",
              label: "wh<span class='underline'>ee</span>p",
              phonetics: "/wiːp/",
            },
          },
          // whip
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/w/whip.mp3",
              keyword: "will",
              label: "wh<span class='underline'>i</span>p",
              phonetics: "/wɪp/",
            },
          },
        ],
        exampleAudioSrc: "",
        examples: [
          {
            enExample: "a cheap house",
            ptExample: "uma casa barata",
          },
          {
            enExample: "a bag of chips",
            ptExample: "um saco de batata chips",
          },
          {
            enExample: "Eat it!",
            ptExample: "Coma!",
          },
          {
            enExample: "Leave it there.",
            ptExample: "deixe isso aí/lá.",
          },
          {
            enExample: "live in a big city",
            ptExample: "morar em uma grande cidade",
          },
        ],
      },
    ],
  },
];

export const LettersEAvsI
 = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
