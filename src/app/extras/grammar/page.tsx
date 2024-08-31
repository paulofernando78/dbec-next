import { Whiteboard } from "@/components/Whiteboard";
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
            link: "/extras/grammar/intermediate",
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
      <Whiteboard title="Extras" subTitle="Grammar" />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
