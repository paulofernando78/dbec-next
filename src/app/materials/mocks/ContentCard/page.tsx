import { ContentCard } from "@/components/Cards/ContentCard";

const whiteboard = {
  title: "...",
  subtitle: "...",
};

const contents = [
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "...",
        contents: [
          {
            content: "...",
          },
          {
            link: "...",
            linkLabel: "Test ... ",
          },
          {
            globeLink: "...",
            globeLabel: "Test ... ",
          },
          {
            checkboxLink: "...",
            checkboxLabel: "Test ... ",
          },
        ],
      },
    ],
  },
];

export default function ContentCardComponent() {
  return <ContentCard whiteboard={whiteboard} contents={contents} />;
}
