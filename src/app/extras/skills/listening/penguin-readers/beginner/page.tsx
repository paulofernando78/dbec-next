import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

const descriptions = [
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Starter / Beginner",
        contents: [
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/a-new-zealand-adventure",
            checkboxLabelLink: "A New Zealand Adventure • 08:05",
          },
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/flying-home",
            checkboxLabelLink: "Flying home • 10:13",
          },
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/marcel-and-the-white-star",
            checkboxLabelLink: "Marcel and the White Star • 09:54",
          },
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/newspaer-chase",
            checkboxLabelLink: "Newspaper Chase • 08:18",
          },
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/simon-and-the-spy",
            checkboxLabelLink: "Simon and the Spy • 11:21",
          },
          {
            checkboxLink:
              "/extras/skills/listening/penguin-readers/beginner/the-fireboy",
            checkboxLabelLink: "The Fireboy • 12:34",
          },
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/the-last-photo",
            checkboxLabelLink: "The Last Photo • 08:48",
          },
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/the-leopard-and-the-lighthouse",
            checkboxLabelLink: "The Leopard and the Lighthouse • 10:30",
          },
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/the-pearl-girl",
            checkboxLabelLink: "The Pearl Girl • 11:47",
          },
          {
            checkboxLink:
              "/extras/listening/penguin-readers/beginner/who-wants-to-be=a=star",
            checkboxLabelLink: "Who wants to be a star • 10:09",
          },
        ],
      },
    ],
  },
];

export default function Beginner() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Listening"
        descriptions={["Penguin Readers"]}
      />
      <div>
        <DescriptionCard descriptions={descriptions} />
      </div>
    </>
  );
}
