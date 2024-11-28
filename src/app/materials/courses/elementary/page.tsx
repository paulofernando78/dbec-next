import { BoardCard } from "@/components";
import { ContentCard } from "@/components/Molecules/Cards/ContentCard";

const whiteboard = {
  title: "Courses",
  subtitle: "Elementary",
  descriptions: ["43 lessons"],
};

const contents = [
  // Lessons 1 - 6 + Written and Oral Quiz
  {
    headerLabel: "Lessons 1 - 6 + Written and Oral Quiz",
    cardContents: [
      // Lesson 1
      {
        bgColor: "#EC3B3B",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 2",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to introduce themselves and others using be and possessive adjectives, and ask and answer Wh-questions to find out information about others and to state information about themselves.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-2/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Where are you from? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-2/classwork",
            checkboxLabel: "Classwork • Where are you from? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-2/homework",
            checkboxLabel: "Homework • Where are you from? (Cycle 1)",
          },
        ],
      },
      // Lesson 3
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 3",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask and answer yes/no questions to find out information about others and to state information about themselves.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-3/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Where are you from? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-3/classwork",
            checkboxLabel: "Classwork • Where are you from? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-3/homework",
            checkboxLabel: "Homework • Where are you from? (Cycle 2)",
          },
        ],
      },
      // Lesson 4
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 4",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask and answer questions about occupations using the simple present.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-4/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What do you do? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-4/classwork",
            checkboxLabel: "Classwork • What do you do? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-4/homework",
            checkboxLabel: "Homework • What do you do? (Cycle 1)",
          },
        ],
      },
      // Lesson 5
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 5",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe routines and daily schedules using time expressions.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-5/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What do you do? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-5/classwork",
            checkboxLabel: "Classwork • What do you do? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-5/homework",
            checkboxLabel: "Homework • What do you do? (Cycle 2)",
          },
        ],
      },
      // Lesson 6 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-6/classwork",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 7",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use demonstratives, one, and ones to ask about and describe prices.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-7/flipped-classroom",
            checkboxLabel: "Flipped Classroom • How much are these? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-7/classwork",
            checkboxLabel: "Classwork • How much are these? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-7/homework",
            checkboxLabel: "Homework • How much are these? (Cycle 1)",
          },
        ],
      },
      // Lesson 8
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 8",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss preferences using comparisons with adjectives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-8/flipped-classroom",
            checkboxLabel: "Flipped Classroom • How much are these? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-8/classwork",
            checkboxLabel: "Classwork • How much are these? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-8/homework",
            checkboxLabel: "Homework • How much are these? (Cycle 2)",
          },
        ],
      },
      // Lesson 9
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 9",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss entertainment likes and dislikes using yes/no and Wh-questions with do.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-9/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Do you play the guitar? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-9/classwork",
            checkboxLabel: "Classwork • Do you play the guitar? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-9/homework",
            checkboxLabel: "Homework • Do you play the guitar? (Cycle 1)",
          },
        ],
      },
      // Lesson 10
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 10",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make, accept, and decline invitations using would and verb + to + verb.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-10/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Do you play the guitar? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-10/classwork",
            checkboxLabel: "Classwork • Do you play the guitar? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-10/homework",
            checkboxLabel: "Homework • Do you play the guitar? (Cycle 2)",
          },
        ],
      },
      // Lesson 11 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-11/classwork",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 12",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe families and ask and answer questions using the present continuous.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-12/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What's an interesting family? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-12/classwork",
            checkboxLabel:
              "Classwork • What's an interesting family? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-12/homework",
            checkboxLabel: "Homework • What's an interesting family? (Cycle 1)",
          },
        ],
      },
      // Lesson 13
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 13",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use quantifiers to describe families.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-13/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What's an interesting family? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-13/classwork",
            checkboxLabel:
              "Classwork • What's an interesting family? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-13/homework",
            checkboxLabel: "Homework • What's an interesting family? (Cycle 2)",
          },
        ],
      },
      // Lesson 14
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 14",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss sports and exercise habits.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-14/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How often do you run? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-14/classwork",
            checkboxLabel: "Classwork • How often do you run? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-14/homework",
            checkboxLabel: "Homework • How often do you run? (Cycle 1)",
          },
        ],
      },
      // Lesson 15
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 15",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask and answer questions about frequency of free-time activities.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-15/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How often do you run? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-15/classwork",
            checkboxLabel: "Classwork • How often do you run? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-15/homework",
            checkboxLabel: "Homework • How often do you run? (Cycle 2)",
          },
        ],
      },
      // Lesson 16 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-16/classwork",
            checkboxLabel:
              "Classwork • Review lessons 12-15 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 17 - 21 + Written and Oral Quiz",
    cardContents: [
      // Lesson 17
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 17",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss daily and free-time activities using the <mark>simple past with regular and irregular verbs</mark>.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-17/flipped-classroom",
            checkboxLabel: "Flipped Classroom • We went dancing! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-17/classwork",
            checkboxLabel: "Classwork • We went dancing! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-17/homework",
            checkboxLabel: "Homework • We went dancing! (Cycle 1)",
          },
        ],
      },
      // Lesson 18
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 18",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss vacations using the past tense of be.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-18/flipped-classroom",
            checkboxLabel: "Flipped Classroom • We went dancing! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-18/classwork",
            checkboxLabel: "Classwork • We went dancing! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-18/homework",
            checkboxLabel: "Homework • We went dancing! (Cycle 2)",
          },
        ],
      },
      // Lesson 19
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 19",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask about and describe places using there is/there are and prepositions of place.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-19/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How's the neighborhood? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-19/classwork",
            checkboxLabel: "Classwork • How's the neighborhood? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-19/homework",
            checkboxLabel: "Homework • How's the neighborhood? (Cycle 1)",
          },
        ],
      },
      // Lesson 20
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 20",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe features of a1 neighborhood using quantifiers.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-20/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How's the neighborhood? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-20/classwork",
            checkboxLabel: "Classwork • How's the neighborhood? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-20/homework",
            checkboxLabel: "Homework • How's the neighborhood? (Cycle 2)",
          },
        ],
      },
      // Lesson 21 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-21/classwork",
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
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-22/classwork",
            checkboxLabel: "Classwork • Review • Lessons 2-20 + Written Test",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 23",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe people’s physical appearance.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-23/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What does she look like? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-23/classwork",
            checkboxLabel: "Classwork • What does she look like? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-23/homework",
            checkboxLabel: "Homework • What does she look like? (Cycle 1)",
          },
        ],
      },
      // Lesson 24
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 24",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to identify people using modifiers with participles and prepositions to describe how they look, what they are wearing, what they’re doing, and where they are.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-24/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What does she look like? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-24/classwork",
            checkboxLabel: "Classwork • What does she look like? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-24/homework",
            checkboxLabel: "Homework • What does she look like? (Cycle 2)",
          },
        ],
      },
      // Lesson 25
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 25",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe recent activities using the present perfect, already, and yet.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-25/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Have you ever been there? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-25/classwork",
            checkboxLabel: "Classwork • Have you ever been there? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-25/homework",
            checkboxLabel: "Homework • Have you ever been there? (Cycle 1)",
          },
        ],
      },
      // Lesson 26
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 26",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe experiences from the recent and distant past using the present perfect, simple past, for, and since.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-26/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Have you ever been there? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-26/classwork",
            checkboxLabel: "Classwork • Have you ever been there? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-26/homework",
            checkboxLabel: "Homework • Have you ever been there? (Cycle 2)",
          },
        ],
      },
      // Lesson 27 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-27/classwork",
            checkboxLabel:
              "Classwork • Progress Check lessons 23-26 + Written and Oral Quiz",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 28",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe their hometowns using adjectives, adverbs, and conjunctions, and make suggestions about places using can and should.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-28/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's a really nice city. (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-28/classwork",
            checkboxLabel: "Classwork • It's a really nice city. (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-28/homework",
            checkboxLabel: "Homework • It's a really nice city. (Cycle 1)",
          },
        ],
      },
      // Lesson 29
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 29",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make suggestions about places using can and should.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-29/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's a really nice city. (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-29/classwork",
            checkboxLabel: "Classwork • It's a really nice city. (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-29/homework",
            checkboxLabel: "Homework • It's a really nice city. (Cycle 2)",
          },
        ],
      },
      // Lesson 30
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 30",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to state health problems and give advice using adjective + infinitive and noun + infinitive.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-30/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's important to get rest (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-30/classwork",
            checkboxLabel: "Classwork • It's important to get rest (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-30/homework",
            checkboxLabel: "Homework • It's important to get rest (Cycle 1)",
          },
        ],
      },
      // Lesson 31
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 31",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to ask for advice and give suggestions about health care products using can, could, and may.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-31/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's important to get rest (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-31/classwork",
            checkboxLabel: "Classwork • It's important to get rest (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-31/homework",
            checkboxLabel: "Homework • It's important to get rest (Cycle 2)",
          },
        ],
      },
      // Lesson 32 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-32/classwork",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 33",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to agree and disagree about food preferences using so, too, neither, and either.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-33/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What would you like? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-33/classwork",
            checkboxLabel: "Classwork • What would you like? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-33/homework",
            checkboxLabel: "Homework • What would you like? (Cycle 1)",
          },
        ],
      },
      // Lesson 34
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 34",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to use would and will to order food at a1 restaurant.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-34/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What would you like? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-34/classwork",
            checkboxLabel: "Classwork • What would you like? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-34/homework",
            checkboxLabel: "Homework • What would you like? (Cycle 2)",
          },
        ],
      },
      // Lesson 35
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 35",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe geography using comparative and superlative forms of adjectives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-35/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's the coldest city! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-35/classwork",
            checkboxLabel: "Classwork • It's the coldest city! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-35/homework",
            checkboxLabel: "Homework • It's the coldest city! (Cycle 1)",
          },
        ],
      },
      // Lesson 36
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 36",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe distances and measurements, and ask and answer questions with how.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-36/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • It's the coldest city! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-36/classwork",
            checkboxLabel: "Classwork • It's the coldest city! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-36/homework",
            checkboxLabel: "Homework • It's the coldest city! (Cycle 2)",
          },
        ],
      },
      // Lesson 37 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-37/classwork",
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
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 38",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss future activities and plans using the present continuous, be going to, and time expressions.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-38/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What are you doing later? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-38/classwork",
            checkboxLabel: "Classwork • What are you doing later? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-38/homework",
            checkboxLabel: "Homework • What are you doing later? (Cycle 1)",
          },
        ],
      },
      // Lesson 39
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 39",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to give messages using tell and ask.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-39/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • What are you doing later? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-39/classwork",
            checkboxLabel: "Classwork • What are you doing later? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-39/homework",
            checkboxLabel: "Homework • What are you doing later? (Cycle 2)",
          },
        ],
      },
      // Lesson 40
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 40",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe changes in their lives using the comparative and present, past, and present perfect tenses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-40/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How have you changed? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-40/classwork",
            checkboxLabel: "Classwork • How have you changed? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-40/homework",
            checkboxLabel: "Homework • How have you changed? (Cycle 1)",
          },
        ],
      },
      // Lesson 41
      {
        bgColor: "#EC3B3B",
        textColor: "white",
        cardLabel: "Lesson 41",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe plans for the future using verb + infinitive.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/elementary/lesson-41/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • How have you changed? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-41/classwork",
            checkboxLabel: "Classwork • How have you changed? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/elementary/lesson-41/homework",
            checkboxLabel: "Homework • How have you changed? (Cycle 2)",
          },
        ],
      },
      // Lesson 42 *Review + Written and Oral Quiz
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-42/classwork",
            checkboxLabel:
              "Classwork • Review lessons 38-41 + Written and Oral Quiz",
          },
        ],
      },
    ],
  },
  {
    headerLabel: "Lessons 23-41 - Written Test",
    cardContents: [
      // Lesson 43 Written Test
      {
        bgColor: "#EC3B3B",
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
            checkboxLink: "/materials/courses/elementary/lesson-43/classwork",
            checkboxLabel: "Classwork • Review lessons 23-41 + Written Test",
          },
        ],
      },
    ],
  },
];

export default function Elementary() {
  return (
    <>
      <div className="line-break">
        {/* CEFR */}
        <BoardCard
          label="CEFR (Common European Framework of Reference)"
          bgColor="#EC3B3B"
          textColor="white"
        >
          <div>
            <p>
              • Can understand sentences and frequently used expressions related
              to areas of most immediate relevance (e.g. very basic personal and
              family information, shopping, local geography, employment).
            </p>
            <p>
              • Can communicate in simple and routine tasks requiring a1 simple
              and direct exchange of information on familiar and routine
              matters.
            </p>
            <p>
              • Can describe in simple terms aspects of his/her background,
              immediate environment and matters in areas of immediate Basic
              need.
            </p>
          </div>
        </BoardCard>
        <ContentCard whiteboard={whiteboard} contents={contents} />
      </div>
    </>
  );
}
