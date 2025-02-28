import Image from "next/image";
import { Whiteboard, DictionaryCard } from "@/components/index";
import { usaFlagIcon, brFlagIcon } from "@/img/index";

const wordLists: WordList[] = [
  {
    enComponent: (props) => <DictionaryCard {...props} />,
    enComponentProps: {
      audioSrc: "/a/actual.mp3",
      label: "actual",
    },
    enPT: "real, verdadeiro",
    ptEN: "atual",
    ptComponent: (props) => <DictionaryCard {...props} />,
    ptComponentProps: {
      audioSrc: "/c/current.mp3",
      label: "current",
    },
  },
  {
    enComponent: (props) => <DictionaryCard {...props} />,
    enComponentProps: {
      audioSrc: "/a/actually.mp3",
      label: "actually",
    },
    enPT: "na realidade, na verdade",
    ptEN: "atualmente",
    ptComponent: (props) => <DictionaryCard {...props} />,
    ptComponentProps: {
      audioSrc: "/c/currently.mp3",
      label: "currently",
    },
  },
  {
    enComponent: (props) => <DictionaryCard {...props} />,
    enComponentProps: {
      audioSrc: "/a/anticipate.mp3",
      label: "anticipate",
    },
    enPT: "prever, estar na expectativa",
    ptEN: "antecipar (horário)",
    ptComponent: (props) => <DictionaryCard {...props} />,
    ptComponentProps: {
      audioSrc: "/a/advance.mp3",
      label: "advance",
    },
  },
];

interface WordList {
  enComponent: (props: { audioSrc: string; label: string }) => JSX.Element;
  enComponentProps: any;
  enPT: string;
  ptEN: string;
  ptComponent: (props: { audioSrc: string; label: string }) => JSX.Element;
  ptComponentProps: any;
}

// interface FalseCognatesProps {
//   wordLists: WordList[];
// }

export default function FalseCognates() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        descriptions={["False Cognates"]}
      />
      <div className="line-break">
        {wordLists.map((wordList, index) => (
          <div key={index}>
            <div className="flex-8px-center-wrap">
              <Image
                src={usaFlagIcon}
                alt="USA flag icon"
                className="icon-general"
              />
              <p className="inline">
                {wordList.enComponent(wordList.enComponentProps)} ➜{" "}
                {wordList.enPT}
              </p>
            </div>
            <div className="flex-8px-center-wrap">
              <Image
                src={brFlagIcon}
                alt="Brazil flag icon"
                className="icon-general"
              />
              <p className="inline">
                {wordList.ptEN} ➜{" "}
                {wordList.ptComponent(wordList.ptComponentProps)}
              </p>
            </div>
            <hr className="margin-top" />
          </div>
        ))}
      </div>
    </>
  );
}
