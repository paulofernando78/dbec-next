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
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-6/",
            courseLabel: "Classwork • xxx",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-7/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-8/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-9/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-10/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-11/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-12/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-13/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
          {courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-14/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-15/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-16/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseImg: beginner,
            courseLink: "/courses/beginner/class-17/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-18/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-18/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-18/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-19/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-19/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-19/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-20/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-20/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-20/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-21/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-22/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-23/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-23/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-23/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-24/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-24/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-24/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-25/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-25/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-25/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-26/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-26/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-26/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-27/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-28/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-28/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-28/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-29/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-29/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-29/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-30/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-30/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-30/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-31/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-31/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-31/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-32/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-33/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-33/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-33/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-34/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-34/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-34/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-35/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-35/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-35/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-36/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-36/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-36/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-37/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-38/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-38/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-38/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-39/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-39/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-39/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-40/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-40/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-40/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-41/",
            courseLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-41/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            courseLink: "/courses/beginner/class-41/",
            courseLabel: "Homework • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-42/",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
            courseLink: "/courses/beginner/class-43",
            courseLabel: "Classwork • xxx (Cycle xxx)",
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
