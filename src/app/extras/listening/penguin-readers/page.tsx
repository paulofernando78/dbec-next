import { DescriptionCard } from "@/components/DescriptionCard/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

const descriptions = [
  {
    label: "Levels",
    contents: [
      {
        link: "/extras/listening/penguin-readers/beginner",
        linkLabel: "Beginner",
      },
      {
        link: "/extras/listening/penguin-readers/elementary",
        linkLabel: "Elementary",
      },
      {
        link: "/extras/listening/penguin-readers/pre-intermediate",
        linkLabel: "Pre-Intermediate",
      },
      {
        link: "/extras/listening/penguin-readers/intermediate",
        linkLabel: "Intermediate",
      },
      {
        link: "/extras/listening/penguin-readers/upper-intermediate",
        linkLabel: "Upper-Intermediate",
      },
      {
        link: "/extras/listening/penguin-readers/advanced",
        linkLabel: "advanced",
      },
    ],
  },
];

export default function PenguinReaders() {
  return (
    <>
    <Whiteboard title="Extras" subtitle="Litening" descriptions={["Penguin Readers"]} />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
