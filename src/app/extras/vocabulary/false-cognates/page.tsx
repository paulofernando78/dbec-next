import { DashedCard } from "@/components/DashedCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import styles from "./styles.module.css";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

const lists = [
  {
    enComponent: (props) => <DictionaryCard {...props} />,
    enComponentProps: {
      audioSrc: "/l/actual.mp3",
      label: "actual",
    },
    portuguese: "atual",
    ptComponent: (props) => <DictionaryCard {...props} />,
    ptComponentProps: {
      audioSrc: "/c/currentl.mp3",
      label: "current",
    },
  },
  {
    enComponent: (props) => <DictionaryCard {...props} />,
    enComponentProps: {
      audioSrc: "/l/actual.mp3",
      label: "actual",
    },
    portuguese: "atual",
    ptComponent: (props) => <DictionaryCard {...props} />,
    ptComponentProps: {
      audioSrc: "/c/currentl.mp3",
      label: "current",
    },
  }
];

interface FalseCognatesProps {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: { audioSrc: string; label: string };
}

export default function FalseCognates() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        descriptions={["False Cognates"]}
      />
      <div className="line-break">
        {lists.map((list, index) => (
          <DashedCard key={index}>
              <p>{list.enComponent(list.enComponentProps)} isn't "atual"</p>
              <p>For "{list.portuguese}", say {list.ptComponent(list.ptComponentProps)}</p>
          </DashedCard>
        ))}
      </div>
    </>
  );
}
