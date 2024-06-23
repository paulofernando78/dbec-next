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
              label: "awful",
              phonetics: "/ˈɑː.fəl/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/a/awfully.mp3",
              label: "awfully",
              phonetics: "/ˈɑː.fəl.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/caw.mp3",
              label: "caw",
              phonetics: "/kɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dawn.mp3",
              label: "dawn",
              phonetics: "/dɑːn/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/draw.mp3",
              label: "draw",
              phonetics: "/drɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/g/gnaw.mp3",
              label: "gnaw",
              phonetics: "/nɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/law.mp3",
              label: "law",
              phonetics: "/lɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/l/lawsuit.mp3",
              label: "lawsuit",
              phonetics: "xxx",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/saw.mp3",
              label: "saw",
              phonetics: "/sɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/spawn.mp3",
              label: "spawn",
              phonetics: "/spɑːn/",
            },
          },
        ],
        examples: [
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
                label: "awesome",
                phonetics: " /ˈɑː.səm/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/a/awe.xmp3",
                label: "awe",
                phonetics: "/ɑː/",
              },
            },
          ],
          examples: [
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
