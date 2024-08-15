import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  // Present
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Present",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-1",
            checkboxLabel: "Unit 1 • am/is/are",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-2",
            checkboxLabel: "Unit 2 • am/is/are (questons)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-3",
            checkboxLabel: "Unit 3 • I am doing (present continuous)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-4",
            checkboxLabel: "Unit 4 • are you doing? (present continuous questions)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-5",
            checkboxLabel: "Unit 5 • I do/work/like etc. (simple present)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-6",
            checkboxLabel: "Unit 6 • I don't... (simple present negative)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-7",
            checkboxLabel: "Unit 7 • Do you? (simple present questions)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-8",
            checkboxLabel:
              "Unit 8 • I am doing (present continouos) and I do (simple present)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-9",
            checkboxLabel: "Unit 9 • I have... and I've got...",
          },
        ],
      },
    ],
  },
  // Past
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Past",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-10",
            checkboxLabel: "Unit 10 • was / were",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-11",
            checkboxLabel: "Unit 11 • worked / got / went etc. (simple past)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-12",
            checkboxLabel:
              "Unit 12 • I didn't... Did you? (simple past negative and questions)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-13",
            checkboxLabel: "Unit 13 • I was doing (past continuous)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/uni-14",
            checkboxLabel:
              "Unit 14 • I was doing (past continuous) I did (simple past)",
          },
        ],
      },
    ],
  },
  // Present Perfect
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Present Perfect",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-15",
            checkboxLabel: "Unit 15 • I have done (present present 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-16",
            checkboxLabel: "Unit 16 • I've just (present perfect 2)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-17",
            checkboxLabel: "Unit 17 • Have you ever... ? (present perfect 3)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-18",
            checkboxLabel: "Unit 18 • How long have you... ?",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-19",
            checkboxLabel: "Unit 19 • for / since / ago",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-20",
            checkboxLabel:
              "Unit 20 • I have done (present perfect) and I did (past)",
          },
        ],
      },
    ],
  },
  // Passive
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Passive",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-21",
            checkboxLabel: "Unit 21 • is done / was done",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-22",
            checkboxLabel: "Unit 22 • is being done / has been done",
          },
        ],
      },
    ],
  },
  // Verb Forms
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Verb Forms",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-23",
            checkboxLabel: "Unit 23 • be / have / do in present and past tenses",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-24",
            checkboxLabel: "Unit 24 • Regular and irregular verbs",
          },
        ],
      },
    ],
  },
  // Future
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Future",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-25",
            checkboxLabel: "Unit 25 • What are you doing tomorrow?",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-26",
            checkboxLabel: "Unit 26 • I'm going to...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-27",
            checkboxLabel: "Unit 27 • will/shall 1",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-28",
            checkboxLabel: "Unit 28 • will/shall 2",
          },
        ],
      },
    ],
  },
  // Modals, Imperatives, etc.
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Modals, Imperatives, etc.",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-29",
            checkboxLabel: "Unit 29 • might",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-30",
            checkboxLabel: "Unit 30 • can and could",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-31",
            checkboxLabel: "Unit 31 • must / mustn't / don't need to",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-32",
            checkboxLabel: "Unit 32 • should",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-33",
            checkboxLabel: "Unit 33 • have to...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-33",
            checkboxLabel: "Unit 34 • Would you like...? I'd like...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-34",
            checkboxLabel: "Unit 35 • Do this? Don't do that! Let's do this!",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-35",
            checkboxLabel: "Unit 36 • I used to...",
          },
        ],
      },
    ],
  },
  // There and it
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "There and It",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-37",
            checkboxLabel: "Unit 37 • There is / There are",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-38",
            checkboxLabel:
              "Unit 38 • there was / were there, has / have been, there will be",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-39",
            checkboxLabel: "Unit 39 • it...",
          },
        ],
      },
    ],
  },
  // Auxiliary verbs
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Auxilary verbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-40",
            checkboxLabel: "Unit 40 • I am, I don't etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-41",
            checkboxLabel: "Unit 41 • Have you? Are you? Don't you? etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-42",
            checkboxLabel: "Unit 42 • too/either, so am I / neither do I etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-43",
            checkboxLabel: "Unit 43 • isn't, haven't, don't etc. (negatives)",
          },
        ],
      },
    ],
  },
  // Questions
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Questions",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-44",
            checkboxLabel:
              "Unit 44 • is it...? / have you...? / do they...? etc. (questions 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-45",
            checkboxLabel:
              "Unit 45 • Who saw you? / Who did you see? (questions 2)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-46",
            checkboxLabel:
              "Unit 46 • Who is she talking to? / What is it like? (questions 3)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-47",
            checkboxLabel: "Unit 47 • What? / Which? / How? (questions 4)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-48",
            checkboxLabel: "Unit 48 • How long does it take... ?",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-49",
            checkboxLabel: "Unit 49 • Do you know where... ?",
          },
        ],
      },
    ],
  },
  // Reported speech
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Reported speech",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-50",
            checkboxLabel: "Unit 50 • She said that... / He told me that...",
          },
        ],
      },
    ],
  },
  // -Ing and To
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "-Ing and To",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-51",
            checkboxLabel: "Unit 51 • work / working, go / going, do / doing",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-52",
            checkboxLabel: "Unit 52 • to... (want to do) and -ing (I enjoy doing)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-53",
            checkboxLabel: "Unit 53 • I want you to... / I told you to...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-54",
            checkboxLabel: "Unit 54 • I went to the shop to...",
          },
        ],
      },
    ],
  },
  // Go, Get, Do, Make and Have
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Go, Get, Do, Make and Have",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-55",
            checkboxLabel: "Unit 55 • go to... / go on... / go for... / go -ing",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-56",
            checkboxLabel: "Unit 56 • get",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-57",
            checkboxLabel: "Unit 57 • do and make",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-58",
            checkboxLabel: "Unit 58 • have",
          },
        ],
      },
    ],
  },
  // Pronouns and Possessives
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Pronouns and Possessives",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-59",
            checkboxLabel: "Unit 59 • I/me, he/him, they/them etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-60",
            checkboxLabel: "Unit 60 • my/his/their etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-61",
            checkboxLabel: "Unit 61 • Whose is this? It's mine/yours/hers etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-62",
            checkboxLabel: "Unit 62 • I/me/my/mine",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-63",
            checkboxLabel: "Unit 63 • myself/yourself/themselves etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-64",
            checkboxLabel: "Unit 64 • -'s (Kate's camera / my brother's car etc.)",
          },
        ],
      },
    ],
  },
  // A and The
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "A and The",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-65",
            checkboxLabel: "Unit 65 • a/an",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-66",
            checkboxLabel:
              "Unit 66 • train(s) / bus(es) (singular and plural nouns)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-67",
            checkboxLabel:
              "Unit 67 • a bottle / some water (countable/uncountable 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-68",
            checkboxLabel:
              "Unit 68 • a cake / some cake / some cakes (countable/uncoutable 2)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-69",
            checkboxLabel: "Unit 69 • a/an and the",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-70",
            checkboxLabel: "Unit 70 • the",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-71",
            checkboxLabel:
              "Unit 71 • go to work / go home / go to the movie theater",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-72",
            checkboxLabel: "Unit 72 • I like music / I hate exams",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-73",
            checkboxLabel: "Unit 73 • the (name of places)",
          },
        ],
      },
    ],
  },
  // Determiners and Pronouns
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Determines and Pronouns",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-74",
            checkboxLabel: "Unit 74 • this/that/these/those",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-75",
            checkboxLabel: "Unit 75 • one/ones",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-76",
            checkboxLabel: "Unit 76 • some and any",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-77",
            checkboxLabel: "Unit 77 • not + any / no / none",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-78",
            checkboxLabel:
              "Unit 78 • not + anybody/anyone/anything, nobody/no one/nothing",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-79",
            checkboxLabel: "Unit 79 • somebody/anything/nowhere etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-80",
            checkboxLabel: "Unit 80 • every and all",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-81",
            checkboxLabel: "Unit 81 • all, most, some, any, no/none",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-82",
            checkboxLabel: "Unit 82 • both, either, neither",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-83",
            checkboxLabel: "Unit 83 • a lot, much, many",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-84",
            checkboxLabel: "Unit 84 • (a) little, (a) few",
          },
        ],
      },
    ],
  },
  // Adjetives and Adverbs
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Adjetives and Adverbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-85",
            checkboxLabel: "Unit 85 • old, nice, interesting etc. (adjectives)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-86",
            checkboxLabel: "Unit 86 • quickly / badly / suddenly etc. (adverbs)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-87",
            checkboxLabel: "Unit 87 • old/older, expensive/more expensive",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-88",
            checkboxLabel: "Unit 88 • older than... more expensive than...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-89",
            checkboxLabel: "Unit 89 • not as... as",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-90",
            checkboxLabel: "Unit 90 • the oldest, the most expensive",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-91",
            checkboxLabel: "Unit 91 • enough",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-92",
            checkboxLabel: "Unit 92 • too",
          },
        ],
      },
    ],
  },
  // Word order
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Word order",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-93",
            checkboxLabel: "Unit 93 • He speaks English very well. (word order 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-94",
            checkboxLabel: "Unit 94 • always/usually/often etc. (word order 2)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-95",
            checkboxLabel: "Unit 95 • still, yet, already",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-96",
            checkboxLabel: "Unit 96 • Give me that book!, Give it to me!",
          },
        ],
      },
    ],
  },
  // Conjunctions and Clauses
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Conjunctions and Clauses",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-97",
            checkboxLabel: "Unit 97 • and, but, or, so, because",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-98",
            checkboxLabel: "Unit 98 • When...",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-99",
            checkboxLabel: "Unit 99 • If we go..., If you see... etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-100",
            checkboxLabel: "Unit 100 • If I had..., If we went... etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-101",
            checkboxLabel:
              "Unit 101 • a person who... a thing that / which... (relative clauses 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-102",
            checkboxLabel:
              "Unit 102 • the people we went, the hotel you stayed at (relative clauses 2)",
          },
        ],
      },
    ],
  },
  // Prepositions
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Prepositions",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-103",
            checkboxLabel: "Unit 103 • at 8 o'clock, on Monday, in April",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-104",
            checkboxLabel: "Unit 104 • from... to, until, since, for",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-105",
            checkboxLabel: "Unit 105 • before, after, during, while",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-106",
            checkboxLabel: "Unit 106 • in / at / on (places 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-107",
            checkboxLabel: "Unit 107 • in / at / on (places 2)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-108",
            checkboxLabel: "Unit 108 • to / in / at (places 3)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-109",
            checkboxLabel: "Unit 109 • under / behind / opposite etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-110",
            checkboxLabel: "Unit 110 • up / over / through etc.",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-111",
            checkboxLabel: "Unit 111 • on / at / by / with / about",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-112",
            checkboxLabel:
              "Unit 112 • afraid of..., good at... etc. of/at/for etc. (prepositions) + -ing",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-113",
            checkboxLabel:
              "Unit 113 • list to..., look at... etc. (verb + preposition)",
          },
        ],
      },
    ],
  },
  // Phrasal verbs
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Phrasal verbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/elementary/unit-114",
            checkboxLabel:
              "Unit 114 • go in, fall off, run away etc. (phrasal verbs 1)",
          },
          {
            checkboxLink: "/extras/grammar/elementary/unit-115",
            checkboxLabel:
              "Unit 115 • put on your shoes / put your shoes on (phrasal verbs 2)",
          },
        ],
      },
    ],
  },
];

export default function Grammar() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Grammar" descriptions={["Elementary"]} />
      <ContentCard contents={contents} />
    </>
  );
}
