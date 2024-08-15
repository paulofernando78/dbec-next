import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabelLink: "Unit 1 •",
          },
        ],
      },
    ],
  },
];

<ContentCard contents={contents} />;

export default function Grammar() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" />
      <ContentCard contents={contents} />
    </>
  );
}
