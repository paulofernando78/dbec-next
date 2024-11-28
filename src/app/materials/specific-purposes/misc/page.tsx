import { DescriptionCard } from "@/components/Molecules/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

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
