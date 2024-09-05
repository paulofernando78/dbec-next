import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

import { preIntermediate } from "@/img/index";

const contents = [
  {
    subContents: [
      // CEFR
      {
        bgColor: "gray",
        textColor: "white",
        label: "CEFR (Common European Framework of Reference)",
        contents: [
          {
            content: "• A2 ➜ B1",
          },
        ],
      },
      // Lesson 1
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 1",
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
        bgColor: "black",
        textColor: "white",
        label: "Lesson 2",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use past-tense questions with did and was/were to ask people about their past.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-2/flipped-classroom",
            courseLabel: "Flipped Classroom • Good memories (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-2/classwork",
            courseLabel: "Classwork • Good memories (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-2/homework",
            courseLabel: "Homework • Good memories (Cycle 1)",
          },
        ],
      },
      // Lesson 3
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 3",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss their childhoods using used to.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-3/flipped-classroom",
            courseLabel: "Flipped Classroom • Good memories (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-3/classwork",
            courseLabel: "Classwork • Good memories (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-3/homework",
            courseLabel: "Homework • Good memories (Cycle 2)",
          },
        ],
      },
      // Lesson 4
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 4",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss city issues and public services using expressions of quantity and compound nouns.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-4/flipped-classroom",
            courseLabel: "Flipped Classroom • Life in the city (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-4/classwork",
            courseLabel: "Classwork • Life in the city (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-4/homework",
            courseLabel: "Homework • Life in the city (Cycle 1)",
          },
        ],
      },
      // Lesson 5
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 5",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask indirect questions.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-5/flipped-classroom",
            courseLabel: "Flipped Classroom • Life in the city (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-5/classwork",
            courseLabel: "Classwork • Life in the city (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-5/homework",
            courseLabel: "Homework • Life in the city (Cycle 2)",
          },
        ],
      },
      // Lesson 6 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 6",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-6/classwork",
            courseLabel:
              "Classwork • Review lessons 2-5 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 7
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 7",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to evaluate and compare houses and apartments using too and comparatives.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-7/flipped-classroom",
            courseLabel: "Flipped Classroom • Making changes (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-7/classwork",
            courseLabel: "Classwork • Making changes (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-7/homework",
            courseLabel: "Homework • Making changes (Cycle 1)",
          },
        ],
      },
      // Lesson 8
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 8",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss changes in their lives using I wish.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-8/flipped-classroom",
            courseLabel: "Flipped Classroom • Making changes (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-8/classwork",
            courseLabel: "Classwork • Making changes (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-8/homework",
            courseLabel: "Homework • Making changes (Cycle 2)",
          },
        ],
      },
      // Lesson 9
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 9",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe personal experiences using the past tense and the present perfect.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-9/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Have you ever tried it? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-9/classwork",
            courseLabel: "Classwork • Have you ever tried it? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-9/homework",
            courseLabel: "Homework • Have you ever tried it? (Cycle 1)",
          },
        ],
      },
      // Lesson 10
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 10",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe recipes using sequence adverbs.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-10/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Have you ever tried it? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-10/classwork",
            courseLabel: "Classwork • Have you ever tried it? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-10/homework",
            courseLabel: "Homework • Have you ever tried it? (Cycle 2)",
          },
        ],
      },
      // Lesson 11 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 11",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-11/classwork",
            courseLabel:
              "Classwork • Review lessons 7-10 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 12
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 12",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe plans using the future with be going to and will.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-12/flipped-classroom",
            courseLabel: "Flipped Classroom • Hit the road! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-12/classwork",
            courseLabel: "Classwork • Hit the road! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-12/homework",
            courseLabel: "Homework • Hit the road! (Cycle 1)",
          },
        ],
      },
      // Lesson 13
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 13",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to give travel advice.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-13/flipped-classroom",
            courseLabel: "Flipped Classroom • Hit the road! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-13/classwork",
            courseLabel: "Classwork • Hit the road! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-13/homework",
            courseLabel: "Homework • Hit the road! (Cycle 2)",
          },
        ],
      },
      // Lesson 14
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 14",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use two-part verbs to make and respond to requests.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-14/flipped-classroom",
            courseLabel: "Flipped Classroom • Sure! I'll do it. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-14/classwork",
            courseLabel: "Classwork • Sure! I'll do it. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-14/homework",
            courseLabel: "Homework • Sure! I'll do it. (Cycle 1)",
          },
        ],
      },
      // Lesson 15
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 15",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make and respond to requests using modals and Would you mind?",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-15/flipped-classroom",
            courseLabel: "Flipped Classroom • Sure! I'll do it. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-15/classwork",
            courseLabel: "Classwork • Sure! I'll do it. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-15/homework",
            courseLabel: "Homework • Sure! I'll do it. (Cycle 2)",
          },
        ],
      },
      // Lesson 16 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 16",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-16/classwork",
            courseLabel:
              "Classwork • Review lessons 12-15 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 17
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 17",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use infinitives and gerunds to describeuses and purposes.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-17/flipped-classroom",
            courseLabel:
              "Flipped Classroom • What do you use this for? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-17/classwork",
            courseLabel: "Classwork • What do you use this for? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-17/homework",
            courseLabel: "Homework • What do you use this for? (Cycle 1)",
          },
        ],
      },
      // Lesson 18
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 18",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use imperatives and infinitives to give suggestions.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-18/flipped-classroom",
            courseLabel:
              "Flipped Classroom • What do you use this for? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-18/classwork",
            courseLabel: "Classwork • What do you use this for? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-18/homework",
            courseLabel: "Homework • What do you use this for? (Cycle 2)",
          },
        ],
      },
      // Lesson 19
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 19",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe celebrations and annual events using relative clauses of time.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-19/flipped-classroom",
            courseLabel: "Flipped Classroom • Time to celebrate (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-19/classwork",
            courseLabel: "Classwork • Time to celebrate (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-19/homework",
            courseLabel: "Homework • Time to celebrate (Cycle 1)",
          },
        ],
      },
      // Lesson 20
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 20",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe customs using adverbial clauses of time.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-20/flipped-classroom",
            courseLabel: "Flipped Classroom • Time to celebrate (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-20/classwork",
            courseLabel: "Classwork • Time to celebrate (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-20/homework",
            courseLabel: "Homework • Time to celebrate (Cycle 2)",
          },
        ],
      },
      // Lesson 21 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 21",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-21/classwork",
            courseLabel:
              "Classwork • Review lessons 17-20 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 22 *Written Test
      {
        bgColor: "purple",
        textColor: "white",
        label: "Lesson 22",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-22/classwork",
            courseLabel: "Classwork • Review lessons 2-20 + Written Test",
          },
        ],
      },
      // Lesson 23
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 23",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use the past, present, and future tenses.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-23/flipped-classroom",
            courseLabel: "Flipped Classroom • Only time will tell. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-23/classwork",
            courseLabel: "Classwork • Only time will tell. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-23/homework",
            courseLabel: "Homework • Only time will tell. (Cycle 1)",
          },
        ],
      },
      // Lesson 24
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 24",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss consequences using conditional sentences with if clauses.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-24/flipped-classroom",
            courseLabel: "Flipped Classroom • Only time will tell. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-24/classwork",
            courseLabel: "Classwork • Only time will tell. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-24/homework",
            courseLabel: "Homework • Only time will tell. (Cycle 2)",
          },
        ],
      },
      // Lesson 25
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 25",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss job skills using gerunds and short responses.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-25/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I like working with people. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-25/classwork",
            courseLabel: "Classwork • I like working with people. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-25/homework",
            courseLabel: "Homework • I like working with people. (Cycle 1)",
          },
        ],
      },
      // Lesson 26
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 26",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss the kinds of jobs they want and don’t want using clauses with because.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-26/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I like working with people. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-26/classwork",
            courseLabel: "Classwork • I like working with people. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-26/homework",
            courseLabel: "Homework • I like working with people. (Cycle 2)",
          },
        ],
      },
      // Lesson 27 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 27",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-27/classwork",
            courseLabel:
              "Classwork • Review lessons 23-26 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 28
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 28",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss famous landmarks, monuments, and works of art using the passive with by (simple past).",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-28/flipped-classroom",
            courseLabel:
              "Flipped Classroom • It's really worth seeing! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-28/classwork",
            courseLabel: "Classwork • It's really worth seeing! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-28/homework",
            courseLabel: "Homework • It's really worth seeing! (Cycle 1)",
          },
        ],
      },
      // Lesson 29
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 29",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss key features of countries around the world using the passive without by (simple present).",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-29/flipped-classroom",
            courseLabel:
              "Flipped Classroom • It's really worth seeing! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-29/classwork",
            courseLabel: "Classwork • It's really worth seeing! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-29/homework",
            courseLabel: "Homework • It's really worth seeing! (Cycle 2)",
          },
        ],
      },
      // Lesson 30
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 30",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss events, accidents, and accomplishments in their lives using the past continuous and the simple past.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-30/flipped-classroom",
            courseLabel: "Flipped Classroom • It's a long story. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-30/classwork",
            courseLabel: "Classwork • It's a long story. (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-30/homework",
            courseLabel: "Homework • It's a long story. (Cycle 1)",
          },
        ],
      },
      // Lesson 31
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 31",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss events using the present perfect continuous.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-31/flipped-classroom",
            courseLabel: "Flipped Classroom • It's a long story. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-31/classwork",
            courseLabel: "Classwork • It's a long story. (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-31/homework",
            courseLabel: "Homework • It's a long story. (Cycle 2)",
          },
        ],
      },
      // Lesson 32 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 32",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-32/classwork",
            courseLabel:
              "Classwork • Review lessons 28-31 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 33
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 33",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss books, movies, and TV programs using participles as adjectives.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-33/flipped-classroom",
            courseLabel: "Flipped Classroom • That's entertainment! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-33/classwork",
            courseLabel: "Classwork • That's entertainment! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-33/homework",
            courseLabel: "Homework • That's entertainment! (Cycle 1)",
          },
        ],
      },
      // Lesson 34
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 34",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss more about movies and famous Hollywood names using relative clauses.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-34/flipped-classroom",
            courseLabel: "Flipped Classroom • That's entertainment! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-34/classwork",
            courseLabel: "Classwork • That's entertainment! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-34/homework",
            courseLabel: "Homework • That's entertainment! (Cycle 2)",
          },
        ],
      },
      // Lesson 35
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 35",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to explain gestures using modals and adverbs.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-35/flipped-classroom",
            courseLabel: "Flipped Classroom • Now I get it! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-35/classwork",
            courseLabel: "Classwork • Now I get it! (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-35/homework",
            courseLabel: "Homework • Now I get it! (Cycle 1)",
          },
        ],
      },
      // Lesson 36
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 36",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss signs using terms of permission, obligation, and prohibition.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-36/flipped-classroom",
            courseLabel: "Flipped Classroom • Now I get it! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-36/classwork",
            courseLabel: "Classwork • Now I get it! (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-36/homework",
            courseLabel: "Homework • Now I get it! (Cycle 2)",
          },
        ],
      },
      // Lesson 37 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 37",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-37/classwork",
            courseLabel:
              "Classwork • Review lessons 33-36 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 38
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 38",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss imaginary situations using unreal conditional sentences with if clauses.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-38/flipped-classroom",
            courseLabel: "Flipped Classroom • I wouldn't do that? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-38/classwork",
            courseLabel: "Classwork • I wouldn't do that? (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-38/homework",
            courseLabel: "Homework • I wouldn't do that? (Cycle 1)",
          },
        ],
      },
      // Lesson 39
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 39",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss predicaments using the past modals would have and should have.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-39/flipped-classroom",
            courseLabel: "Flipped Classroom • I wouldn't do that? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-39/classwork",
            courseLabel: "Classwork • I wouldn't do that? (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-39/homework",
            courseLabel: "Homework • I wouldn't do that? (Cycle 2)",
          },
        ],
      },
      // Lesson 40
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 40",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss excuses and requests using reported speech.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-40/flipped-classroom",
            courseLabel: "Flipped Classroom • Making excuses (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-40/classwork",
            courseLabel: "Classwork • Making excuses (Cycle 1)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-40/homework",
            courseLabel: "Homework • Making excuses (Cycle 1)",
          },
        ],
      },
      // Lesson 41
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 41",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use reported speech to discuss statements that other people made.",
            applyHr: true,
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-41/flipped-classroom",
            courseLabel: "Flipped Classroom • Making excuses (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-41/classwork",
            courseLabel: "Classwork • Making excuses (Cycle 2)",
          },
          {
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-41/homework",
            courseLabel: "Homework • Making excuses (Cycle 2)",
          },
        ],
      },
      // Lesson 42 *Review + Written and Oral Quiz
      {
        bgColor: "red",
        textColor: "white",
        label: "Lesson 42",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-42/classwork",
            courseLabel:
              "Classwork • Review lessons 38-41 + Written and Oral Quiz",
          },
        ],
      },
      // Lesson 43 Written Test
      {
        bgColor: "purple",
        textColor: "white",
        label: "Lesson 43",
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
            courseImg: preIntermediate,
            courseLink: "/materials/courses/pre-intermediate/lesson-43/classwork",
            courseLabel: "Classwork • Review lessons 23-41 + Written Test",
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
        subTitle="Pre-intermediate (A2-B1)"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
