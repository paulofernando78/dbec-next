import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DescriptionCard } from "@/components/Cards/DescriptionCard";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Grammar in Use",
        contents: [
          {
            link: "/extras/grammar/elementary",
            linkLabel: "Elementary",
          },
          {
            link: "/extras/grammar/elementary",
            linkLabel: "Intermediate",
          },
        ],
      },
    ],
  },
];

export default function Grammar() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
