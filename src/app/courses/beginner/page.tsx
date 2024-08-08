import { ContentCard, MainContent } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

import { beginner } from "@/img/index"

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
            content: "By the end of this lesson, students will be able to say hello and make introductions using my, your, his, and her.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-2/",
            courseLabel: "Flipped Classroom • What's your name? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-2/",
            courseLabel: "Classwork • What's your name? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-2/",
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
            content: "By the end of this lesson, students will be able to say good-bye and exchange contact information using subject pronouns and the verb be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-3/",
            courseLabel: "Flipped Classroom • What's your name? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-3/",
            courseLabel: "Classwork • What's your name? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-3/",
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
            content: "By the end of this lesson, students will be able to identify and discuss personal and classroom objects using the articles a1/ an, plurals, this / these, and it / they.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-4/",
            courseLabel: "Flipped Classroom • Where are my keys? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-4/",
            courseLabel: "Classwork • Where are my keys? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-4/",
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
            content: "By the end of this lesson, students will be able to discuss the location of items using yes/ no and where questions with be, the article the, and prepositions of place.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-5/",
            courseLabel: "Flipped Classroom • Where are my keys? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-5/",
            courseLabel: "Classwork • Where are my keys? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-5/",
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
            courseLink: "/courses/beginner/class-6/",
            courseLabel: "Classwork • Progress check • Lessons 2-5 + Written and Oral Quiz",
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
            content: "By the end of this lesson, students will be able to discuss cities, countries, nationalities, and languages using yes / no questions with be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
            courseLabel: "Classwork • Where are you from? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
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
            content: "By the end of this lesson, students will be able to discuss people's appearances, personalities, and ages using Wh- questions with be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
            courseLabel: "Flipped Classroom • Where are you from? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
            courseLabel: "Classwork • Where are you from? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
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
            content: "By the end of this lesson, students will be able to discuss work and free- time clothes and colors using possessive adjectives, possessive pronouns, and possessives with names.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
            courseLabel: "Flipped Classroom • Is this your coat? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
            courseLabel: "Classwork • Is this your coat? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
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
            content: "By the end of this lesson, students will be able to discuss the weather and what people are wearing using the present continuous and conjunctions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
            courseLabel: "Flipped Classroom • Is this your coat? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
            courseLabel: "Classwork • Is this your coat? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
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
            courseLink: "/courses/beginner/class-11/",
            courseLabel: "Classwork • Progress Check • Lessons 7-10 + Written and Oral Quiz",
          }
        ],
      },
      // Lesson 12
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 12",
        contents: [
          {
            content: "By the end of this lesson, students will be able to discuss cities and time zones using time expressions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
            courseLabel: "Flipped Classroom • What time is it? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
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
            content: "By the end of this lesson, students will be able to discuss people's activities using the present continuous.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
            courseLabel: "Flipped Classroom • What time is it? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
            courseLabel: "Classwork • What time is it? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
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
            content: "By the end of this lesson, students will be able to discuss transportation and family using simple present statements.",
            applyHr: true,
          },
          {courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
            courseLabel: "Flipped Classroom • I ride my bike to school. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
            courseLabel: "Classwork • I ride my bike to school. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
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
            content: "By the end of this lesson, students will be able to discuss daily and weekly routines using simple present questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
            courseLabel: "Flipped Classroom • I ride my bike to school. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
            courseLabel: "Classwork • I ride my bike to school. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
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
            courseLink: "/courses/beginner/class-16/",
            courseLabel: "Classwork • Progress check • Lessons 12-15 + Written and Oral Quiz",
          }
        ],
      },
      // Lesson 17
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 17",
        contents: [
          {
            content: "By the end of this lesson, students will be able to describe houses and apartments using simple present questions and short answers.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
            courseLabel: "Flipped Classroom • Does it have a view? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
            courseLabel: "Classwork • Does it have a view? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
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
            content: "By the end of this lesson, students will be able to discuss furniture, appliances, and dream homes using statements with there is / there are.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-18/",
            courseLabel: "Flipped Classroom • Does it have a view? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-18/",
            courseLabel: "Classwork • Does it have a view? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-18/",
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
            content: "By the end of this lesson, students will be able to discuss jobs and workplaces using simple present Wh- questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-19/",
            courseLabel: "Flipped Classroom • Where do you work? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-19/",
            courseLabel: "Classwork • Where do you work? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-19/",
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
            content: "By the end of this lesson, students will be able to give opinions about jobs using be + adjective and adjective + noun.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-20/",
            courseLabel: "Flipped Classroom • Where do you work? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-20/",
            courseLabel: "Classwork • Where do you work? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-20/",
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
            courseLink: "/courses/beginner/class-21/",
            courseLabel: "Classwork • Progress Check • Lessons 17-20 + Written and Oral Quiz",
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
            courseLink: "/courses/beginner/class-22/",
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
            content: "By the end of this lesson, students will be able to discuss foods they like, need, and have using some/ any and count / noncount nouns.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-23/",
            courseLabel: "Flipped Classroom • I always eat breakfast. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-23/",
            courseLabel: "Classwork • I always eat breakfast. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-23/",
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
            content: "By the end of this lesson, students will be able to describe eating habits using adverbs of frequency.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-24/",
            courseLabel: "Flipped Classroom • I always eat breakfast. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-24/",
            courseLabel: "Classwork • I always eat breakfast. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-24/",
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
            content: "By the end of this lesson, students will be able to discuss sports they watch and play using simple present Wh- questions.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-25/",
            courseLabel: "Flipped Classroom • What sports do you like? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-25/",
            courseLabel: "Classwork • What sports do you like? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-25/",
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
            content: "By the end of this lesson, students will be able to discuss skills, abilities, and talents using can and can’t.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-26/",
            courseLabel: "Flipped Classroom • What sports do you like? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-26/",
            courseLabel: "Classwork • What sports do you like? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-26/",
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
            courseLink: "/courses/beginner/class-27/",
            courseLabel: "Classwork • Progress Check • Lessons 23-26 + Written and Oral Quiz",
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
            content: "By the end of this lesson, students will be able to discuss evening, weekend, and birthday plans using statements and yes / no questions with be going to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-28/",
            courseLabel: "Flipped Classroom • I'm going to have a party. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-28/",
            courseLabel: "Classwork • I'm going to have a party. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-28/",
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
            content: "By the end of this lesson, students will be able to discuss plans to celebrate holidays, special occasions, and festivals using Wh- questions with be going to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-29/",
            courseLabel: "Flipped Classroom • I'm going to have a party. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-29/",
            courseLabel: "Classwork • I'm going to have a party. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-29/",
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
            content: "By the end of this lesson, students will be able to discuss the body and common ailments using have + noun and feel + adjective.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-30/",
            courseLabel: "Flipped Classroom • How do you feel? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-30/",
            courseLabel: "Classwork • How do you feel? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-30/",
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
            content: "By the end of this lesson, students will be able to discuss common remedies and give health advice using imperatives",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-31/",
            courseLabel: "Flipped Classroom • How do you feel? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-31/",
            courseLabel: "Classwork • How do you feel? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-31/",
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
            courseLink: "/courses/beginner/class-32/",
            courseLabel: "Classwork • Progress Check Lessons 28-31 + Written and Oral Quiz",
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
            content: "By the end of this lesson, students will be able to discuss stores, items to buy in stores, and store locations using prepositions of place.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-33/",
            courseLabel: "Flipped Classroom • How do I get there? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-33/",
            courseLabel: "Classwork • How do I get there? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-33/",
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
            content: "By the end of this lesson, students will be able to ask for and give directions to various locations.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-34/",
            courseLabel: "Flipped Classroom • How do I get there? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-34/",
            courseLabel: "Classwork • How do I get there? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-34/",
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
            content: "By the end of this lesson, students will be able to discuss weekend activities using simple past statements with regular and irregular verbs.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-35/",
            courseLabel: "Flipped Classroom • I had a good time. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-35/",
            courseLabel: "Classwork • I had a good time. (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-35/",
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
            content: "By the end of this lesson, students will be able to discuss vacation activities using simple past yes/ no questions and short answers.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-36/",
            courseLabel: "Flipped Classroom • I had a good time. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-36/",
            courseLabel: "Classwork • I had a good time. (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-36/",
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
            courseLink: "/courses/beginner/class-37/",
            courseLabel: "Classwork • Progress • Check Lessons 33-36 + Written and Oral Quiz",
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
            content: "By the end of this lesson, students will be able to discuss family and personal history using the past of be.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-38/",
            courseLabel: "Flipped Classroom • Where were you born? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-38/",
            courseLabel: "Classwork • Where were you born? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-38/",
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
            content: "By the end of this lesson, students will be able to discuss school experiences and memories using Wh- questions with did, was, and were.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-39/",
            courseLabel: "Flipped Classroom • Where were you born? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-39/",
            courseLabel: "Classwork • Where were you born? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-39/",
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
            content: "By the end of this lesson, students will be able to make phone calls and leave messages using subject and object pronouns.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-40/",
            courseLabel: "Flipped Classroom • Can I take a message? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-40/",
            courseLabel: "Classwork • Can I take a message? (Cycle 1)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-40/",
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
            content: "By the end of Cycle 2, students will be able to make, accept, and decline invitations using Do you want to ... ?, Would you like to ... ?, and verb + to.",
            applyHr: true,
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-41/",
            courseLabel: "Flipped Classroom • Can I take a message? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-41/",
            courseLabel: "Classwork • Can I take a message? (Cycle 2)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-41/",
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
            courseLink: "/courses/beginner/class-42/",
            courseLabel: "Classwork • Progress Check • Lessons 38-41 + Written and Oral Quiz",
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
            courseLink: "/courses/beginner/class-43",
            courseLabel: "Classwork • Test • Lessons 23-41 + Written Quiz",
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
        subtitle="Beginner"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
