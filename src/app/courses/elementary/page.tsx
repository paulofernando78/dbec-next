import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

import { elementary } from "@/img/index";

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
            content:
              "• Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment).",
          },
          {
            content:
              "• Can communicate in simple and routine tasks requiring a1 simple and direct exchange of information on familiar and routine matters.",
          },
          {
            content:
              "• Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate Basic need.",
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
              "By the end of this lesson, students will be able to introduce themselves and others using be and possessive adjectives, and ask and answer Wh-questions to find out information about others and to state information about themselves.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/classwork",
            courseLabel: "Classwork • Where are you from? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/homework",
            courseLabel: "Homework • Where are you from? (Cycle 1)",
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
              "By the end of this lesson, students will be able to ask and answer yes/no questions to find out information about others and to state information about themselves.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/classwork",
            courseLabel: "Classwork • Where are you from? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/homework",
            courseLabel: "Homework • Where are you from? (Cycle 2)",
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
              "By the end of this lesson, students will be able to ask and answer questions about occupations using the simple present.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/flipped-classroom",
            courseLabel: "Flipped Classroom • What do you do? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/classwork",
            courseLabel: "Classwork • What do you do? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/homework",
            courseLabel: "Homework • What do you do? (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe routines and daily schedules using time expressions.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/flipped-classroom",
            courseLabel: "Flipped Classroom • What do you do? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/classwork",
            courseLabel: "Classwork • What do you do? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/homework",
            courseLabel: "Homework • What do you do? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-6/classwork",
            courseLabel:
              "Classwork • Progress check • Lessons 2-5 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to use demonstratives, one, and ones to ask about and describe prices.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/flipped-classroom",
            courseLabel: "Flipped Classroom • How much are these? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/classwork",
            courseLabel: "Classwork • How much are these? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/homework",
            courseLabel: "Homework • How much are these? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss preferences using comparisons with adjectives.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/flipped-classroom",
            courseLabel: "Flipped Classroom • How much are these? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/classwork",
            courseLabel: "Classwork • How much are these? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/homework",
            courseLabel: "Homework • How much are these? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss entertainment likes and dislikes using yes/no and Wh-questions with do.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/flipped-classroom",
            courseLabel: "Flipped Classroom • Do you play the guitar? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/classwork",
            courseLabel: "Classwork • Do you play the guitar? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/homework",
            courseLabel: "Homework • Do you play the guitar? (Cycle 1)",
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
              "By the end of this lesson, students will be able to make, accept, and decline invitations using would and verb + to + verb.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/flipped-classroom",
            courseLabel: "Flipped Classroom • Do you play the guitar? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/classwork",
            courseLabel: "Classwork • Do you play the guitar? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/homework",
            courseLabel: "Homework • Do you play the guitar? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-11/classwork",
            courseLabel:
              "Classwork • Progress Check • Lessons 7-10 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to describe families and ask and answer questions using the present continuous.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-12/flipped-classroom",
            courseLabel: "Flipped Classroom • What's an interesting family? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-12/",
            courseLabel: "Classwork • What's an interesting family? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-12/",
            courseLabel: "Homework • What's an interesting family? (Cycle 1)",
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
              "By the end of this lesson, students will be able to use quantifiers to describe families.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/flipped-classroom",
            courseLabel: "Flipped Classroom • What's an interesting family? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/classwork",
            courseLabel: "Classwork • What's an interesting family? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/homework",
            courseLabel: "Homework • What's an interesting family? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss sports and exercise habits.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/flipped-classroom",
            courseLabel:
              "Flipped Classroom • How often do you run? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/classwork",
            courseLabel: "Classwork • How often do you run? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/homework",
            courseLabel: "Homework • How often do you run? (Cycle 1)",
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
              "By the end of this lesson, students will be able to ask and answer questions about frequency of free-time activities.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/flipped-classroom",
            courseLabel:
              "Flipped Classroom • How often do you run? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/classwork",
            courseLabel: "Classwork • How often do you run? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/homework",
            courseLabel: "Homework • How often do you run? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-16/classwork",
            courseLabel:
              "Classwork • Progress check • Lessons 12-15 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to discuss daily and free-time activities using the <mark>simple past with regular and irregular verbs</mark>.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/flipped-classroom",
            courseLabel: "Flipped Classroom • We went dancing! (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/classwork",
            courseLabel: "Classwork • We went dancing! (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/homework",
            courseLabel: "Homework • We went dancing! (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss vacations using the past tense of be.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/flipped-classroom",
            courseLabel: "Flipped Classroom • We went dancing! (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/classwork",
            courseLabel: "Classwork • We went dancing! (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/homework",
            courseLabel: "Homework • We went dancing! (Cycle 2)",
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
              "By the end of this lesson, students will be able to ask about and describe places using there is/there are and prepositions of place.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/flipped-classroom",
            courseLabel: "Flipped Classroom • How's the neighborhood? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/classwork",
            courseLabel: "Classwork • How's the neighborhood? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/homework",
            courseLabel: "Homework • How's the neighborhood? (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe features of a1 neighborhood using quantifiers.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/flipped-classroom",
            courseLabel: "Flipped Classroom • How's the neighborhood? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/classwork",
            courseLabel: "Classwork • How's the neighborhood? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/homework",
            courseLabel: "Homework • How's the neighborhood? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-21/classwork",
            courseLabel:
              "Classwork • Progress Check • Lessons 17-20 + Written and Oral Quiz",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-22/classwork",
            courseLabel: "Classwork • Test • Lessons 2-20 + Written Quiz",
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
              "By the end of this lesson, students will be able to describe people’s physical appearance.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/flipped-classroom",
            courseLabel:
              "Flipped Classroom • What does she look like? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/classwork",
            courseLabel: "Classwork • What does she look like? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/homework",
            courseLabel: "Homework • What does she look like? (Cycle 1)",
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
              "By the end of this lesson, students will be able to identify people using modifiers with participles and prepositions to describe how they look, what they are wearing, what they’re doing, and where they are.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/flipped-classroom",
            courseLabel: "Flipped Classroom • What does she look like? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/classwork",
            courseLabel: "Classwork • What does she look like? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/homework",
            courseLabel: "Homework • What does she look like? (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe recent activities using the present perfect, already, and yet.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Have you ever been there? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/classwork",
            courseLabel: "Classwork • Have you ever been there? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/homework",
            courseLabel: "Homework • Have you ever been there? (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe experiences from the recent and distant past using the present perfect, simple past, for, and since.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Have you ever been there? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/classwork",
            courseLabel: "Classwork • Have you ever been there? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/homework",
            courseLabel: "Homework • Have you ever been there? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-27/classwork",
            courseLabel:
              "Classwork • Progress Check • Lessons 23-26 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to describe their hometowns using adjectives, adverbs, and conjunctions, and make suggestions about places using can and should.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/flipped-classroom",
            courseLabel:
              "Flipped Classroom • It's a really nice city. (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/classwork",
            courseLabel: "Classwork • It's a really nice city. (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/homework",
            courseLabel: "Homework • It's a really nice city. (Cycle 1)",
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
              "By the end of this lesson, students will be able to make suggestions about places using can and should.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/flipped-classroom",
            courseLabel:
              "Flipped Classroom • It's a really nice city. (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/classwork",
            courseLabel: "Classwork • It's a really nice city. (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/homework",
            courseLabel: "Homework • It's a really nice city. (Cycle 2)",
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
              "By the end of this lesson, students will be able to state health problems and give advice using adjective + infinitive and noun + infinitive.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/flipped-classroom",
            courseLabel: "Flipped Classroom • It's important to get rest (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/classwork",
            courseLabel: "Classwork • It's important to get rest (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/homework",
            courseLabel: "Homework • It's important to get rest (Cycle 1)",
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
              "By the end of this lesson, students will be able to ask for advice and give suggestions about health care products using can, could, and may.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/flipped-classroom",
            courseLabel: "Flipped Classroom • It's important to get rest (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/classwork",
            courseLabel: "Classwork • It's important to get rest (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/homework",
            courseLabel: "Homework • It's important to get rest (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-32/classwork",
            courseLabel:
              "Classwork • Progress Check Lessons 28-31 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to agree and disagree about food preferences using so, too, neither, and either.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/flipped-classroom",
            courseLabel: "Flipped Classroom • What would you like? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/classwork",
            courseLabel: "Classwork • What would you like? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/homework",
            courseLabel: "Homework • What would you like? (Cycle 1)",
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
              "By the end of this lesson, students will be able to use would and will to order food at a1 restaurant.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/flipped-classroom",
            courseLabel: "Flipped Classroom • What would you like? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/classwork",
            courseLabel: "Classwork • What would you like? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/homework",
            courseLabel: "Homework • What would you like? (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe geography using comparative and superlative forms of adjectives.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/flipped-classroom",
            courseLabel: "Flipped Classroom • It's the coldest city! (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/classwork",
            courseLabel: "Classwork • It's the coldest city! (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/homework",
            courseLabel: "Homework • It's the coldest city! (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe distances and measurements, and ask and answer questions with how.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/flipped-classroom",
            courseLabel: "Flipped Classroom • It's the coldest city! (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/classwork",
            courseLabel: "Classwork • It's the coldest city! (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/homework",
            courseLabel: "Homework • It's the coldest city! (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-37/classwork",
            courseLabel:
              "Classwork • Progress • Check Lessons 33-36 + Written and Oral Quiz",
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
              "By the end of this lesson, students will be able to discuss future activities and plans using the present continuous, be going to, and time expressions.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/flipped-classroom",
            courseLabel: "Flipped Classroom • What are you doing later? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/classwork",
            courseLabel: "Classwork • What are you doing later? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/homework",
            courseLabel: "Homework • What are you doing later? (Cycle 1)",
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
              "By the end of this lesson, students will be able to give messages using tell and ask.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/flipped-classroom",
            courseLabel: "Flipped Classroom • What are you doing later? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/classwork",
            courseLabel: "Classwork • What are you doing later? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/homework",
            courseLabel: "Homework • What are you doing later? (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe changes in their lives using the comparative and present, past, and present perfect tenses.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/flipped-classroom",
            courseLabel: "Flipped Classroom • How have you changed? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/classwork",
            courseLabel: "Classwork • How have you changed? (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/homework",
            courseLabel: "Homework • How have you changed? (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe plans for the future using verb + infinitive.",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/flipped-classroom",
            courseLabel: "Flipped Classroom • How have you changed? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/classwork",
            courseLabel: "Classwork • How have you changed? (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/homework",
            courseLabel: "Homework • How have you changed? (Cycle 2)",
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
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-42/classwork",
            courseLabel:
              "Classwork • Progress Check • Lessons 38-41 + Written and Oral Quiz",
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
            courseImg: elementary,
            courseLink: "/courses/intermediate/lesson-43/classwork",
            courseLabel: "Classwork • Test • Lessons 23-41 + Written Quiz",
          },
        ],
      },
    ],
  },
];

export default function Elementary() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
