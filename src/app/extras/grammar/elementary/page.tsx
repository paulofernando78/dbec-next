import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
  {
    label: "Present",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit 1 • am/is/are",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 2 • am/is/are (questons)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 3 • I am doing (present continuous)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 4 • are you doing? (present continuous questions)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 5 • I do/work/like etc. (simple present)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 6 • I don't... (simple present negative)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 7 • Do you? (simple present questions)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink:
          "Unit 8 • I am doing (present continouos) and I do (simple present)",
      },
      {
        checkboxLink: "/extras/grammar/uni-",
        checkboxLabelLink: "Unit 9 • I have... and I've got...",
      },
    ],
  },
  {
    label: "Past",
    contents: [
      {
        checkboxLink: "/extras/grammar/unit-10",
        checkboxLabelLink: "Unit 10 • was/were",
      },
      {
        checkboxLink: "/extras/grammar/unit-11",
        checkboxLabelLink: "Unit 11 • worked/got/went etc. (simple past)",
      },
      {
        checkboxLink: "/extras/grammar/unit-12",
        checkboxLabelLink: "Unit 12 • I didn't... Did you? (simple past negative and questions)",
      },
      {
        checkboxLink: "/extras/grammar/unit-13",
        checkboxLabelLink: "Unit 13 • I was doing (past continuous)",
      },
      {
        checkboxLink: "/extras/grammar/uni-14",
        checkboxLabelLink: "Unit 14 • I was doing (past continuous) I did (simple past)",
      },
    ],
  },
  {
    label: "Present Perfect",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Passive",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Verb Forms",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Future",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Modals, Imperatives, etc.",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "There and It",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Auxilary verbs",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Questions",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Reported speech",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "-Ing and To",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Go, Get, Do, Make and Have",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Pronouns and Possessives",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "A and The",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Determines and Pronouns",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Adjetives and Adverbs",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Word order",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Conjunctions and Clauses",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Prepositions",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
      },
    ],
  },
  {
    label: "Phrasal verbs",
    contents: [
      {
        checkboxLink: "/extras/grammar/uni-1",
        checkboxLabelLink: "Unit ... • ...",
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
