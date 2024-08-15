import { DescriptionCard } from "@/components/Cards/DescriptionCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const descriptions = [
  // Present
  {
    subDescriptions: [
      {
        // Present
        bgColor: "black",
        textColor: "white",
        label: "Present",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-1",
            linkLabel: "Unit 1 • am/is/are",
          },
          {
            link: "/extras/grammar/elementary/unit-2",
            linkLabel: "Unit 2 • am/is/are (questons)",
          },
          {
            link: "/extras/grammar/elementary/unit-3",
            linkLabel: "Unit 3 • I am doing (present continuous)",
          },
          {
            link: "/extras/grammar/elementary/unit-4",
            linkLabel: "Unit 4 • are you doing? (present continuous questions)",
          },
          {
            link: "/extras/grammar/elementary/unit-5",
            linkLabel: "Unit 5 • I do/work/like etc. (simple present)",
          },
          {
            link: "/extras/grammar/elementary/unit-6",
            linkLabel: "Unit 6 • I don't... (simple present negative)",
          },
          {
            link: "/extras/grammar/elementary/unit-7",
            linkLabel: "Unit 7 • Do you? (simple present questions)",
          },
          {
            link: "/extras/grammar/elementary/unit-8",
            linkLabel:
              "Unit 8 • I am doing (present continouos) and I do (simple present)",
          },
          {
            link: "/extras/grammar/elementary/unit-9",
            linkLabel: "Unit 9 • I have... and I've got...",
          },
        ],
      },
    ],
  },
  // Past
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Past",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-10",
            linkLabel: "Unit 10 • was / were",
          },
          {
            link: "/extras/grammar/elementary/unit-11",
            linkLabel: "Unit 11 • worked / got / went etc. (simple past)",
          },
          {
            link: "/extras/grammar/elementary/unit-12",
            linkLabel:
              "Unit 12 • I didn't... Did you? (simple past negative and questions)",
          },
          {
            link: "/extras/grammar/elementary/unit-13",
            linkLabel: "Unit 13 • I was doing (past continuous)",
          },
          {
            link: "/extras/grammar/elementary/uni-14",
            linkLabel:
              "Unit 14 • I was doing (past continuous) I did (simple past)",
          },
        ],
      },
    ],
  },
  // Present Perfect
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Present Perfect",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-15",
            linkLabel: "Unit 15 • I have done (present present 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-16",
            linkLabel: "Unit 16 • I've just (present perfect 2)",
          },
          {
            link: "/extras/grammar/elementary/unit-17",
            linkLabel: "Unit 17 • Have you ever... ? (present perfect 3)",
          },
          {
            link: "/extras/grammar/elementary/unit-18",
            linkLabel: "Unit 18 • How long have you... ?",
          },
          {
            link: "/extras/grammar/elementary/unit-19",
            linkLabel: "Unit 19 • for / since / ago",
          },
          {
            link: "/extras/grammar/elementary/unit-20",
            linkLabel:
              "Unit 20 • I have done (present perfect) and I did (past)",
          },
        ],
      },
    ],
  },
  // Passive
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Passive",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-21",
            linkLabel: "Unit 21 • is done / was done",
          },
          {
            link: "/extras/grammar/elementary/unit-22",
            linkLabel: "Unit 22 • is being done / has been done",
          },
        ],
      },
    ],
  },
  // Verb Forms
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Verb Forms",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-23",
            linkLabel: "Unit 23 • be / have / do in present and past tenses",
          },
          {
            link: "/extras/grammar/elementary/unit-24",
            linkLabel: "Unit 24 • Regular and irregular verbs",
          },
        ],
      },
    ],
  },
  // Future
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Future",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-25",
            linkLabel: "Unit 25 • What are you doing tomorrow?",
          },
          {
            link: "/extras/grammar/elementary/unit-26",
            linkLabel: "Unit 26 • I'm going to...",
          },
          {
            link: "/extras/grammar/elementary/unit-27",
            linkLabel: "Unit 27 • will/shall 1",
          },
          {
            link: "/extras/grammar/elementary/unit-28",
            linkLabel: "Unit 28 • will/shall 2",
          },
        ],
      },
    ],
  },
  // Modals, Imperatives, etc.
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Modals, Imperatives, etc.",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-29",
            linkLabel: "Unit 29 • might",
          },
          {
            link: "/extras/grammar/elementary/unit-30",
            linkLabel: "Unit 30 • can and could",
          },
          {
            link: "/extras/grammar/elementary/unit-31",
            linkLabel: "Unit 31 • must / mustn't / don't need to",
          },
          {
            link: "/extras/grammar/elementary/unit-32",
            linkLabel: "Unit 32 • should",
          },
          {
            link: "/extras/grammar/elementary/unit-33",
            linkLabel: "Unit 33 • have to...",
          },
          {
            link: "/extras/grammar/elementary/unit-33",
            linkLabel: "Unit 34 • Would you like...? I'd like...",
          },
          {
            link: "/extras/grammar/elementary/unit-34",
            linkLabel: "Unit 35 • Do this? Don't do that! Let's do this!",
          },
          {
            link: "/extras/grammar/elementary/unit-35",
            linkLabel: "Unit 36 • I used to...",
          },
        ],
      },
    ],
  },
  // There and it
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "There and It",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-37",
            linkLabel: "Unit 37 • There is / There are",
          },
          {
            link: "/extras/grammar/elementary/unit-38",
            linkLabel:
              "Unit 38 • there was / were there, has / have been, there will be",
          },
          {
            link: "/extras/grammar/elementary/unit-39",
            linkLabel: "Unit 39 • it...",
          },
        ],
      },
    ],
  },
  // Auxiliary verbs
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Auxilary verbs",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-40",
            linkLabel: "Unit 40 • I am, I don't etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-41",
            linkLabel: "Unit 41 • Have you? Are you? Don't you? etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-42",
            linkLabel: "Unit 42 • too/either, so am I / neither do I etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-43",
            linkLabel: "Unit 43 • isn't, haven't, don't etc. (negatives)",
          },
        ],
      },
    ],
  },
  // Questions
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Questions",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-44",
            linkLabel:
              "Unit 44 • is it...? / have you...? / do they...? etc. (questions 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-45",
            linkLabel:
              "Unit 45 • Who saw you? / Who did you see? (questions 2)",
          },
          {
            link: "/extras/grammar/elementary/unit-46",
            linkLabel:
              "Unit 46 • Who is she talking to? / What is it like? (questions 3)",
          },
          {
            link: "/extras/grammar/elementary/unit-47",
            linkLabel: "Unit 47 • What? / Which? / How? (questions 4)",
          },
          {
            link: "/extras/grammar/elementary/unit-48",
            linkLabel: "Unit 48 • How long does it take... ?",
          },
          {
            link: "/extras/grammar/elementary/unit-49",
            linkLabel: "Unit 49 • Do you know where... ?",
          },
        ],
      },
    ],
  },
  // Reported speech
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Reported speech",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-50",
            linkLabel: "Unit 50 • She said that... / He told me that...",
          },
        ],
      },
    ],
  },
  // -Ing and To
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "-Ing and To",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-51",
            linkLabel: "Unit 51 • work / working, go / going, do / doing",
          },
          {
            link: "/extras/grammar/elementary/unit-52",
            linkLabel: "Unit 52 • to... (want to do) and -ing (I enjoy doing)",
          },
          {
            link: "/extras/grammar/elementary/unit-53",
            linkLabel: "Unit 53 • I want you to... / I told you to...",
          },
          {
            link: "/extras/grammar/elementary/unit-54",
            linkLabel: "Unit 54 • I went to the shop to...",
          },
        ],
      },
    ],
  },
  // Go, Get, Do, Make and Have
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Go, Get, Do, Make and Have",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-55",
            linkLabel: "Unit 55 • go to... / go on... / go for... / go -ing",
          },
          {
            link: "/extras/grammar/elementary/unit-56",
            linkLabel: "Unit 56 • get",
          },
          {
            link: "/extras/grammar/elementary/unit-57",
            linkLabel: "Unit 57 • do and make",
          },
          {
            link: "/extras/grammar/elementary/unit-58",
            linkLabel: "Unit 58 • have",
          },
        ],
      },
    ],
  },
  // Pronouns and Possessives
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Pronouns and Possessives",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-59",
            linkLabel: "Unit 59 • I/me, he/him, they/them etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-60",
            linkLabel: "Unit 60 • my/his/their etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-61",
            linkLabel: "Unit 61 • Whose is this? It's mine/yours/hers etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-62",
            linkLabel: "Unit 62 • I/me/my/mine",
          },
          {
            link: "/extras/grammar/elementary/unit-63",
            linkLabel: "Unit 63 • myself/yourself/themselves etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-64",
            linkLabel: "Unit 64 • -'s (Kate's camera / my brother's car etc.)",
          },
        ],
      },
    ],
  },
  // A and The
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "A and The",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-65",
            linkLabel: "Unit 65 • a/an",
          },
          {
            link: "/extras/grammar/elementary/unit-66",
            linkLabel:
              "Unit 66 • train(s) / bus(es) (singular and plural nouns)",
          },
          {
            link: "/extras/grammar/elementary/unit-67",
            linkLabel:
              "Unit 67 • a bottle / some water (countable/uncountable 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-68",
            linkLabel:
              "Unit 68 • a cake / some cake / some cakes (countable/uncoutable 2)",
          },
          {
            link: "/extras/grammar/elementary/unit-69",
            linkLabel: "Unit 69 • a/an and the",
          },
          {
            link: "/extras/grammar/elementary/unit-70",
            linkLabel: "Unit 70 • the",
          },
          {
            link: "/extras/grammar/elementary/unit-71",
            linkLabel:
              "Unit 71 • go to work / go home / go to the movie theater",
          },
          {
            link: "/extras/grammar/elementary/unit-72",
            linkLabel: "Unit 72 • I like music / I hate exams",
          },
          {
            link: "/extras/grammar/elementary/unit-73",
            linkLabel: "Unit 73 • the (name of places)",
          },
        ],
      },
    ],
  },
  // Determiners and Pronouns
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Determines and Pronouns",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-74",
            linkLabel: "Unit 74 • this/that/these/those",
          },
          {
            link: "/extras/grammar/elementary/unit-75",
            linkLabel: "Unit 75 • one/ones",
          },
          {
            link: "/extras/grammar/elementary/unit-76",
            linkLabel: "Unit 76 • some and any",
          },
          {
            link: "/extras/grammar/elementary/unit-77",
            linkLabel: "Unit 77 • not + any / no / none",
          },
          {
            link: "/extras/grammar/elementary/unit-78",
            linkLabel:
              "Unit 78 • not + anybody/anyone/anything, nobody/no one/nothing",
          },
          {
            link: "/extras/grammar/elementary/unit-79",
            linkLabel: "Unit 79 • somebody/anything/nowhere etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-80",
            linkLabel: "Unit 80 • every and all",
          },
          {
            link: "/extras/grammar/elementary/unit-81",
            linkLabel: "Unit 81 • all, most, some, any, no/none",
          },
          {
            link: "/extras/grammar/elementary/unit-82",
            linkLabel: "Unit 82 • both, either, neither",
          },
          {
            link: "/extras/grammar/elementary/unit-83",
            linkLabel: "Unit 83 • a lot, much, many",
          },
          {
            link: "/extras/grammar/elementary/unit-84",
            linkLabel: "Unit 84 • (a) little, (a) few",
          },
        ],
      },
    ],
  },
  // Adjetives and Adverbs
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Adjetives and Adverbs",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-85",
            linkLabel: "Unit 85 • old, nice, interesting etc. (adjectives)",
          },
          {
            link: "/extras/grammar/elementary/unit-86",
            linkLabel: "Unit 86 • quickly / badly / suddenly etc. (adverbs)",
          },
          {
            link: "/extras/grammar/elementary/unit-87",
            linkLabel: "Unit 87 • old/older, expensive/more expensive",
          },
          {
            link: "/extras/grammar/elementary/unit-88",
            linkLabel: "Unit 88 • older than... more expensive than...",
          },
          {
            link: "/extras/grammar/elementary/unit-89",
            linkLabel: "Unit 89 • not as... as",
          },
          {
            link: "/extras/grammar/elementary/unit-90",
            linkLabel: "Unit 90 • the oldest, the most expensive",
          },
          {
            link: "/extras/grammar/elementary/unit-91",
            linkLabel: "Unit 91 • enough",
          },
          {
            link: "/extras/grammar/elementary/unit-92",
            linkLabel: "Unit 92 • too",
          },
        ],
      },
    ],
  },
  // Word order
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Word order",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-93",
            linkLabel: "Unit 93 • He speaks English very well. (word order 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-94",
            linkLabel: "Unit 94 • always/usually/often etc. (word order 2)",
          },
          {
            link: "/extras/grammar/elementary/unit-95",
            linkLabel: "Unit 95 • still, yet, already",
          },
          {
            link: "/extras/grammar/elementary/unit-96",
            linkLabel: "Unit 96 • Give me that book!, Give it to me!",
          },
        ],
      },
    ],
  },
  // Conjunctions and Clauses
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Conjunctions and Clauses",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-97",
            linkLabel: "Unit 97 • and, but, or, so, because",
          },
          {
            link: "/extras/grammar/elementary/unit-98",
            linkLabel: "Unit 98 • When...",
          },
          {
            link: "/extras/grammar/elementary/unit-99",
            linkLabel: "Unit 99 • If we go..., If you see... etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-100",
            linkLabel: "Unit 100 • If I had..., If we went... etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-101",
            linkLabel:
              "Unit 101 • a person who... a thing that / which... (relative clauses 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-102",
            linkLabel:
              "Unit 102 • the people we went, the hotel you stayed at (relative clauses 2)",
          },
        ],
      },
    ],
  },
  // Prepositions
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Prepositions",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-103",
            linkLabel: "Unit 103 • at 8 o'clock, on Monday, in April",
          },
          {
            link: "/extras/grammar/elementary/unit-104",
            linkLabel: "Unit 104 • from... to, until, since, for",
          },
          {
            link: "/extras/grammar/elementary/unit-105",
            linkLabel: "Unit 105 • before, after, during, while",
          },
          {
            link: "/extras/grammar/elementary/unit-106",
            linkLabel: "Unit 106 • in / at / on (places 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-107",
            linkLabel: "Unit 107 • in / at / on (places 2)",
          },
          {
            link: "/extras/grammar/elementary/unit-108",
            linkLabel: "Unit 108 • to / in / at (places 3)",
          },
          {
            link: "/extras/grammar/elementary/unit-109",
            linkLabel: "Unit 109 • under / behind / opposite etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-110",
            linkLabel: "Unit 110 • up / over / through etc.",
          },
          {
            link: "/extras/grammar/elementary/unit-111",
            linkLabel: "Unit 111 • on / at / by / with / about",
          },
          {
            link: "/extras/grammar/elementary/unit-112",
            linkLabel:
              "Unit 112 • afraid of..., good at... etc. of/at/for etc. (prepositions) + -ing",
          },
          {
            link: "/extras/grammar/elementary/unit-113",
            linkLabel:
              "Unit 113 • list to..., look at... etc. (verb + preposition)",
          },
        ],
      },
    ],
  },
  // Phrasal verbs
  {
    subDescriptions: [
      {
        bgColor: "black",
        textColor: "white",
        label: "Phrasal verbs",
        contents: [
          {
            link: "/extras/grammar/elementary/unit-114",
            linkLabel:
              "Unit 114 • go in, fall off, run away etc. (phrasal verbs 1)",
          },
          {
            link: "/extras/grammar/elementary/unit-115",
            linkLabel:
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
      <DescriptionCard descriptions={descriptions} />
    </>
  );
}
