import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  {
    subContents: [
      // Present and past
      {
        bgColor: "black",
        textColor: "white",
        label: "Present and past",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 • Present continuous (<span class='bold'>I am doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-2",
            checkboxLabel: "Unit 2 • Simple present (<span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-3",
            checkboxLabel: "Unit 3 • Present continuous and Present simple 1 (<span class='bold'>I am doing</span> and <span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-4",
            checkboxLabel: "Unit 4 • Present continuous and Present simple 2 (<span class='bold'>I am doing</span> and <span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-5",
            checkboxLabel: "Unit 5 • Simple past (<span class='bold'>I did</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 6 • (<span class='bold'>I was doing</span>)",
          },
        ],
      },
      // Present perfect and past
      {
        bgColor: "black",
        textColor: "white",
        label: "Present perfect and past",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-7",
            checkboxLabel: "Unit 7 • Present perfect 1 (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-8",
            checkboxLabel: "Unit 8 • Present perfect 2 (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-9",
            checkboxLabel: "Unit 9 • Present perfect continuous (<span class='bold'>I have been doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-10",
            checkboxLabel: "Unit 10 • Present perfect continuous and simple (<span class='bold'>I have been doing</span> and <span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-11",
            checkboxLabel: "Unit 11 • <span class='bold'>How long have you</span> (<span class='bold'>been</span>)<span class='bold'>...</span> ?",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-12",
            checkboxLabel: "Unit 12 • <span class='bold'>for</span> and <span class='bold'>since</span> / <span class='bold'>when... ?</span> / and <span class='bold'>how long... ?</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-13",
            checkboxLabel: "Unit 13 • Present perfect and past 1 (<span class='bold'>I have done</span> and <span class='bold'>I did</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-14",
            checkboxLabel: "Unit 14 • Present perfect and past 2 (<span class='bold'>I have done</span> and <span class='bold'>I did</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-15",
            checkboxLabel: "Unit 15 • Past perfect (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-16",
            checkboxLabel: "Unit 16 • Past perfect continouos (<span class='bold'>I had been doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-17",
            checkboxLabel: "Unit 17 • <span class='bold'>have</span> and <span class='bold'>have got</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-18",
            checkboxLabel: "Unit 18 • <span class='bold'>used to</span> (<span class='bold'>do</span>)",
          },
        ],
      },
      // Future
      {
        bgColor: "black",
        textColor: "white",
        label: "Future",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-19",
            checkboxLabel: "Unit 19 • Present tenses (<span class='bold'>I am doing</span> / <span class='bold'>I do</span>) for the future",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-20",
            checkboxLabel: "Unit 20 • <span class='bold'>I'm going to</span> (<span class='bold'>do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-21",
            checkboxLabel: "Unit 21 • <span class='bold'>will</span> and <span class='bold'>shall</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-22",
            checkboxLabel: "Unit 22 • <span class='bold'>will</span> and <span class='bold'>shall</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-23",
            checkboxLabel: "Unit 23 • <span class='bold'>I will</span> and <span class='bold'>I'm going to</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-24",
            checkboxLabel: "Unit 24 • <span class='bold'>will be doing</span> and <span class='bold'>will have done</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-25",
            checkboxLabel: "Unit 25 • <span class='bold'>When I do</span> and <span class='bold'>When I've done</span> / <span class='bold'>if</span> and <span class='bold'>when</span>",
          },
        ],
      },
      // Modals
      {
        bgColor: "black",
        textColor: "white",
        label: "Modals",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-26",
            checkboxLabel: "Unit 26 • <span class='bold'>can</span>, <span class='bold'>could</span> and (<span class='bold'>be</span>) <span class='bold'>able to</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-27",
            checkboxLabel: "Unit 27 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-28",
            checkboxLabel: "Unit 28 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-29",
            checkboxLabel: "Unit 29 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-30",
            checkboxLabel: "Unit 30 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-31",
            checkboxLabel: "Unit 31 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-32",
            checkboxLabel: "Unit 32 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-33",
            checkboxLabel: "Unit 33 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-34",
            checkboxLabel: "Unit 34 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-35",
            checkboxLabel: "Unit 35 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-36",
            checkboxLabel: "Unit 36 •",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-37",
            checkboxLabel: "Unit 37 •",
          },
        ],
      },
      // Passive
      {
        bgColor: "black",
        textColor: "white",
        label: "Passive",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Reported speech
      {
        bgColor: "black",
        textColor: "white",
        label: "Reported speech",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Questions and auxiliary verbs
      {
        bgColor: "black",
        textColor: "white",
        label: "Questions and auxiliary verbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // -ing and to...
      {
        bgColor: "black",
        textColor: "white",
        label: "-ing and to...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Articles and nouns
      {
        bgColor: "black",
        textColor: "white",
        label: "Articles and nouns",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Pronouns and determiners
      {
        bgColor: "black",
        textColor: "white",
        label: "Pronouns and determiners",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Relative clauses
      {
        bgColor: "black",
        textColor: "white",
        label: "Relative clauses",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Adjetives and adverbs
      {
        bgColor: "black",
        textColor: "white",
        label: "...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Conjuctions and prepositions
      {
        bgColor: "black",
        textColor: "white",
        label: "...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Prepositions
      {
        bgColor: "black",
        textColor: "white",
        label: "...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
      // Phrasal verbs
      {
        bgColor: "black",
        textColor: "white",
        label: "...",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 1 •",
          },
        ],
      },
    ],
  },
];

<ContentCard contents={contents} />;

export default function Grammar() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" descriptions={["Intermediate"]}/>
      <ContentCard contents={contents} />
    </>
  );
}
