import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { DescriptionCard } from "@/components/Cards/DescriptionCard";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Boardgames",
        contents: [
          {
            link: "/misc/boardgames/checkers",
            linkLabel: "Checkers",
          },
          {
            link: "/misc/boardgames/chess",
            linkLabel: "Chess",
          },
          {
            link: "/misc/boardgames/monopoly",
            linkLabel: "Monolpoly",
          },
          {
            link: "/misc/boardgames/clue",
            linkLabel: "Clue",
          },
        ],
      },
    ],
  },
];

export default function Misc() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Miscellaneous" />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
