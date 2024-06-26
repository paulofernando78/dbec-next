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
              label: "hershey",
              phonetics: " /ˈhɝːrʃi/",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/x/xxx.mp3",
              keyword: "",
              label: "xxx",
              phonetics: "/.../",
            },
          },
          {
            component: (props) => <DictionaryCard {...props} />,
            componentProps: {
              audioSrc: "/x/xxx.mp3",
              keyword: "",
              label: "xxx",
              phonetics: "/.../",
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

export const LettersEY = () => {
  return (
    <>
      <div className="line-break">
      <PronunciationCard pronunciations={pronunciations} />
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/.../.mp3"
            label="phonetics"
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/c/chimney.mp3"
            label="chimn<span class='underline'>ey</span>"
            phonetics="/ˈtʃɪm.ni/"
          />
          <DictionaryCard
            audioSrc="/d/donkey.mp3"
            label="donk<span class='underline'>ey</span>"
            phonetics="/ˈdɑːŋ.ki/"
          />
          <DictionaryCard
            audioSrc="/h/hershey.mp3"
            label="hersh<span class='underline'>ey</span>"
            phonetics="/ˈdɑːŋ.ki/"
          />
          <DictionaryCard
            audioSrc="/k/key.mp3"
            label="k<span class='underline'>ey</span>"
            phonetics="/kiː/"
          />
          <DictionaryCard
            audioSrc="/m/money.mp3"
            label="mon<span class='underline'>ey</span>"
            phonetics="/ˈmʌn.i/"
          />
          <DictionaryCard
            audioSrc="/m/monkey.mp3"
            label="monk<span class='underline'>ey</span>"
            phonetics="/ˈmʌŋ.ki/"
          />
        </div>
        <p className="bold">Listen and repeat.</p>
        <p>
          Let's go to Disn<span className="underline">ey</span> Land to see Mick
          <span className="underline">ey</span> Mouse.
        </p>
      </div>
    </>
  );
};
