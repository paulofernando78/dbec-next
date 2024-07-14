import {
    PronunciationCard,
    Pronunciation,
  } from "@/components/Cards/PronunciationCard";
  import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
  
  const pronunciations: Pronunciation[] = [
    {
      label: 'Letter "eau"',
      sound: "/oʊ/",
      phonetics: [
        // /eau/
        {
          beforeText: "Listen and repeat.",
          phoneticsComponent: (props) => <DictionaryCard {...props} />,
          phoneticsComponentProps: {
            audioSrc: "/phonetics/oʊ.mp3",
            label: "phonetics",
            phonetics: "/oʊ/",
          },
          words: [
          //  plateau
            {
              component: (props) => <DictionaryCard {...props} />,
              componentProps: {
                audioSrc: "/p/plateau.mp3",
                keyword: "plateau",
                label: "plat<span class='underline'>eau</span>",
                phonetics: "/plætˈoʊ/",
              },
            },
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
  
  export const LettersEAU = () => {
    return (
      <>
        <div className="line-break">
          <PronunciationCard pronunciations={pronunciations} />
        </div>
      </>
    );
  };
  