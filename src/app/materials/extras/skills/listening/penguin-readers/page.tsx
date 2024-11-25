import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "lightgray",
        label: "Levels",
        contents: [
          {
            link: "/extras/skills/listening/penguin-readers/beginner",
            linkLabel: "Beginner",
          },
          {
            link: "/extras/skills/listening/penguin-readers/elementary",
            linkLabel: "Elementary",
          },
          {
            link: "/extras/skills/listening/penguin-readers/pre-intermediate",
            linkLabel: "Pre-Intermediate",
          },
          {
            link: "/extras/skills/listening/penguin-readers/intermediate",
            linkLabel: "Intermediate",
          },
          {
            link: "/extras/skills/listening/penguin-readers/upper-intermediate",
            linkLabel: "Upper-Intermediate",
          },
          {
            link: "/extras/listening/penguin-readers/advanced",
            linkLabel: "advanced",
          },
        ],
      },
    ],
  },
];

export default function PenguinReaders() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Litening"
        descriptions={["Penguin Readers"]}
      />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
