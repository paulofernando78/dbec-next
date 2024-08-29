import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";

import { beginner } from "@/img/index";

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
              "• Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has.",
          },
          {
            content:
              "• Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.",
          },
          {
            content:
              "• Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.",
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
              "By the end of this lesson, students will be able to say hello and make introductions using my, your, his, and her.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-2/flipped-classroom",
            courseLabel: "Flipped Classroom • What's your name? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-2/classwork",
            courseLabel: "Classwork • What's your name? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-2/homework",
            courseLabel: "Homework • What's your name? (Cycle 1)",
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
              "By the end of this lesson, students will be able to say good-bye and exchange contact information using subject pronouns and the verb be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-3/flipped-classroom",
            courseLabel: "Flipped Classroom • What's your name? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-3/classwork",
            courseLabel: "Classwork • What's your name? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-3/homework",
            courseLabel: "Homework • What's your name? (Cycle 2)",
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
              "By the end of this lesson, students will be able to identify and discuss personal and classroom objects using the articles a1/ an, plurals, this / these, and it / they.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-4/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are my keys? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-4/classwork",
            courseLabel: "Classwork • Where are my keys? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-4/homework",
            courseLabel: "Homework • Where are my keys? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss the location of items using yes/ no and where questions with be, the article the, and prepositions of place.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-5/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are my keys? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-5/classwork",
            courseLabel: "Classwork • Where are my keys? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-5/homework",
            courseLabel: "Homework • Where are my keys? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-6/classwork",
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
              "By the end of this lesson, students will be able to discuss cities, countries, nationalities, and languages using yes / no questions with be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-7/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-7/classwork",
            courseLabel: "Classwork • Where are you from? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-7/homework",
            courseLabel: "Homework • Where are you from? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss people's appearances, personalities, and ages using Wh- questions with be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-8/flipped-classroom",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-8/classwork",
            courseLabel: "Classwork • Where are you from? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-8/homework",
            courseLabel: "Homework • Where are you from? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss work and free- time clothes and colors using possessive adjectives, possessive pronouns, and possessives with names.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-9/flipped-classroom",
            courseLabel: "Flipped Classroom • Is this your coat? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-9/classwork",
            courseLabel: "Classwork • Is this your coat? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-9/homework",
            courseLabel: "Homework • Is this your coat? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss the weather and what people are wearing using the present continuous and conjunctions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-10/flipped-classroom",
            courseLabel: "Flipped Classroom • Is this your coat? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-10/classwork",
            courseLabel: "Classwork • Is this your coat? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-10/homework",
            courseLabel: "Homework • Is this your coat? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-11/classwork",
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
              "By the end of this lesson, students will be able to discuss cities and time zones using time expressions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-12/flipped-classroom",
            courseLabel: "Flipped Classroom • What time is it? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-12/",
            courseLabel: "Classwork • What time is it? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
            courseLabel: "Homework • What time is it? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss people's activities using the present continuous.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-13/flipped-classroom",
            courseLabel: "Flipped Classroom • What time is it? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-13/classwork",
            courseLabel: "Classwork • What time is it? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-13/homework",
            courseLabel: "Homework • What time is it? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss transportation and family using simple present statements.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-14/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I ride my bike to school. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-14/classwork",
            courseLabel: "Classwork • I ride my bike to school. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-14/homework",
            courseLabel: "Homework • I ride my bike to school. (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss daily and weekly routines using simple present questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-15/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I ride my bike to school. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-15/classwork",
            courseLabel: "Classwork • I ride my bike to school. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-15/homework",
            courseLabel: "Homework • I ride my bike to school. (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-16/classwork",
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
              "By the end of this lesson, students will be able to describe houses and apartments using simple present questions and short answers.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-17/flipped-classroom",
            courseLabel: "Flipped Classroom • Does it have a view? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-17/classwork",
            courseLabel: "Classwork • Does it have a view? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-17/homework",
            courseLabel: "Homework • Does it have a view? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss furniture, appliances, and dream homes using statements with there is / there are.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-18/flipped-classroom",
            courseLabel: "Flipped Classroom • Does it have a view? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-18/classwork",
            courseLabel: "Classwork • Does it have a view? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-18/homework",
            courseLabel: "Homework • Does it have a view? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss jobs and workplaces using simple present Wh- questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-19/flipped-classroom",
            courseLabel: "Flipped Classroom • Where do you work? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-19/classwork",
            courseLabel: "Classwork • Where do you work? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-19/homework",
            courseLabel: "Homework • Where do you work? (Cycle 1)",
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
              "By the end of this lesson, students will be able to give opinions about jobs using be + adjective and adjective + noun.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-20/flipped-classroom",
            courseLabel: "Flipped Classroom • Where do you work? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-20/classwork",
            courseLabel: "Classwork • Where do you work? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-20/homework",
            courseLabel: "Homework • Where do you work? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-21/classwork",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-22/classwork",
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
              "By the end of this lesson, students will be able to discuss foods they like, need, and have using some/ any and count / noncount nouns.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-23/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I always eat breakfast. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-23/classwork",
            courseLabel: "Classwork • I always eat breakfast. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-23/homework",
            courseLabel: "Homework • I always eat breakfast. (Cycle 1)",
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
              "By the end of this lesson, students will be able to describe eating habits using adverbs of frequency.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-24/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I always eat breakfast. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-24/classwork",
            courseLabel: "Classwork • I always eat breakfast. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-24/homework",
            courseLabel: "Homework • I always eat breakfast. (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss sports they watch and play using simple present Wh- questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-25/flipped-classroom",
            courseLabel:
              "Flipped Classroom • What sports do you like? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-25/classwork",
            courseLabel: "Classwork • What sports do you like? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-25/homework",
            courseLabel: "Homework • What sports do you like? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss skills, abilities, and talents using can and can’t.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-26/flipped-classroom",
            courseLabel:
              "Flipped Classroom • What sports do you like? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-26/classwork",
            courseLabel: "Classwork • What sports do you like? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-26/homework",
            courseLabel: "Homework • What sports do you like? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-27/classwork",
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
              "By the end of this lesson, students will be able to discuss evening, weekend, and birthday plans using statements and yes / no questions with be going to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-28/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I'm going to have a party. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-28/classwork",
            courseLabel: "Classwork • I'm going to have a party. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-28/homework",
            courseLabel: "Homework • I'm going to have a party. (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss plans to celebrate holidays, special occasions, and festivals using Wh- questions with be going to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-29/flipped-classroom",
            courseLabel:
              "Flipped Classroom • I'm going to have a party. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-29/classwork",
            courseLabel: "Classwork • I'm going to have a party. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-29/homework",
            courseLabel: "Homework • I'm going to have a party. (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss the body and common ailments using have + noun and feel + adjective.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-30/flipped-classroom",
            courseLabel: "Flipped Classroom • How do you feel? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-30/classwork",
            courseLabel: "Classwork • How do you feel? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-30/homework",
            courseLabel: "Homework • How do you feel? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss common remedies and give health advice using imperatives",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-31/flipped-classroom",
            courseLabel: "Flipped Classroom • How do you feel? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-31/classwork",
            courseLabel: "Classwork • How do you feel? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-31/homework",
            courseLabel: "Homework • How do you feel? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-32/classwork",
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
              "By the end of this lesson, students will be able to discuss stores, items to buy in stores, and store locations using prepositions of place.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-33/flipped-classroom",
            courseLabel: "Flipped Classroom • How do I get there? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-33/classwork",
            courseLabel: "Classwork • How do I get there? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-33/homework",
            courseLabel: "Homework • How do I get there? (Cycle 1)",
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
              "By the end of this lesson, students will be able to ask for and give directions to various locations.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-34/flipped-classroom",
            courseLabel: "Flipped Classroom • How do I get there? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-34/classwork",
            courseLabel: "Classwork • How do I get there? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-34/homework",
            courseLabel: "Homework • How do I get there? (Cycle 2)",
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
              "By the end of this lesson, students will be able to discuss weekend activities using simple past statements with regular and irregular verbs.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-35/flipped-classroom",
            courseLabel: "Flipped Classroom • I had a good time. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-35/classwork",
            courseLabel: "Classwork • I had a good time. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-35/homework",
            courseLabel: "Homework • I had a good time. (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss vacation activities using simple past yes/ no questions and short answers.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-36/flipped-classroom",
            courseLabel: "Flipped Classroom • I had a good time. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-36/classwork",
            courseLabel: "Classwork • I had a good time. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-36/homework",
            courseLabel: "Homework • I had a good time. (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-37/classwork",
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
              "By the end of this lesson, students will be able to discuss family and personal history using the past of be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-38/flipped-classroom",
            courseLabel: "Flipped Classroom • Where were you born? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-38/classwork",
            courseLabel: "Classwork • Where were you born? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-38/homework",
            courseLabel: "Homework • Where were you born? (Cycle 1)",
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
              "By the end of this lesson, students will be able to discuss school experiences and memories using Wh- questions with did, was, and were.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-39/flipped-classroom",
            courseLabel: "Flipped Classroom • Where were you born? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-39/classwork",
            courseLabel: "Classwork • Where were you born? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-39/homework",
            courseLabel: "Homework • Where were you born? (Cycle 2)",
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
              "By the end of this lesson, students will be able to make phone calls and leave messages using subject and object pronouns.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-40/flipped-classroom",
            courseLabel: "Flipped Classroom • Can I take a message? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-40/classwork",
            courseLabel: "Classwork • Can I take a message? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-40/homework",
            courseLabel: "Homework • Can I take a message? (Cycle 1)",
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
              "By the end of Cycle 2, students will be able to make, accept, and decline invitations using Do you want to ... ?, Would you like to ... ?, and verb + to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-41/flipped-classroom",
            courseLabel: "Flipped Classroom • Can I take a message? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-41/classwork",
            courseLabel: "Classwork • Can I take a message? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-41/homework",
            courseLabel: "Homework • Can I take a message? (Cycle 2)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-42/classwork",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/lesson-43/classwork",
            courseLabel: "Classwork • Review lessons 23-41 + Written Test",
          },
        ],
      },
    ],
  },
];

export default function Beginner() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner (A1)"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
