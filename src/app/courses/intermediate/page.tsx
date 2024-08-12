import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

import { intermediate } from "@/img/index";

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
              "• Can understand the main points of clear standard input on familiar matters regularly encoutered in work, school, leisure, etc.",
          },
          {
            content:
              "• Can deal with most situations likely to arise while travelling in an area where the language is spoken.",
          },
          {
            content:
              "• Can produce simple connection text on topics which are familiar or personal interest.",
          },
          {
            content:
              "• Can describe experiences and events, dreams, hopes and ambitions and briefly give reasons and explanations for opinions and plans.",
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
              "By the end of this lesson, students will be better able to discuss ideal friends and partners using relative pronouns who and that.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-2/flipped-classroom",
            courseLabel: "Flipped Classroom • That's my kind of friend! (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-2/classwork",
            courseLabel: "Classwork • That's my kind of friend! (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-2/homework",
            courseLabel: "Homework • That's my kind of friend! (Cycle 1)",
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
              "By the end of this lesson, students will be better able to discuss things they like and don’t like using clauses with it and adverbial clauses with when.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-3/flipped-classroom",
            courseLabel: "Flipped Classroom • That's my kind of friend! (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-3/classwork",
            courseLabel: "Classwork • That's my kind of friend! (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-3/homework",
            courseLabel: "Homework • That's my kind of friend! (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss their opinions of jobs using gerund phrases as subjects and as objects.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-4/flipped-classroom",
            courseLabel: "Flipped Classroom • Working 9 to 5 (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-4/classwork",
            courseLabel: "Classwork • Working 9 to 5 (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-4/homework",
            courseLabel: "Homework • Working 9 to 5 (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss jobs using comparisons with adjectives, adverbs, nouns, and past participles.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-5/flipped-classroom",
            courseLabel: "Flipped Classroom • Working 9 to 5 (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-5/classwork",
            courseLabel: "Classwork • Working 9 to 5 (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-5/homework",
            courseLabel: "Homework • Working 9 to 5 (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-6/classwork",
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
              "By the end of this lesson, students will be able to discuss favors, borrowing, and lending using modals, if clauses, and gerunds.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-7/flipped-classroom",
            courseLabel: "Flipped Classroom • Lend a hand (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-7/classwork",
            courseLabel: "Classwork • Lend a hand (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-7/homework",
            courseLabel: "Homework • Lend a hand (Cycle 1)",
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
              "By the end of this lesson, students will be able to leave messages using indirect requests.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-8/flipped-classroom",
            courseLabel: "Flipped Classroom • Lend a hand (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-8/classwork",
            courseLabel: "Classwork • Lend a hand (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-8/homework",
            courseLabel: "Homework • Lend a hand (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe past events using the simple past and past continuous.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-9/flipped-classroom",
            courseLabel: "Flipped Classroom • Flipped Classroom • What happened? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-9/classwork",
            courseLabel: "Classwork • Flipped Classroom • What happened? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-9/homework",
            courseLabel: "Homework • Flipped Classroom • What happened? (Cycle 1)",
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
              "By the end of this lesson, students will be able to tell stories using the past perfect tense.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-10/flipped-classroom",
            courseLabel: "Flipped Classroom • What happened? (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-10/classwork",
            courseLabel: "Classwork • What happened? (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-10/homework",
            courseLabel: "Homework • What happened? (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-11/classwork",
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
              "By the end of this lesson, students will be able to discuss living abroad using noun phrases and relative clauses.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-12/flipped-classroom",
            courseLabel: "Flipped Classroom • Expanding your horizons (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-12/",
            courseLabel: "Classwork • Expanding your horizons (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/class-12/",
            courseLabel: "Homework • Expanding your horizons (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe expectations using when and if clauses.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-13/flipped-classroom",
            courseLabel: "Flipped Classroom • Expanding your horizons (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-13/classwork",
            courseLabel: "Classwork • Expanding your horizons (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-13/homework",
            courseLabel: "Homework • Expanding your horizons (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe problems using nouns and past participles as adjectives.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-14/flipped-classroom",
            courseLabel:
              "Flipped Classroom • That needs fixing (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-14/classwork",
            courseLabel: "Classwork • That needs fixing (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-14/homework",
            courseLabel: "Homework • That needs fixing (Cycle 1)",
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
              "By the end of this class, students will be able to discuss what needs fixing using need with passive infinitives and gerunds, and keep with gerunds.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-15/flipped-classroom",
            courseLabel:
              "Flipped Classroom • That needs fixing (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-15/classwork",
            courseLabel: "Classwork • That needs fixing (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-15/homework",
            courseLabel: "Homework • That needs fixing (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-16/classwork",
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
              "By the end of this lesson, students will be able to discuss environmental problems using the present continuous and present perfect passive tenses and prepositions of cause.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-17/flipped-classroom",
            courseLabel: "Flipped Classroom • What can we do? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-17/classwork",
            courseLabel: "Classwork • What can we do? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-17/homework",
            courseLabel: "Homework • What can we do? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss what they can do about problems using infinitive clauses and phrases.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-18/flipped-classroom",
            courseLabel: "Flipped Classroom • What can we do? (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-18/classwork",
            courseLabel: "Classwork • What can we do? (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-18/homework",
            courseLabel: "Homework • What can we do? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss personal preferences using would rather and would prefer.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-19/flipped-classroom",
            courseLabel: "Flipped Classroom • Never stop learning (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-19/classwork",
            courseLabel: "Classwork • Never stop learning (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-19/homework",
            courseLabel: "Homework • Never stop learning (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss ways to learn and personal qualities using by + gerund for manner.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-20/flipped-classroom",
            courseLabel: "Flipped Classroom • Never stop learning (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-20/classwork",
            courseLabel: "Classwork • Never stop learning (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-20/homework",
            courseLabel: "Homework • Never stop learning (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-21/classwork",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-22/classwork",
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
              "By the end of this lesson, students will be able to discuss professional services using causatives.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-23/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-23/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-23/homework",
            courseLabel: "Homework • ...",
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
              "By the end of this lesson, students will be able to discuss professional services using causatives.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-24/flipped-classroom",
            courseLabel: "Flipped Classroom • Getting things done? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-24/classwork",
            courseLabel: "Classwork • Getting things done? (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-24/homework",
            courseLabel: "Homework • Getting things done? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss important past events using time references.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-25/flipped-classroom",
            courseLabel:
              "Flipped Classroom • A matter of time (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-25/classwork",
            courseLabel: "Classwork • A matter of time (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-25/homework",
            courseLabel: "Homework • A matter of time (Cycle 1)",
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
              "By the end of this lesson, students will be able to make predictions using a1 variety of structures.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-26/flipped-classroom",
            courseLabel:
              "Flipped Classroom • A matter of time (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-26/classwork",
            courseLabel: "Classwork • A matter of time (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-26/homework",
            courseLabel: "Homework • A matter of time (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-27/classwork",
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
              "By the end of this lesson, students will be able to discuss milestones in their lives using a1 variety of time clauses.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-28/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Rites of passage (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-28/classwork",
            courseLabel: "Classwork • Rites of passage (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-28/homework",
            courseLabel: "Homework • Rites of passage (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss regrets using should have + past participle and if clauses in the past perfect.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-29/flipped-classroom",
            courseLabel:
              "Flipped Classroom • Rites of passage (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-29/classwork",
            courseLabel: "Classwork • Rites of passage (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-29/homework",
            courseLabel: "Homework • Rites of passage (Cycle 2)",
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
              "By the end of this lesson, students will be able to express personal views and describe qualities for success using infinitive clauses and phrases.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-30/flipped-classroom",
            courseLabel: "Flipped Classroom • Keys to success (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-30/classwork",
            courseLabel: "Classwork • Keys to success (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-30/homework",
            courseLabel: "Homework • Keys to success (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe features and give reasons using because, since, because of, for, due to, and the reason.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-31/flipped-classroom",
            courseLabel: "Flipped Classroom • Keys to success (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-31/classwork",
            courseLabel: "Classwork • Keys to success (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-31/homework",
            courseLabel: "Homework • Keys to success (Cycle 1)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-32/classwork",
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
              "By the end of this lesson, students will be able to give explanations, reasons, and suggestions using past modals must have, may have, and could have.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-33/flipped-classroom",
            courseLabel: "Flipped Classroom • What might have been (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-33/classwork",
            courseLabel: "Classwork • What might have been (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-33/homework",
            courseLabel: "Homework • What might have been (Cycle 1)",
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
              "By the end of this lesson, students will be able to give opinions and advice with past modals should have, could have, and would have.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-34/flipped-classroom",
            courseLabel: "Flipped Classroom • What might have been (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-34/classwork",
            courseLabel: "Classwork • What might have been (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-34/homework",
            courseLabel: "Homework • What might have been (Cycle 2)",
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
              "By the end of this lesson, students will be able to describe processes using the passive.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-35/flipped-classroom",
            courseLabel: "Flipped Classroom • Creative carrers (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-35/classwork",
            courseLabel: "Classwork • Creative carrers (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-35/homework",
            courseLabel: "Homework • Creative carrers (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss jobs using defining and non-defining relative clauses.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-36/flipped-classroom",
            courseLabel: "Flipped Classroom • Creative carrers (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-36/classwork",
            courseLabel: "Classwork • Creative carrers (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-36/homework",
            courseLabel: "Homework • Creative carrers (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-37/classwork",
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
              "By the end of this lesson, students will be able to make recommendations using passive modals.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-38/flipped-classroom",
            courseLabel: "Flipped Classroom • A law must be passed! (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-38/classwork",
            courseLabel: "Classwork • A law must be passed! (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-38/homework",
            courseLabel: "Homework • A law must be passed! (Cycle 1)",
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
              "By the end of this lesson, students will be able to express opinions using tag questions.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-39/flipped-classroom",
            courseLabel: "Flipped Classroom • A law must be passed! (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-39/classwork",
            courseLabel: "Classwork • A law must be passed! (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-39/homework",
            courseLabel: "Homework • A law must be passed! (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss personal accomplishments using complex noun phrases with gerunds.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-40/flipped-classroom",
            courseLabel: "Flipped Classroom • Reaching your goals (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-40/classwork",
            courseLabel: "Classwork • Reaching your goals (Cycle 1)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-40/homework",
            courseLabel: "Homework • Reaching your goals (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss accomplishments and goals using future tenses, including the future perfect.",
            applyHr: true,
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-41/flipped-classroom",
            courseLabel: "Flipped Classroom • Reaching your goals (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-41/classwork",
            courseLabel: "Classwork • Reaching your goals (Cycle 2)",
          },
          {
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-41/homework",
            courseLabel: "Homework • Reaching your goals (Cycle 2)",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-42/classwork",
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
            courseImg: intermediate,
            courseLink: "/courses/intermediate/lesson-43/classwork",
            courseLabel: "Classwork • Test • Lessons 23-41 + Written Quiz",
          },
        ],
      },
    ],
  },
];

export default function Intermediate() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate (B1)"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
