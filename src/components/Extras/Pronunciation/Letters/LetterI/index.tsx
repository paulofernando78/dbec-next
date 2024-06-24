import { Card } from "@/components/Cards/Card";
import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "i"',
    phonetics: [
      {
      beforeText: "When the letter \"i\" sounds like portuguese:",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/i.mp3",
              label: "phonetics",
              phonetics: "/i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/police.mp3",
              keyword: "police",
              label: "pol<span class='underline'>i</span>ce",
              phonetics: "/pəˈliːs/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sushi.mp3",
              keyword: "sushi",
              label: "sush<span class='underline'>i</span>",
              phonetics: "/ˈsuː.ʃi/",
            },
          }
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
          }
        ],
        showHR: true
      },
      {
      beforeText: "When the letter \"i\" has a different sound. It'll sound close to \"ê\":",
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/ɪ.mp3",
              label: "phonetics",
              phonetics: "/ɪ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/p/police.mp3",
              keyword: "fix",
              label: "f<span class='underline'>i</span>x",
              phonetics: "/fɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/difficult.mp3",
              keyword: "difficult",
              label: "d<span class='underline'>i</span>fficult",
              phonetics: "/ˈdɪf.ə.kəlt/",
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
              audioSrc: "/l/live.mp3",
              keyword: "live",
              label: "l<span class='underline'>i</span>ve",
              phonetics: "/lɪv/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/mint.mp3",
              keyword: "mint",
              label: "m<span class='underline'>i</span>nt",
              phonetics: "/mɪnt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/minute.mp3",
              keyword: "minute",
              label: "m<span class='underline'>i</span>nute",
              phonetics: "/ˈmɪn.ɪt/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/sister.mp3",
              keyword: "sister",
              label: "s<span class='underline'>i</span>ster",
              phonetics: "/ˈsɪs.tɚ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/s/six.mp3",
              keyword: "six",
              label: "s<span class='underline'>i</span>x",
              phonetics: "/sɪks/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/thing.mp3",
              keyword: "thing",
              label: "th<span class='underline'>i</span>ng",
              phonetics: "/θɪŋ/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/t/think.mp3",
              keyword: "think",
              label: "th<span class='underline'>i</span>nk",
              phonetics: "/θɪŋk/",
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
        beforeText: "...",
          words: [
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/phonetics/aɪ.mp3",
                label: "phonetics",
                phonetics: "/aɪ/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/f/five.mp3",
                keyword: "five",
                label: "f<span class='underline'>i</span>ve",
                phonetics: "/faɪv/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/k/knight.mp3",
                keyword: "knight",
                label: "knight",
                phonetics: "/naɪt/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/l/live2.mp3",
                keyword: "live",
                label: "l<span class='underline'>i</span>ve",
                phonetics: "/laɪv/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/m/mind.mp3",
                keyword: "mind",
                label: "mind",
                phonetics: "/maɪnd/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/n/night.mp3",
                keyword: "night",
                label: "night",
                phonetics: "/naɪt/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/s/swipe.mp3",
                keyword: "swipe",
                label: "swipe",
                phonetics: " /swaɪp/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/t/time.mp3",
                keyword: "time",
                label: "time",
                phonetics: "/taɪm/",
              },
            },
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/w/wipe.mp3",
                keyword: "wipe",
                label: "wipe",
                phonetics: "/waɪp/",
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
          ],
        },
    ],
  },
];

export const LetterI = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
