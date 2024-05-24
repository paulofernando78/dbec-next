import { DescriptionCard } from "@/components/DescriptionCard/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import React from "react";

const descriptions = [
  {
    label: "EASYSTARTS",
    contents: [
      {
        checkboxLink: "...",
        checkboxLabelLink: "A New Zealand Adventure • 08:05",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "Flying home • 10:13",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "Marcel and the White Star • 09:54",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "Newspaper Chase • 08:18",
      },
      {
        link: "...",
        linkLabel: "AAA",
        globeLink: "...",
        globeLabel: "AAA",
        checkboxLink: "...",
        checkboxLabelLink: "Simon and the Spy • 11:21",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "The Fireboy • 12:34",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "The Last Photo • 08:48",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "The Leopard and the Lighthouse • 10:30",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "The Pearl Girl • 11:47",
      },
      {
        checkboxLink: "...",
        checkboxLabelLink: "Who wants to be a star • 10:09",
      },
    ],
  },
  {
    label: "Level 1",
    contents: [
      {
        globeLink: "...",
        globeLabel: "...",
      },
    ],
  },
  {
    label: "Level 2",
    contents: [
      {
        link: "A",
        linkLabel: "A",
      },
    ],
  },
  {
    label: "Level 3",
    contents: [
      {
        link: "A",
        linkLabel: "A",
        globeLink: "...",
        globeLabel: "...",
        checkboxLink: "...",
        checkboxLabelLink: "...",
      },
    ],
  },
  {
    label: "Level 4",
    contents: [
      {
        checkboxLink: "...",
        checkboxLabelLink: "...",
      },
    ],
  },
  {
    label: "Level 5",
    contents: [
      {
        checkboxLink: "...",
        checkboxLabelLink: "...",
      },
    ],
  },
  {
    label: "Level 6",
    contents: [
      {
        checkboxLink: "...",
        checkboxLabelLink: "...",
      },
    ],
  },
];

export default function PenguinReaders() {
  return (
    <>
    <Whiteboard title="Litening" subtitle="Penguin Readers" />
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
