import {
  Pronunciation,
  PronunciationCard,
} from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "u"',
    sound: "/ʌ/, /ɪ/",
    phonetics: [
      {
        beforeText: "...",
        phoneticsComponent: (props) => <DictionaryCard {...props} />,
        phoneticsComponentProps: {
          audioSrc: "/phonetics/ʌ.mp3",
          label: "phonetics",
          phonetics: "/ʌ/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/dust.mp3",
              keyword: "dusy",
              label: "d<span class='underline'>u</span>st",
              phonetics: "/dʌst/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/r/redundancy.mp3",
              keyword: "redundancy",
              label: "red<span class='underline'>u</span>ndancy",
              phonetics: "/rɪˈdʌn.dən.si/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/u/ultimate.mp3",
              keyword: "ultimate",
              label: "<span class='underline'>u</span>ltimate",
              phonetics: "/ˈʌl.tə.mət/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/u/ultimately.mp3",
              keyword: "ultimately",
              label: "ultimately",
              phonetics: "/ˈʌl.tə.mət.li/",
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
      {
        beforeText: "...",
            phoneticsComponent: (props) => <DictionaryCard {...props} />,
            phoneticsComponentProps: {
            audioSrc: "/phonetics/ɪ.mp3",
            label: "phonetics",
            phonetics: "/ɪ/",
          },
          words: [
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/b/build.mp3",
                keyword: "build",
                label: "b<span class='underline'>ui</span>ld",
                phonetics: "/bɪld/",
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

export const LetterU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
