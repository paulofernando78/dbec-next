import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard";
import React from "react";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Elementary",
        contents: [
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/brown-eyes",
            checkboxLabelLink: "Brown Eyes • 00:00",
          },
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/the-adventure-of-tom-sawyer",
            checkboxLabelLink: "The adventure of Tom Sawer • 00:00",
          },
        ],
      },
    ],
  },
];

export default function Elementary() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Listening"
        descriptions={["Penguin Readers", "Elementary"]}
      />
      <div>
        <DescriptionCard descriptions={descriptions} />
      </div>
    </>
  );
}
