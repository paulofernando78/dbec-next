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
            checkboxLabel: "Unit 27 • <span class='bold'>could</span> (<span class='bold'>do</span>) and <span class='bold'>could have</span> (<span class='bold'>done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-28",
            checkboxLabel: "Unit 28 • <span class='bold'>must</span> and <span class='bold'>can't</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-29",
            checkboxLabel: "Unit 29 • <span class='bold'>may</span> and <span class='bold'>might</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-30",
            checkboxLabel: "Unit 30 • <span class='bold'>may </span> and <span class='bold'>might</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-31",
            checkboxLabel: "Unit 31 • <span class='bold'>have to</span> and <span class='bold'>must</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-32",
            checkboxLabel: "Unit 32 • <span class='bold'>must</span> / <span class='bold'>mustn't</span> / <span class='bold'>needn't</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-33",
            checkboxLabel: "Unit 33 • <span class='bold'>should</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-34",
            checkboxLabel: "Unit 34 • <span class='bold'>should</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-35",
            checkboxLabel: "Unit 35 • <span class='bold'>I'd better...</span> <span class='bold'>it's time...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-36",
            checkboxLabel: "Unit 36 • <span class='bold'>would</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-37",
            checkboxLabel: "Unit 37 • <span class='bold'>can</span> / <span class='bold'>could</span> / <span class='bold'>would you</span>... ? (Requests, offers, permission and invitations)",
          },
        ],
      },
      // Passive
      {
        bgColor: "black",
        textColor: "white",
        label: "if and wish",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-38",
            checkboxLabel: "Unit 38 • <span class='bold'>if I do...</span> and <span class='bold'>if I did...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-39",
            checkboxLabel: "Unit 39 • <span class='bold'>if I knew</span> <span class='bold'>I wish I knew...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-40",
            checkboxLabel: "Unit 40 • <span class='bold'>if I had known</span> <span class='bold'>I wish I had known</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-41",
            checkboxLabel: "Unit 41 • <span class='bold'><span class='bold'>wish</span></span>",
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
            checkboxLink: "/extras/grammar/intermediate/unit-42",
            checkboxLabel: "Unit 42 • Passive 1 (<span class='bold'>is done</span> / <span class='bold'>was done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-43",
            checkboxLabel: "Unit 43 • Passive 2 (<span class='bold'>be done</span> / <span class='bold'>been done</span> / <span class='bold'>being done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-44",
            checkboxLabel: "Unit 44 • Passive 3",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-45",
            checkboxLabel: "Unit 45 • <span class='bold'>It is said that...</span> / <span class='bold'>he is said to...</span> / <span class='bold'>he is supposed to...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-46",
            checkboxLabel: "Unit 46 • <span class='bold'>have</span> something <span class='bold'>done</span>",
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
            checkboxLink: "/extras/grammar/intermediate/unit-47",
            checkboxLabel: "Unit 47 • Reported speech 1 (<span class='bold'>he said that...</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-48",
            checkboxLabel: "Unit 48 • Reported speech 2",
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
            checkboxLink: "/extras/grammar/intermediate/unit-49",
            checkboxLabel: "Unit 49 • Questions 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-50",
            checkboxLabel: "Unit 50 • Questions 2 ( <span class='bold'>do you know where...?</span> / <span class='bold'>he asked me where...</span> )",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-51",
            checkboxLabel: "Unit 51 • Auxiliary verbs (<span class='bold'>have</span> / <span class='bold'>do</span> / <span class='bold'>can</span>) / <span class='bold'>I think so</span> / <span class='bold'>I hope so</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-52",
            checkboxLabel: "Unit 52 • Question tags (<span class='bold'>do you?</span> / <span class='bold'>isn't?</span>, etc.)",
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
            checkboxLink: "/extras/grammar/intermediate/unit-53",
            checkboxLabel: "Unit 53 • Verb + <span class='bold'>-ing</span> (<span class='bold'>enjoy doing</span> / <span class='bold'>stop doing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-54",
            checkboxLabel: "Unit 54 • Verb + <span class='bold'>to...</span> (<span class='bold'>decide to...</span> / <span class='bold'>forget to...</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-55",
            checkboxLabel: "Unit 55 • Verb (+obejct) + <span class='bold'>to...</span> (<span class='bold'>I want you to...</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-56",
            checkboxLabel: "Unit 56 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 1 (<span class='bold'>remember</span>, <span class='bold'>regreat</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-57",
            checkboxLabel: "Unit 57 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 2 (<span class='bold'>try</span>, <span class='bold'>need</span>, <span class='bold'>help</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-58",
            checkboxLabel: "Unit 58 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 3 (<span class='bold'>like</span>, <span class='bold'>would like</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-59",
            checkboxLabel: "Unit 59 • <span class='bold'>prefer</span> and <span class='bold'>would rather</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-60",
            checkboxLabel: "***Unit 60 • Preposition (<span class='bold'>in</span> / <span class='bold'>for</span> / <span class='bold'>about</span>, etc.) + <span class='bold'>-ing</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-61",
            checkboxLabel: "Unit 61 • <span class='bold'>be</span> / <span class='bold'>get used to...</span> (<span class='bold'>I'm used to...</span>) ",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-62",
            checkboxLabel: "Unit 62 • Verb + preposition + <span class='bold'>-ing</span> (<span class='bold'>succeed in</span> + <span class='bold'>-ing</span> / <span class='bold'>insist on</span> + <span class='bold'>-ing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-63",
            checkboxLabel: "Unit 63 • <span class='bold'>there's no point in -ing</span> / <span class='bold'>it's worth -ing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-64",
            checkboxLabel: "Unit 64 • <span class='bold'>to...</span>, <span class='bold'>for...</span> and <span class='bold'>so that...</span>"
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-65",
            checkboxLabel: "Unit 65 • Adjective + <span class='bold'>to...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-66",
            checkboxLabel: "Unit 66 • <span class='bold'>to...</span> (afraid <span class='bold'>to do</span>) and preposition + <span class='bold'>-ing</span> (afraid <span class='bold'>of -ing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-67",
            checkboxLabel: "Unit 67 • <span class='bold'>see somebody do</span> and <span class='bold'>see somebody doing</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-68",
            checkboxLabel: "Unit 68 • <span class='bold'>-ing</span> clauses (He hurst knee <span class='bold'>playing football</span>",
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
            checkboxLink: "/extras/grammar/intermediate/unit-69",
            checkboxLabel: "Unit 69 • Countable and uncountable 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-70",
            checkboxLabel: "Unit 70 • Countable and uncountable 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-71",
            checkboxLabel: "Unit 71 • Countable nouns with <span class='bold'>a</span> / <span class='bold'>an</span> and <span class='bold'>some</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-72",
            checkboxLabel: "Unit 72 • <span class='bold'>a</span> / <span class='bold'>an</span> and <span class='bold'>the</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-73",
            checkboxLabel: "Unit 73 • <span class='bold'>the</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-74",
            checkboxLabel: "Unit 74 • <span class='bold'>the</span> 2 (<span class='bold'>school</span> / <span class='bold'>the school</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-75",
            checkboxLabel: "Unit 75 • <span class='bold'>the</span> 3 (<span class='bold'>children</span> / <span class='bold'>the children</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-76",
            checkboxLabel: "Unit 76 • <span class='bold'>the</span> 4 (<span class='bold'>the giraffe</span> / <span class='bold'>the telephone</span> / <span class='bold'>the old</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-77",
            checkboxLabel: "Unit 77 • Names with and without <span class='bold'>the</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-78",
            checkboxLabel: "Unit 78 • Names with ad without <span class='bold'the</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-79",
            checkboxLabel: "Unit 79 • Singular and plural",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-80",
            checkboxLabel: "Unit 80 • Noun + noun (a <span class='bold'>bus driver</span> / a <span class='bold'>headache</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-81",
            checkboxLabel: "Unit 81 • <span class='bold'>-'s</span> (<span class='bold'>your sister's</span> name) and <span class='bold'>xxx</span> of... (the name <span class='bold'>of the book</span>)",
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
