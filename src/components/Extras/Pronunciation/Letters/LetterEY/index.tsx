import { Pronunciation, PronunciationCard } from "@/components/Cards/PronunciationCard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const pronunciations: Pronunciation[] = [
  {
    label: "Letter \"ey\"",
    sound: "/i/ ",
    phonetics: [
      {
      beforeText: "...",
          phoneticsComponent: (props) => <DictionaryCard {...props} />,
	        phoneticsComponentProps: {
          audioSrc: "/phonetics/i.mp3",
          label: "phonetics",
          phonetics: "/i/",
        },
        words: [
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/c/chimney.mp3",
              keyword: "chimney",
              label: "chimn<span class='underline'>ey</span>",
              phonetics: "/ˈtʃɪm.ni/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/d/donkey.mp3",
              keyword: "donkey",
              label: "donk<span class='underline'>ey</span>",
              phonetics: "/ˈdɑːŋ.ki/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/h/hershey.mp3",
              keyword: "hershey",
              label: "hersh<span class='underline'>ey</span>",
              phonetics: " /ˈhɝːrʃi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/x/xxx.mp3",
              keyword: "key",
              label: "k<span class='underline'>ey</span>",
              phonetics: "/kiː/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/money.mp3",
              keyword: "money",
              label: "mon<span class='underline'>ey</span>",
              phonetics: "/ˈmʌn.i/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/m/monkey.mp3",
              keyword: "monkey",
              label: "monkey",
              phonetics: "/ˈmʌŋ.ki/",
            },
          },
        ],
        examples: [
          {
            enExample: "Let's go to Disney Land to see Mickey Mouse.",
            ptExample: "..."
          },
        ],
      },
    ],
  },
];

export const LettersEY = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
      </div>
    </>
  );
};
