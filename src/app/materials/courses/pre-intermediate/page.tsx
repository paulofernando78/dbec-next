import { BoardCard } from "@/components";
import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

const contents = [
  {
    headerLabel: "Lessons 1 - 6 + Written and Oral Quiz",
    cardContents: [
      // Lesson 1
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 1",
        contents: [
          {
            content: "Welcome / Icebreaker",
          },
          {
            content: "Let's get to know each other / one another better.",
          },
        ],
      },
      // Lesson 2
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 2",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use past-tense questions with did and was/were to ask people about their past.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-2/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Good memories (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-2/classwork",
            checkboxLabel: "Classwork • Good memories (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-2/homework",
            checkboxLabel: "Homework • Good memories (Cycle 1)",
          },
        ],
      },
      // Lesson 3
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 3",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss their childhoods using used to.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-3/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Good memories (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-3/classwork",
            checkboxLabel: "Classwork • Good memories (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-3/homework",
            checkboxLabel: "Homework • Good memories (Cycle 2)",
          },
        ],
      },
      // Lesson 4
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 4",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss city issues and public services using expressions of quantity and compound nouns.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-4/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Life in the city (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-4/classwork",
            checkboxLabel: "Classwork • Life in the city (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-4/homework",
            checkboxLabel: "Homework • Life in the city (Cycle 1)",
          },
        ],
      },
      // Lesson 5
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 5",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask indirect questions.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-5/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Life in the city (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-5/classwork",
            checkboxLabel: "Classwork • Life in the city (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-5/homework",
            checkboxLabel: "Homework • Life in the city (Cycle 2)",
          },
        ],
      },
      // Lesson 6 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 6",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-6/classwork",
            checkboxLabel:
              "Classwork • Review lessons 2-5 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 7 - 11 + Written and Oral Quiz",
    cardContents: [
      // Lesson 7
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 7",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to evaluate and compare houses and apartments using too and comparatives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-7/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Making changes (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-7/classwork",
            checkboxLabel: "Classwork • Making changes (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-7/homework",
            checkboxLabel: "Homework • Making changes (Cycle 1)",
          },
        ],
      },
      // Lesson 8
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 8",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss changes in their lives using I wish.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-8/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Making changes (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-8/classwork",
            checkboxLabel: "Classwork • Making changes (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-8/homework",
            checkboxLabel: "Homework • Making changes (Cycle 2)",
          },
        ],
      },
      // Lesson 9
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 9",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe personal experiences using the past tense and the present perfect.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-9/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Have you ever tried it? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-9/classwork",
            checkboxLabel: "Classwork • Have you ever tried it? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-9/homework",
            checkboxLabel: "Homework • Have you ever tried it? (Cycle 1)",
          },
        ],
      },
      // Lesson 10
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 10",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe recipes using sequence adverbs.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-10/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Have you ever tried it? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-10/classwork",
            checkboxLabel: "Classwork • Have you ever tried it? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-10/homework",
            checkboxLabel: "Homework • Have you ever tried it? (Cycle 2)",
          },
        ],
      },
      // Lesson 11 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 11",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-11/classwork",
            checkboxLabel:
              "Classwork • Review lessons 7-10 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 12 - 16 + Written and Oral Quiz",
    cardContents: [
      // Lesson 12
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 12",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe plans using the future with be going to and will.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-12/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Hit the road! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-12/classwork",
            checkboxLabel: "Classwork • Hit the road! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-12/homework",
            checkboxLabel: "Homework • Hit the road! (Cycle 1)",
          },
        ],
      },
      // Lesson 13
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 13",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to give travel advice.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-13/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Hit the road! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-13/classwork",
            checkboxLabel: "Classwork • Hit the road! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-13/homework",
            checkboxLabel: "Homework • Hit the road! (Cycle 2)",
          },
        ],
      },
      // Lesson 14
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 14",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use two-part verbs to make and respond to requests.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-14/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Sure! I'll do it. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-14/classwork",
            checkboxLabel: "Classwork • Sure! I'll do it. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-14/homework",
            checkboxLabel: "Homework • Sure! I'll do it. (Cycle 1)",
          },
        ],
      },
      // Lesson 15
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 15",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make and respond to requests using modals and Would you mind?",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-15/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Sure! I'll do it. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-15/classwork",
            checkboxLabel: "Classwork • Sure! I'll do it. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-15/homework",
            checkboxLabel: "Homework • Sure! I'll do it. (Cycle 2)",
          },
        ],
      },
      // Lesson 16 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 16",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-16/classwork",
            checkboxLabel:
              "Classwork • Review lessons 12-15 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },

  {
    headerLabel: "Lessons 12 - 16 + Written and Oral Quiz",
    cardContents: [
      // Lesson 17
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 17",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use infinitives and gerunds to describeuses and purposes.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-17/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What do you use this for? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-17/classwork",
            checkboxLabel: "Classwork • What do you use this for? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-17/homework",
            checkboxLabel: "Homework • What do you use this for? (Cycle 1)",
          },
        ],
      },
      // Lesson 18
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 18",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use imperatives and infinitives to give suggestions.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-18/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What do you use this for? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-18/classwork",
            checkboxLabel: "Classwork • What do you use this for? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-18/homework",
            checkboxLabel: "Homework • What do you use this for? (Cycle 2)",
          },
        ],
      },
      // Lesson 19
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 19",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe celebrations and annual events using relative clauses of time.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-19/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Time to celebrate (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-19/classwork",
            checkboxLabel: "Classwork • Time to celebrate (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-19/homework",
            checkboxLabel: "Homework • Time to celebrate (Cycle 1)",
          },
        ],
      },
      // Lesson 20
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 20",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe customs using adverbial clauses of time.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-20/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Time to celebrate (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-20/classwork",
            checkboxLabel: "Classwork • Time to celebrate (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-20/homework",
            checkboxLabel: "Homework • Time to celebrate (Cycle 2)",
          },
        ],
      },
      // Lesson 21 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 21",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-21/classwork",
            checkboxLabel:
              "Classwork • Review lessons 17-20 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 2-22 + Written Test",
    cardContents: [
      // Lesson 22 *Written Test
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 22",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-22/classwork",
            checkboxLabel: "Classwork • Review lessons 2-20 + Written Test",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 23 - 27 + Written and Oral Quiz",
    cardContents: [
      // Lesson 23
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 23",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use the past, present, and future tenses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-23/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Only time will tell. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-23/classwork",
            checkboxLabel: "Classwork • Only time will tell. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-23/homework",
            checkboxLabel: "Homework • Only time will tell. (Cycle 1)",
          },
        ],
      },
      // Lesson 24
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 24",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss consequences using conditional sentences with if clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-24/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Only time will tell. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-24/classwork",
            checkboxLabel: "Classwork • Only time will tell. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-24/homework",
            checkboxLabel: "Homework • Only time will tell. (Cycle 2)",
          },
        ],
      },
      // Lesson 25
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 25",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss job skills using gerunds and short responses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-25/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • I like working with people. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-25/classwork",
            checkboxLabel: "Classwork • I like working with people. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-25/homework",
            checkboxLabel: "Homework • I like working with people. (Cycle 1)",
          },
        ],
      },
      // Lesson 26
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 26",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss the kinds of jobs they want and don’t want using clauses with because.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-26/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • I like working with people. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-26/classwork",
            checkboxLabel: "Classwork • I like working with people. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-26/homework",
            checkboxLabel: "Homework • I like working with people. (Cycle 2)",
          },
        ],
      },
      // Lesson 27 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 27",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-27/classwork",
            checkboxLabel:
              "Classwork • Review lessons 23-26 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },

  {
    headerLabel: "Lessons 28 - 32 + Written and Oral Quiz",
    cardContents: [
      // Lesson 28
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 28",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss famous landmarks, monuments, and works of art using the passive with by (simple past).",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-28/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's really worth seeing! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-28/classwork",
            checkboxLabel: "Classwork • It's really worth seeing! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-28/homework",
            checkboxLabel: "Homework • It's really worth seeing! (Cycle 1)",
          },
        ],
      },
      // Lesson 29
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 29",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss key features of countries around the world using the passive without by (simple present).",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-29/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's really worth seeing! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-29/classwork",
            checkboxLabel: "Classwork • It's really worth seeing! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-29/homework",
            checkboxLabel: "Homework • It's really worth seeing! (Cycle 2)",
          },
        ],
      },
      // Lesson 30
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 30",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss events, accidents, and accomplishments in their lives using the past continuous and the simple past.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-30/flipped-classroom",
            checkboxLabel: "Flipped Classroom • It's a long story. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-30/classwork",
            checkboxLabel: "Classwork • It's a long story. (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-30/homework",
            checkboxLabel: "Homework • It's a long story. (Cycle 1)",
          },
        ],
      },
      // Lesson 31
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 31",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss events using the present perfect continuous.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-31/flipped-classroom",
            checkboxLabel: "Flipped Classroom • It's a long story. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-31/classwork",
            checkboxLabel: "Classwork • It's a long story. (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-31/homework",
            checkboxLabel: "Homework • It's a long story. (Cycle 2)",
          },
        ],
      },
      // Lesson 32 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 32",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-32/classwork",
            checkboxLabel:
              "Classwork • Review lessons 28-31 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },

  {
    headerLabel: "Lessons 33 - 37 + Written and Oral Quiz",
    cardContents: [
      // Lesson 33
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 33",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss books, movies, and TV programs using participles as adjectives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-33/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • That's entertainment! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-33/classwork",
            checkboxLabel: "Classwork • That's entertainment! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-33/homework",
            checkboxLabel: "Homework • That's entertainment! (Cycle 1)",
          },
        ],
      },
      // Lesson 34
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 34",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss more about movies and famous Hollywood names using relative clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-34/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • That's entertainment! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-34/classwork",
            checkboxLabel: "Classwork • That's entertainment! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-34/homework",
            checkboxLabel: "Homework • That's entertainment! (Cycle 2)",
          },
        ],
      },
      // Lesson 35
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 35",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to explain gestures using modals and adverbs.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-35/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Now I get it! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-35/classwork",
            checkboxLabel: "Classwork • Now I get it! (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-35/homework",
            checkboxLabel: "Homework • Now I get it! (Cycle 1)",
          },
        ],
      },
      // Lesson 36
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 36",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss signs using terms of permission, obligation, and prohibition.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-36/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Now I get it! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-36/classwork",
            checkboxLabel: "Classwork • Now I get it! (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-36/homework",
            checkboxLabel: "Homework • Now I get it! (Cycle 2)",
          },
        ],
      },
      // Lesson 37 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 37",
        contents: [
          {
            content: "Learning objectives:",
            applyHr: true,
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-37/classwork",
            checkboxLabel:
              "Classwork • Review lessons 33-36 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },

  {
    headerLabel: "Lessons 38 - 42 + Written and Oral Quiz",
    cardContents: [
      // Lesson 38
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 38",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss imaginary situations using unreal conditional sentences with if clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-38/flipped-classroom",
            checkboxLabel: "Flipped Classroom • I wouldn't do that? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-38/classwork",
            checkboxLabel: "Classwork • I wouldn't do that? (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-38/homework",
            checkboxLabel: "Homework • I wouldn't do that? (Cycle 1)",
          },
        ],
      },
      // Lesson 39
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 39",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss predicaments using the past modals would have and should have.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-39/flipped-classroom",
            checkboxLabel: "Flipped Classroom • I wouldn't do that? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-39/classwork",
            checkboxLabel: "Classwork • I wouldn't do that? (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-39/homework",
            checkboxLabel: "Homework • I wouldn't do that? (Cycle 2)",
          },
        ],
      },
      // Lesson 40
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 40",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss excuses and requests using reported speech.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-40/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Making excuses (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-40/classwork",
            checkboxLabel: "Classwork • Making excuses (Cycle 1)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-40/homework",
            checkboxLabel: "Homework • Making excuses (Cycle 1)",
          },
        ],
      },
      // Lesson 41
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 41",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use reported speech to discuss statements that other people made.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-41/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Making excuses (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-41/classwork",
            checkboxLabel: "Classwork • Making excuses (Cycle 2)",
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-41/homework",
            checkboxLabel: "Homework • Making excuses (Cycle 2)",
          },
        ],
      },
      // Lesson 42 *Review + Written and Oral Quiz
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 42",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-42/classwork",
            checkboxLabel:
              "Classwork • Review lessons 38-41 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 43 Written Test
      {
        bgColor: "#1F8FEA",
        textColor: "white",
        cardLabel: "Lesson 43",
        contents: [
          {
            content: "Learning objectives:",
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/pre-intermediate/lesson-43/classwork",
            checkboxLabel: "Classwork • Review lessons 23-41 + Written Test",
          },
        ],
      },
    ],
  },
];

export default function PreIntermediate() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-intermediate (A2-B1)"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        {/* CEFR */}
        <BoardCard
          label="CEFR (Common European Framework of Reference)"
          bgColor="#1F8FEA"
          textColor="white"
        >
          <p>• A2 ➜ B1</p>
        </BoardCard>
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
