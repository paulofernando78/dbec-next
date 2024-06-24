import { Card } from "@/components/Cards/Card";
import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letters "aw" and "awe"',
    phonetics: [
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/ɑ.mp3",
              label: "phonetics",
              phonetics: "/ɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/awful.mp3",
              keyword: "awful",
              label: "<span class='underline'>aw</span>ful",
              phonetics: "/ˈɑː.fəl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/awfully.mp3",
              keyword: "awfully",
              label: "<span class='underline'>aw</span>fully",
              phonetics: "/ˈɑː.fəl.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/caw.mp3",
              keyword: "caw",
              label: "<span class='underline'>aw</span>w",
              phonetics: "/kɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dawn.mp3",
              keyword: "dawn",
              label: "d<span class='underline'>aw</span>n",
              phonetics: "/dɑːn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/draw.mp3",
              keyword: "draw",
              label: "dr<span class='underline'>aw</span>",
              phonetics: "/drɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/g/gnaw.mp3",
              keyword: "gnaw",
              label: "gn<span class='underline'>aw</span>",
              phonetics: "/nɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/law.mp3",
              keyword: "law",
              label: "l<span class='underline'>aw</span>",
              phonetics: "/lɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lawsuit.mp3",
              keyword: "lawsuit",
              label: "l<span class='underline'>aw</span>suit",
              phonetics: "/ˈlɑː.suːt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/saw.mp3",
              keyword: "saw",
              label: "s<span class='underline'>aw</span>",
              phonetics: "/sɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/spawn.mp3",
              keyword: "spawn",
              label: "sp<span class='underline'>aw</span>n",
              phonetics: "/spɑːn/",
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
          words: [
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/a/awesome.xmp3",
                label: "<span class='underline'>awe</span>some",
                phonetics: " /ˈɑː.səm/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/a/awe.xmp3",
                label: "<span class='underline'>awe</span>",
                phonetics: "/ɑː/",
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
        },
    ],
  },
];

export const LettersAwAwe = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
