import { ContentCard, MainContent } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

import { elementary } from "@/img/index"

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
              "• ...",
          },
          {
            content:
              "• ...",
          },
          {
            content:
              "• ...",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-2/",
            courseLabel: "Flipped Classroom • ... (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-2/",
            courseLabel: "Classwork • ... (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-2/",
            courseLabel: "Homework • ... (Cycle 1)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-3/",
            courseLabel: "Flipped Classroom • ... (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-3/",
            courseLabel: "Classwork • ... (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-3/",
            courseLabel: "Homework • ... (Cycle 2)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-4/",
            courseLabel: "Flipped Classroom • ... (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-4/",
            courseLabel: "Classwork • ... (Cycle 1)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-4/",
            courseLabel: "Homework • ... (Cycle 1)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-5/",
            courseLabel: "Flipped Classroom • ... (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-5/",
            courseLabel: "Classwork • ... (Cycle 2)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-5/",
            courseLabel: "Homework • ... (Cycle 2)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-6/",
            courseLabel: "Classwork • ...",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-7/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-7/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-7/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-8/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-8/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-8/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-9/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-9/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-9/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-10/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-10/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-10/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-11/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-12/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-12/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-12/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-13/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-13/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-13/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {courseImg: elementary,
            courseLink: "/courses/elementary/class-14/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-14/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-14/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-15/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-15/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-15/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-16/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-17/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-17/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-17/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-18/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-18/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-18/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-19/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-19/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-19/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-20/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-20/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-20/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-21/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-22/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-23/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-23/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-23/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-24/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-24/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-24/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-25/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-25/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-25/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-26/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-26/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-26/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-27/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-28/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-28/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-28/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-29/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-29/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-29/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-30/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-30/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-30/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-31/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-31/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-31/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-32/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-33/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-33/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-33/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-34/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-34/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-34/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-35/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-35/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-35/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-36/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-36/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-36/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            content: "• reflect on one's learning",
          },
          {
            content: "• identify areas that need improvement",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-37/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-38/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-38/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-38/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-39/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-39/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-39/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-40/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-40/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-40/",
            courseLabel: "Homework • ... (Cycle ...)",
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
            content: "...",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-41/",
            courseLabel: "Flipped Classroom • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-41/",
            courseLabel: "Classwork • ... (Cycle ...)",
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-41/",
            courseLabel: "Homework • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-42/",
            courseLabel: "Classwork • ... (Cycle ...)",
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
          },
          {
            courseImg: elementary,
            courseLink: "/courses/elementary/class-43",
            courseLabel: "Classwork • ... (Cycle ...)",
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
        subtitle="Elementary"
        descriptions={["43 lessons"]}
      />
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
