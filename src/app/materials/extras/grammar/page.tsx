import { ContentCard } from "@/components/Molecules/Cards/ContentCard";

const whiteboard = {
  title: "Extras",
  subtitle: "Grammar",
};

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
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
