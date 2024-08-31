import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

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
            checkboxLabel:
              "Unit 1 • Present continuous (<span class='bold'>I am doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-2",
            checkboxLabel:
              "Unit 2 • Simple present (<span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-3",
            checkboxLabel:
              "Unit 3 • Present continuous and Present simple 1 (<span class='bold'>I am doing</span> and <span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-4",
            checkboxLabel:
              "Unit 4 • Present continuous and Present simple 2 (<span class='bold'>I am doing</span> and <span class='bold'>I do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-5",
            checkboxLabel:
              "Unit 5 • Simple past (<span class='bold'>I did</span>)",
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
            checkboxLabel:
              "Unit 7 • Present perfect 1 (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-8",
            checkboxLabel:
              "Unit 8 • Present perfect 2 (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-9",
            checkboxLabel:
              "Unit 9 • Present perfect continuous (<span class='bold'>I have been doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-10",
            checkboxLabel:
              "Unit 10 • Present perfect continuous and simple (<span class='bold'>I have been doing</span> and <span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-11",
            checkboxLabel:
              "Unit 11 • <span class='bold'>How long have you</span> (<span class='bold'>been</span>)<span class='bold'>...</span> ?",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-12",
            checkboxLabel:
              "Unit 12 • <span class='bold'>for</span> and <span class='bold'>since</span> / <span class='bold'>when... ?</span> / and <span class='bold'>how long... ?</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-13",
            checkboxLabel:
              "Unit 13 • Present perfect and past 1 (<span class='bold'>I have done</span> and <span class='bold'>I did</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-14",
            checkboxLabel:
              "Unit 14 • Present perfect and past 2 (<span class='bold'>I have done</span> and <span class='bold'>I did</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-15",
            checkboxLabel:
              "Unit 15 • Past perfect (<span class='bold'>I have done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-16",
            checkboxLabel:
              "Unit 16 • Past perfect continouos (<span class='bold'>I had been doing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-17",
            checkboxLabel:
              "Unit 17 • <span class='bold'>have</span> and <span class='bold'>have got</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-18",
            checkboxLabel:
              "Unit 18 • <span class='bold'>used to</span> (<span class='bold'>do</span>)",
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
            checkboxLabel:
              "Unit 19 • Present tenses (<span class='bold'>I am doing</span> / <span class='bold'>I do</span>) for the future",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-20",
            checkboxLabel:
              "Unit 20 • <span class='bold'>I'm going to</span> (<span class='bold'>do</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-21",
            checkboxLabel:
              "Unit 21 • <span class='bold'>will</span> and <span class='bold'>shall</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-22",
            checkboxLabel:
              "Unit 22 • <span class='bold'>will</span> and <span class='bold'>shall</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-23",
            checkboxLabel:
              "Unit 23 • <span class='bold'>I will</span> and <span class='bold'>I'm going to</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-24",
            checkboxLabel:
              "Unit 24 • <span class='bold'>will be doing</span> and <span class='bold'>will have done</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-25",
            checkboxLabel:
              "Unit 25 • <span class='bold'>When I do</span> and <span class='bold'>When I've done</span>, <span class='bold'>if</span> and <span class='bold'>when</span>",
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
            checkboxLabel:
              "Unit 26 • <span class='bold'>can</span>, <span class='bold'>could</span> and (<span class='bold'>be</span>) <span class='bold'>able to</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-27",
            checkboxLabel:
              "Unit 27 • <span class='bold'>could</span> (<span class='bold'>do</span>) and <span class='bold'>could have</span> (<span class='bold'>done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-28",
            checkboxLabel:
              "Unit 28 • <span class='bold'>must</span> and <span class='bold'>can't</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-29",
            checkboxLabel:
              "Unit 29 • <span class='bold'>may</span> and <span class='bold'>might</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-30",
            checkboxLabel:
              "Unit 30 • <span class='bold'>may </span> and <span class='bold'>might</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-31",
            checkboxLabel:
              "Unit 31 • <span class='bold'>have to</span> and <span class='bold'>must</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-32",
            checkboxLabel:
              "Unit 32 • <span class='bold'>must</span>, <span class='bold'>mustn't</span>, <span class='bold'>needn't</span>",
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
            checkboxLabel:
              "Unit 35 • <span class='bold'>I'd better...</span> <span class='bold'>it's time...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-36",
            checkboxLabel: "Unit 36 • <span class='bold'>would</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-37",
            checkboxLabel:
              "Unit 37 • <span class='bold'>can</span> / <span class='bold'>could</span> / <span class='bold'>would you</span>... ? (Requests, offers, permission and invitations)",
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
            checkboxLabel:
              "Unit 38 • <span class='bold'>if I do...</span> and <span class='bold'>if I did...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-39",
            checkboxLabel:
              "Unit 39 • <span class='bold'>if I knew</span> <span class='bold'>I wish I knew...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-40",
            checkboxLabel:
              "Unit 40 • <span class='bold'>if I had known</span> <span class='bold'>I wish I had known</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-41",
            checkboxLabel:
              "Unit 41 • <span class='bold'><span class='bold'>wish</span></span>",
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
            checkboxLabel:
              "Unit 42 • Passive 1 (<span class='bold'>is done</span> / <span class='bold'>was done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-43",
            checkboxLabel:
              "Unit 43 • Passive 2 (<span class='bold'>be done</span> / <span class='bold'>been done</span> / <span class='bold'>being done</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-44",
            checkboxLabel: "Unit 44 • Passive 3",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-45",
            checkboxLabel:
              "Unit 45 • <span class='bold'>It is said that...</span> / <span class='bold'>he is said to...</span> / <span class='bold'>he is supposed to...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-46",
            checkboxLabel:
              "Unit 46 • <span class='bold'>have</span> something <span class='bold'>done</span>",
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
            checkboxLabel:
              "Unit 47 • Reported speech 1 (<span class='bold'>he said that...</span>)",
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
            checkboxLabel:
              "Unit 50 • Questions 2 ( <span class='bold'>do you know where...?</span> / <span class='bold'>he asked me where...</span> )",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-51",
            checkboxLabel:
              "Unit 51 • Auxiliary verbs (<span class='bold'>have</span> / <span class='bold'>do</span> / <span class='bold'>can</span>, etc.),  <span class='bold'>I think so</span> / <span class='bold'>I hope so</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-52",
            checkboxLabel:
              "Unit 52 • Question tags (<span class='bold'>do you?</span> / <span class='bold'>isn't?</span>, etc.)",
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
            checkboxLabel:
              "Unit 53 • Verb + <span class='bold'>-ing</span> (<span class='bold'>enjoy doing</span> / <span class='bold'>stop doing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-54",
            checkboxLabel:
              "Unit 54 • Verb + <span class='bold'>to...</span> (<span class='bold'>decide to...</span> / <span class='bold'>forget to...</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-55",
            checkboxLabel:
              "Unit 55 • Verb (+obejct) + <span class='bold'>to...</span> (<span class='bold'>I want you to...</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-56",
            checkboxLabel:
              "Unit 56 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 1 (<span class='bold'>remember</span>, <span class='bold'>regreat</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-57",
            checkboxLabel:
              "Unit 57 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 2 (<span class='bold'>try</span>, <span class='bold'>need</span>, <span class='bold'>help</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-58",
            checkboxLabel:
              "Unit 58 • Verb + <span class='bold'>-ing</span> ot <span class='bold'>to...</span> 3 (<span class='bold'>like</span>, <span class='bold'>would like</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-59",
            checkboxLabel:
              "Unit 59 • <span class='bold'>prefer</span> and <span class='bold'>would rather</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-60",
            checkboxLabel:
              "***Unit 60 • Preposition (<span class='bold'>in</span> / <span class='bold'>for</span> / <span class='bold'>about</span>, etc.) + <span class='bold'>-ing</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-61",
            checkboxLabel:
              "Unit 61 • <span class='bold'>be</span> / <span class='bold'>get used to...</span> (<span class='bold'>I'm used to...</span>) ",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-62",
            checkboxLabel:
              "Unit 62 • Verb + preposition + <span class='bold'>-ing</span> (<span class='bold'>succeed in</span> + <span class='bold'>-ing</span> / <span class='bold'>insist on</span> + <span class='bold'>-ing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-63",
            checkboxLabel:
              "Unit 63 • <span class='bold'>there's no point in -ing</span> / <span class='bold'>it's worth -ing</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-64",
            checkboxLabel:
              "Unit 64 • <span class='bold'>to...</span>, <span class='bold'>for...</span> and <span class='bold'>so that...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-65",
            checkboxLabel:
              "Unit 65 • Adjective + <span class='bold'>to...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-66",
            checkboxLabel:
              "Unit 66 • <span class='bold'>to...</span> (afraid <span class='bold'>to do</span>) and preposition + <span class='bold'>-ing</span> (afraid <span class='bold'>of -ing</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-67",
            checkboxLabel:
              "Unit 67 • <span class='bold'>see somebody do</span> and <span class='bold'>see somebody doing</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-68",
            checkboxLabel:
              "Unit 68 • <span class='bold'>-ing</span> clauses (He hurst knee <span class='bold'>playing football</span>",
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
            checkboxLabel:
              "Unit 71 • Countable nouns with <span class='bold'>a</span> / <span class='bold'>an</span> and <span class='bold'>some</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-72",
            checkboxLabel:
              "Unit 72 • <span class='bold'>a</span> / <span class='bold'>an</span> and <span class='bold'>the</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-73",
            checkboxLabel: "Unit 73 • <span class='bold'>the</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-74",
            checkboxLabel:
              "Unit 74 • <span class='bold'>the</span> 2 (<span class='bold'>school</span> / <span class='bold'>the school</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-75",
            checkboxLabel:
              "Unit 75 • <span class='bold'>the</span> 3 (<span class='bold'>children</span> / <span class='bold'>the children</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-76",
            checkboxLabel:
              "Unit 76 • <span class='bold'>the</span> 4 (<span class='bold'>the giraffe</span> / <span class='bold'>the telephone</span> / <span class='bold'>the old</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-77",
            checkboxLabel:
              "Unit 77 • Names with and without <span class='bold'>the</span> 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-78",
            checkboxLabel:
              "Unit 78 • Names with ad without <span class='bold'the</span> 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-79",
            checkboxLabel: "Unit 79 • Singular and plural",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-80",
            checkboxLabel:
              "Unit 80 • Noun + noun (a <span class='bold'>bus driver</span> / a <span class='bold'>headache</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-81",
            checkboxLabel:
              "Unit 81 • <span class='bold'>-'s</span> (<span class='bold'>your sister's</span> name) and <span class='bold'>xxx</span> of... (the name <span class='bold'>of the book</span>)",
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
            checkboxLink: "/extras/grammar/intermediate/unit-82",
            checkboxLabel:
              "Unit 82 • <span class='bold'>myself</span> / <span class='bold'>yourself</span> / <span class='bold'>themselves</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-83",
            checkboxLabel:
              "Unit 83 • a friend of <span class='bold'>mine</span> / <span class='bold'>my own</span> house <span class='bold'>on my own</span> / <span class='bold'>by yourself</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-84",
            checkboxLabel:
              "Unit 84 • <span class='bold'>there...</span> and <span class='bold'>it...</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-85",
            checkboxLabel:
              "Unit 85 • <span class='bold'>some</span> and <span class='bold'>any</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-86",
            checkboxLabel:
              "Unit 86 • <span class='bold'>no</span> / <span class='bold'>none</span> / <span class='bold'>any</span>, <span class='bold'>nothing</span> / <span class='bold'>nobody</span>, etc.",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-87",
            checkboxLabel:
              "Unit 87 • <span class='bold'>much</span>, <span class='bold'>many</span>, <span class='bold'>little</span>, <span class='bold'>few</span>, <span class='bold'>a lot</span>, <span class='bold'>plenty</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-88",
            checkboxLabel:
              "Unit 88 • <span class='bold'>all</span> / <span class='bold'>all of </span>, <span class='bold'>most / <span class='bold'>most of</span></span>, <span class='bold'>no / none of</span> etc.",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-89",
            checkboxLabel:
              "Unit 89 • <span class='bold'>both</span> / <span class='bold'>both of</span>, <span class='bold'>either /  eother of</span>, <span class='bold'>neither</span> / <span class='bold'>neither of</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-90",
            checkboxLabel:
              "Unit 90 • <span class='bold'>all</span>, <span class='bold'>every</span>, <span class='bold'>whole</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-91",
            checkboxLabel:
              "Unit 91 • <span class='bold'>each</span> and <span class='bold'>every</span>",
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
            checkboxLink: "/extras/grammar/intermediate/unit-92",
            checkboxLabel:
              "Unit 92 • Relative clauses 1: clauses with <span class='bold'>who</span> / <span class='bold'>that</span> / <span class='bold'>which</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-93",
            checkboxLabel:
              "Unit 93 • Relative clauses 2: clauses with and without <span class='bold'>who</span> / <span class='bold'>that</span> / <span class='bold'>which</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-94",
            checkboxLabel:
              "Unit 94 • Relative clause 3: <span class='bold'>whose</span> / <span class='bold'>whom</span> / <span class='bold'>where</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-95",
            checkboxLabel:
              "Unit 95 • Relative clauses 4: extra information clauses (1)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-96",
            checkboxLabel:
              "Unit 96 • Relative clauses 5: extra information clauses (1)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-97",
            checkboxLabel:
              "Unit 97 • <span class='bold'>-ing</span> and <span class='bold'>-ed</span> clauses (the woman <span class='bold'>talking to Tom</span>, the boy <span class='bold'>injured in the accident</span>)",
          },
        ],
      },
      // Adjetives and adverbs
      {
        bgColor: "black",
        textColor: "white",
        label: "Adjetives and adverbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-98",
            checkboxLabel:
              "Unit 98 • Adjectives ending in <span class='bold'>-ing</span> and <span class='bold'>-ed</span> (<span class='bold'>boring / bored</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-99",
            checkboxLabel:
              "Unit 99 • Adjectives: a <span class='bold'>nice new</span> hoise, you look <span class='bold'>tired</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-100",
            checkboxLabel:
              "Unit 100 • Adjectives and advebrs 1 (<span class='bold'>quickly / quickly</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-101",
            checkboxLabel:
              "Unit 101 • Adjectives and adverbs 2 (<span class='bold'>well, fast, alte, hard</span> / <span class='bold'>hardly</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-102",
            checkboxLabel:
              "Unit 102 • <span class='bold'>so</span> and <span class='bold'>such</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-103",
            checkboxLabel:
              "Unit 103 • <span class='bold'>enough</span> and <span class='bold'>too</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-104",
            checkboxLabel:
              "Unit 104 • <span class='bold'>quite</span>, <span class='bold'>pretty</span>, <span class='bold'>rather</span> and <span class='bold'>fairly</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-105",
            checkboxLabel:
              "Unit 105 • Comparatives 1 (<span class='bold'>cheaper</span>, <span class='bold'>more expensive</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-106",
            checkboxLabel:
              "Unit 106 • Comparative 2 (<span class='bold'>much better</span> / <span class='bold'>any better</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-107",
            checkboxLabel:
              "Unit 107 • Comparative 3 (<span class='bold'>as... as</span> / <span class='bold'>than</span>)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-108",
            checkboxLabel:
              "Unit 108 • Superlative (<span class='bold'>the longest</span>, <span class='bold'>the most enjoyable</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-109",
            checkboxLabel:
              "Unit 109 • Word order 1: verb + object; place and time",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-110",
            checkboxLabel: "Unit 110 • Word order 2: adverbs with the verb",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-111",
            checkboxLabel:
              "Unit 111 • <span class='bold'>still</span>, <span class='bold'>anymore</span>, <span class='bold'>yet</span>, <span class='bold'>already</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-112",
            checkboxLabel: "Unit 112 • <span class='bold'>even</span>",
          },
        ],
      },
      // Conjuctions and prepositions
      {
        bgColor: "black",
        textColor: "white",
        label: "Conjuctions and prepositions",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-113",
            checkboxLabel:
              "Unit 113 • <span class='bold'>although</span>, <span class='bold'>though</span>, <span class='bold'>even though</span>, <span class='bold'>in inspite of</span>, <span class='bold'>despite</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-114",
            checkboxLabel: "Unit 114 • <span class='bold'>in case</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-115",
            checkboxLabel:
              "Unit 115 • <span class='bold'>unless</span>, <span class='bold'>as long as</span>, <span class='bold'>provided</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-116",
            checkboxLabel:
              "Unit 116 • <span class='bold'>as</span> (<span class='bold'>as</span> I walked... / <span class='bold'>as</span> I was..., etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-11",
            checkboxLabel:
              "Unit 117 • <span class='bold'>like</span> and <span class='bold'>as</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-118",
            checkboxLabel:
              "Unit 118 • <span class='bold'>like</span>, <span class='bold'>as if</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-119",
            checkboxLabel:
              "Unit 119 • <span class='bold'>during</span>, <span class='bold'>for</span>, <span class='bold'>while</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-120",
            checkboxLabel:
              "Unit 120 • <span class='bold'>by</span> and until, <span class='bold'>by the time...</span>",
          },
        ],
      },
      // Prepositions
      {
        bgColor: "black",
        textColor: "white",
        label: "Prepositions",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-121",
            checkboxLabel:
              "Unit 121 • <span class='bold'>at</span> / <span class='bold'>on</span> / <span class='bold'>in</span> (time)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-122",
            checkboxLabel:
              "Unit 122 • <span class='bold'>on time</span> and <span class='bold'>in time</span>, <span class='bold'>at the end</span> and <span class='bold'>in the end</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-123",
            checkboxLabel:
              "Unit 123 • <span class='bold'>in</span> / <span class='bold'>at</span> / <span class='bold'>on</span> (position 1)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-124",
            checkboxLabel:
              "Unit 124 • <span class='bold'>in</span> / <span class='bold'>at</span> / <span class='bold'>on</span> (position) 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-125",
            checkboxLabel:
              "Unit 125 • <span class='bold'>in</span> / <span class='bold'>at</span> / <span class='bold'>on</span> (position 3)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-126",
            checkboxLabel:
              "Unit 126 • <span class='bold'>to</span>, <span class='bold'>at</span>, <span class='bold'>in</span> and <span class='bold'>into</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-127",
            checkboxLabel:
              "Unit 127 • <span class='bold'>in</span> / <span class='bold'>on</span> / <span class='bold'>at</span> (other uses)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-128",
            checkboxLabel: "Unit 128 • <span class='bold'>by</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-129",
            checkboxLabel:
              "Unit 129 • Noun + preposition (<span class='bold'>reason for, cause of</span>, etc.)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-1",
            checkboxLabel: "Unit 130 • Adjective + preposition 1",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-131",
            checkboxLabel: "Unit 131 • Adjective + preposition 2",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-132",
            checkboxLabel:
              "Unit 132 • Verb + preposition 1 <span class='bold'>to</span> / <span class='bold'>at</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-133",
            checkboxLabel:
              "Unit 133 • Verb + preposition 2 <span class='bold'>about</span> / <span class='bold'>for</span> / <span class='bold'>of</span> / <span class='bold'>after</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-134",
            checkboxLabel: "Unit 134 • preposition 3",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-135",
            checkboxLabel:
              "Unit 135 • Verb + preposition 4 <span class='bold'>of</span> / <span class='bold'>for</span> / <span class='bold'>from</span> / <span class='bold'>on</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-136",
            checkboxLabel:
              "Unit 136 • <span class='bold'>in</span> / <span class='bold'>into</span> <span class='bold'>with</span> / <span class='bold'>to</span> / <span class='bold'>on</span>",
          },
        ],
      },
      // Phrasal verbs
      {
        bgColor: "black",
        textColor: "white",
        label: "Phrasal verbs",
        contents: [
          {
            checkboxLink: "/extras/grammar/intermediate/unit-137",
            checkboxLabel: "Unit 137 • Phrasal verbs 1 Introduction",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-138",
            checkboxLabel:
              "Unit 138 • Phrasal Verbs 2 <span class='bold'>in</span> / <span class='bold'>out</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-139",
            checkboxLabel:
              "Unit 139 • Phrasal verbs 3 <span class='bold'>out</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-140",
            checkboxLabel:
              "Unit 140 • Phrasal verbs 4 <span class='bold'>on</span> / <span class='bold'>off</span> (1)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-141",
            checkboxLabel:
              "Unit 141 • Phrasal vebrs 5 <span class='bold'>on</span> / <span class='bold'>off</span> (2)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-142",
            checkboxLabel:
              "Unit 142 • Phrasal verbs 6 <span class='bold'>up</span> / <span class='bold'>down</span>",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-143",
            checkboxLabel:
              "Unit 143 • Phrasal verbs 7 <span class='bold'>up</span> (1)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-144",
            checkboxLabel:
              "Unit 144 • Phrasal verbs 8 <span class='bold'>up</span> (2)",
          },
          {
            checkboxLink: "/extras/grammar/intermediate/unit-145",
            checkboxLabel:
              "Unit 145 • Phrasal verbs 9 <span class='bold'>away</span> / <span class='bold'>back</span>",
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
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={["Intermediate"]}
      />
      <ContentCard contents={contents} />
    </>
  );
}
