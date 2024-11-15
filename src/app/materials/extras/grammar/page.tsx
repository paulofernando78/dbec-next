import { Whiteboard } from "@/components/Whiteboard";
import { ContentCard } from "@/components/Cards/ContentCard";

const contents = [
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "Grammar in Use",
        contents: [
          {
            link: "/materials/extras/grammar/elementary",
            linkLabel: "Elementary",
          },
          {
            link: "/materials/extras/grammar/intermediate",
            linkLabel: "Intermediate",
          },
        ],
      },
    ],
  },
];

export default function GrammarInUse() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" />
      <ContentCard contents={contents} />
    </>
  );
}
