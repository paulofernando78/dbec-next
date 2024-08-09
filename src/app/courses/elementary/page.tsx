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
              "...",
          },
          {
            content:
              "...",
          },
          {
            content:
              "...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-2/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-3/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-4/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-5/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-7/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-8/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-9/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-10/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-12/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-12/",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-12/",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-13/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-14/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-15/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-17/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-18/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-19/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-20/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-23/homework",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-24/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-25/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-26/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-28/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/flipped-classroom",
            courseLabel:
              "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-29/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-30/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-31/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-33/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-34/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-35/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-36/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-38/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-39/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-40/homework",
            courseLabel: "Homework • ...",
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
              "...",
            applyHr: true,
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/flipped-classroom",
            courseLabel: "Flipped Classroom • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/classwork",
            courseLabel: "Classwork • ...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/lesson-41/homework",
            courseLabel: "Homework • ...",
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
        subtitle="Intermediate"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
