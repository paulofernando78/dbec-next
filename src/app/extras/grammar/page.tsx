import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
  {
    label: "Present",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit 1 • am/is/are",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 2 • am/is/are (questons)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 3 • I am doing (present continuous)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 4 • are you doing? (present continuous questions)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 5 • I do/work/like etc. (simple present)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 6 • I don't... (simple present negative)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 7 • Do you? (simple present questions)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink:
          "Unit 8 • I am doing (present continouos) and I do (simple present)",
      },
      {
        link: "/extras/grammar/uni-",
        labelLink: "Unit 9 • I have... and I've got...",
      },
    ],
  },
  {
    label: "Past",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Present Perfect",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Passive",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Verb Forms",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Future",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Modals, Imperatives, etc.",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "There and It",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Auxilary verbs",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Questions",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Reported speech",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "-Ing and To",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Go, Get, Do, Make and Have",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Pronouns and Possessives",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "A and The",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Determines and Pronouns",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Adjetives and Adverbs",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Word order",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Conjunctions and Clauses",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Prepositions",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Phrasal verbs",
    contents: [
      {
        link: "/extras/grammar/uni-1",
        labelLink: "Unit ... • ...",
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
