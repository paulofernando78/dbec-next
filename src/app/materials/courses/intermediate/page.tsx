import { BoardCard } from "@/components";
import { ContentCard } from "@/components/Molecules/Cards/ContentCard";

const whiteboard = {
  title: "Courses",
  subtitle: "Intermediate",
  descriptions: ["43 lessons"],
};

const contents = [
  {
    headerLabel: "Lessons 1 - 6 + Written and Oral Quiz",
    cardContents: [
      // Lesson 1
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 1",
        contents: [
          {
            content: "Let's get to know each other / one another better.",
          },
        ],
      },
      // Lesson 2
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 2",
        contents: [
          {
            content:
              "By the end of this lesson, students will be better able to discuss ideal friends and partners using relative pronouns who and that.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-2/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • That's my kind of friend! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-2/classwork",
            checkboxLabel: "Classwork • That's my kind of friend! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-2/homework",
            checkboxLabel: "Homework • That's my kind of friend! (Cycle 1)",
          },
        ],
      },
      // Lesson 3
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 3",
        contents: [
          {
            content:
              "By the end of this lesson, students will be better able to discuss things they like and don’t like using clauses with it and adverbial clauses with when.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-3/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • That's my kind of friend! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-3/classwork",
            checkboxLabel: "Classwork • That's my kind of friend! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-3/homework",
            checkboxLabel: "Homework • That's my kind of friend! (Cycle 2)",
          },
        ],
      },
      // Lesson 4
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 4",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss their opinions of jobs using gerund phrases as subjects and as objects.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-4/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Working 9 to 5 (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-4/classwork",
            checkboxLabel: "Classwork • Working 9 to 5 (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-4/homework",
            checkboxLabel: "Homework • Working 9 to 5 (Cycle 1)",
          },
        ],
      },
      // Lesson 5
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 5",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss jobs using comparisons with adjectives, adverbs, nouns, and past participles.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-5/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Working 9 to 5 (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-5/classwork",
            checkboxLabel: "Classwork • Working 9 to 5 (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-5/homework",
            checkboxLabel: "Homework • Working 9 to 5 (Cycle 2)",
          },
        ],
      },
      // Lesson 6 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-6/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 7",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss favors, borrowing, and lending using modals, if clauses, and gerunds.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-7/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Lend a hand (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-7/classwork",
            checkboxLabel: "Classwork • Lend a hand (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-7/homework",
            checkboxLabel: "Homework • Lend a hand (Cycle 1)",
          },
        ],
      },
      // Lesson 8
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 8",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to leave messages using indirect requests.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-8/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Lend a hand (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-8/classwork",
            checkboxLabel: "Classwork • Lend a hand (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-8/homework",
            checkboxLabel: "Homework • Lend a hand (Cycle 2)",
          },
        ],
      },
      // Lesson 9
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 9",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe past events using the simple past and past continuous.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-9/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Flipped Classroom • What happened? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-9/classwork",
            checkboxLabel:
              "Classwork • Flipped Classroom • What happened? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-9/homework",
            checkboxLabel:
              "Homework • Flipped Classroom • What happened? (Cycle 1)",
          },
        ],
      },
      // Lesson 10
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 10",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to tell stories using the past perfect tense.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-10/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What happened? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-10/classwork",
            checkboxLabel: "Classwork • What happened? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-10/homework",
            checkboxLabel: "Homework • What happened? (Cycle 2)",
          },
        ],
      },
      // Lesson 11 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-11/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 12",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss living abroad using noun phrases and relative clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-12/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Expanding your horizons (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-12/classwork",
            checkboxLabel: "Classwork • Expanding your horizons (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-12/homework",
            checkboxLabel: "Homework • Expanding your horizons (Cycle 1)",
          },
        ],
      },
      // Lesson 13
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 13",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe expectations using when and if clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-13/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • Expanding your horizons (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-13/classwork",
            checkboxLabel: "Classwork • Expanding your horizons (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-13/homework",
            checkboxLabel: "Homework • Expanding your horizons (Cycle 2)",
          },
        ],
      },
      // Lesson 14
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 14",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe problems using nouns and past participles as adjectives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-14/flipped-classroom",
            checkboxLabel: "Flipped Classroom • That needs fixing (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-14/classwork",
            checkboxLabel: "Classwork • That needs fixing (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-14/homework",
            checkboxLabel: "Homework • That needs fixing (Cycle 1)",
          },
        ],
      },
      // Lesson 15
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 15",
        contents: [
          {
            content:
              "By the end of this class, students will be able to discuss what needs fixing using need with passive infinitives and gerunds, and keep with gerunds.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-15/flipped-classroom",
            checkboxLabel: "Flipped Classroom • That needs fixing (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-15/classwork",
            checkboxLabel: "Classwork • That needs fixing (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-15/homework",
            checkboxLabel: "Homework • That needs fixing (Cycle 2)",
          },
        ],
      },
      // Lesson 16 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-16/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 17",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss environmental problems using the present continuous and present perfect passive tenses and prepositions of cause.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-17/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What can we do? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-17/classwork",
            checkboxLabel: "Classwork • What can we do? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-17/homework",
            checkboxLabel: "Homework • What can we do? (Cycle 1)",
          },
        ],
      },
      // Lesson 18
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 18",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss what they can do about problems using infinitive clauses and phrases.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-18/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What can we do? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-18/classwork",
            checkboxLabel: "Classwork • What can we do? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-18/homework",
            checkboxLabel: "Homework • What can we do? (Cycle 2)",
          },
        ],
      },
      // Lesson 19
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 19",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss personal preferences using would rather and would prefer.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-19/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Never stop learning (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-19/classwork",
            checkboxLabel: "Classwork • Never stop learning (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-19/homework",
            checkboxLabel: "Homework • Never stop learning (Cycle 1)",
          },
        ],
      },
      // Lesson 20
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 20",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss ways to learn and personal qualities using by + gerund for manner.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-20/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Never stop learning (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-20/classwork",
            checkboxLabel: "Classwork • Never stop learning (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-20/homework",
            checkboxLabel: "Homework • Never stop learning (Cycle 2)",
          },
        ],
      },
      // Lesson 21 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-21/classwork",
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
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-22/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 23",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss professional services using causatives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-23/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Getting things done? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-23/classwork",
            checkboxLabel: "Classwork • Getting things done? (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-23/homework",
            checkboxLabel: "Homework • Getting things done? (Cycle 1)",
          },
        ],
      },
      // Lesson 24
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 24",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss professional services using causatives.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-24/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Getting things done? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-24/classwork",
            checkboxLabel: "Classwork • Getting things done? (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-24/homework",
            checkboxLabel: "Homework • Getting things done? (Cycle 2)",
          },
        ],
      },
      // Lesson 25
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 25",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss important past events using time references.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-25/flipped-classroom",
            checkboxLabel: "Flipped Classroom • A matter of time (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-25/classwork",
            checkboxLabel: "Classwork • A matter of time (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-25/homework",
            checkboxLabel: "Homework • A matter of time (Cycle 1)",
          },
        ],
      },
      // Lesson 26
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 26",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make p#82C121ictions using a1 variety of structures.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-26/flipped-classroom",
            checkboxLabel: "Flipped Classroom • A matter of time (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-26/classwork",
            checkboxLabel: "Classwork • A matter of time (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-26/homework",
            checkboxLabel: "Homework • A matter of time (Cycle 2)",
          },
        ],
      },
      // Lesson 27 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-27/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 28",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss milestones in their lives using a1 variety of time clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-28/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Rites of passage (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-28/classwork",
            checkboxLabel: "Classwork • Rites of passage (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-28/homework",
            checkboxLabel: "Homework • Rites of passage (Cycle 1)",
          },
        ],
      },
      // Lesson 29
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 29",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss regrets using should have + past participle and if clauses in the past perfect.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-29/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Rites of passage (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-29/classwork",
            checkboxLabel: "Classwork • Rites of passage (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-29/homework",
            checkboxLabel: "Homework • Rites of passage (Cycle 2)",
          },
        ],
      },
      // Lesson 30
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 30",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to express personal views and describe qualities for success using infinitive clauses and phrases.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-30/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Keys to success (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-30/classwork",
            checkboxLabel: "Classwork • Keys to success (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-30/homework",
            checkboxLabel: "Homework • Keys to success (Cycle 1)",
          },
        ],
      },
      // Lesson 31
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 31",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe features and give reasons using because, since, because of, for, due to, and the reason.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-31/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Keys to success (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-31/classwork",
            checkboxLabel: "Classwork • Keys to success (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-31/homework",
            checkboxLabel: "Homework • Keys to success (Cycle 1)",
          },
        ],
      },
      // Lesson 32 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-32/classwork",
            checkboxLabel:
              "Classwork • Review essons 28-31 + Written and Oral Quiz",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 33",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to give explanations, reasons, and suggestions using past modals must have, may have, and could have.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-33/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What might have been (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-33/classwork",
            checkboxLabel: "Classwork • What might have been (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-33/homework",
            checkboxLabel: "Homework • What might have been (Cycle 1)",
          },
        ],
      },
      // Lesson 34
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 34",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to give opinions and advice with past modals should have, could have, and would have.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-34/flipped-classroom",
            checkboxLabel: "Flipped Classroom • What might have been (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-34/classwork",
            checkboxLabel: "Classwork • What might have been (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-34/homework",
            checkboxLabel: "Homework • What might have been (Cycle 2)",
          },
        ],
      },
      // Lesson 35
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 35",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to describe processes using the passive.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-35/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Creative carrers (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-35/classwork",
            checkboxLabel: "Classwork • Creative carrers (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-35/homework",
            checkboxLabel: "Homework • Creative carrers (Cycle 1)",
          },
        ],
      },
      // Lesson 36
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 36",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss jobs using defining and non-defining relative clauses.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-36/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Creative carrers (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-36/classwork",
            checkboxLabel: "Classwork • Creative carrers (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-36/homework",
            checkboxLabel: "Homework • Creative carrers (Cycle 2)",
          },
        ],
      },
      // Lesson 37 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-37/classwork",
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
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 38",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to make recommendations using passive modals.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-38/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • A law must be passed! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-38/classwork",
            checkboxLabel: "Classwork • A law must be passed! (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-38/homework",
            checkboxLabel: "Homework • A law must be passed! (Cycle 1)",
          },
        ],
      },
      // Lesson 39
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 39",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to express opinions using tag questions.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-39/flipped-classroom",
            checkboxLabel:
              "Flipped Classroom • A law must be passed! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-39/classwork",
            checkboxLabel: "Classwork • A law must be passed! (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-39/homework",
            checkboxLabel: "Homework • A law must be passed! (Cycle 2)",
          },
        ],
      },
      // Lesson 40
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 40",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss personal accomplishments using complex noun phrases with gerunds.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-40/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Reaching your goals (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-40/classwork",
            checkboxLabel: "Classwork • Reaching your goals (Cycle 1)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-40/homework",
            checkboxLabel: "Homework • Reaching your goals (Cycle 1)",
          },
        ],
      },
      // Lesson 41
      {
        bgColor: "#82C121",
        textColor: "white",
        cardLabel: "Lesson 41",
        contents: [
          {
            content:
              "By the end of this lesson, students will be able to discuss accomplishments and goals using future tenses, including the future perfect.",
            applyHr: true,
          },
          {
            checkboxLink:
              "/materials/courses/intermediate/lesson-41/flipped-classroom",
            checkboxLabel: "Flipped Classroom • Reaching your goals (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-41/classwork",
            checkboxLabel: "Classwork • Reaching your goals (Cycle 2)",
          },
          {
            checkboxLink: "/materials/courses/intermediate/lesson-41/homework",
            checkboxLabel: "Homework • Reaching your goals (Cycle 2)",
          },
        ],
      },
      // Lesson 42 *Review + Written and Oral Quiz
      {
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-42/classwork",
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
        bgColor: "#82C121",
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
            checkboxLink: "/materials/courses/intermediate/lesson-43/classwork",
            checkboxLabel: "Classwork • Review lessons 23-41 + Written Test",
          },
        ],
      },
    ],
  },
];

export default function Intermediate() {
  return (
    <>
      <div className="line-break">
        <BoardCard
          label="CEFR (Common European Framework of Reference)"
          bgColor="#82C121"
          textColor="white"
        >
          <div>
            <p>
              • Can understand the main points of clear standard input on
              familiar matters regularly encoute#82C121 in work, school,
              leisure, etc.
            </p>
            <p>
              • Can deal with most situations likely to arise while travelling
              in an area where the language is spoken.
            </p>
            <p>
              • Can produce simple connection text on topics which are familiar
              or personal interest.
            </p>
            <p>
              • Can describe experiences and events, dreams, hopes and ambitions
              and briefly give reasons and explanations for opinions and plans.
            </p>
          </div>
        </BoardCard>
        <ContentCard whiteboard={whiteboard} contents={contents} />
      </div>
    </>
  );
}
