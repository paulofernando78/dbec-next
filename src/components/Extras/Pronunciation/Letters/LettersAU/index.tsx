import { Card } from "@/components/Cards/Card";
import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: 'Letter "au"',
    phonetics: [
      {
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/phonetics/xxx.xmp3",
              label: "sound:",
              phonetics: "/ɑː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/maul.xmp3",
              label: "maul",
              phonetics: "/mɑːl/",
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

export const LettersAU = () => {
  return (
    <>
      <div className="line-break">
        <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
