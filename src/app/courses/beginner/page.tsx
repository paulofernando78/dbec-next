import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  {
    subContents: [
      // CEFR
      {
        bgColor: "black",
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
        applyBeginnerBorder: true,
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
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 2",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • What's your name? (Cycle 1)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • What's your name? (Cycle 1)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • What's your name? (Cycle 1)",
          },
        ],
      },
      // Lesson 3
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 3",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 4
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 4",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 5
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 5",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 6
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 6",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 7
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 7",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 8
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 8",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 9
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 9",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 10
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 10",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 11
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 11",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 12
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 12",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 13
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 13",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 14
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 14",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 15
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 15",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 16
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 16",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 17
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 17",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 18
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 18",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 19
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 19",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 20
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 20",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 21
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 21",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 22
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 22",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 23
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 23",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 24
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 24",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 25
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 25",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 26
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 26",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 27
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 27",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 28
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 28",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 29
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 29",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 30
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 30",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 31
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 31",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 32
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 32",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 33
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 33",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 34
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 34",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 35
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 35",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 36
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 36",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 37
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 37",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 38
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 38",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 39
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 39",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 40
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 40",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 41
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 41",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 42
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 42",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
          },
        ],
      },
      // Lesson 43
      {
        applyBeginnerBorder: true,
        bgColor: "black",
        textColor: "white",
        label: "Lesson 43",
        contents: [
          {
            content: "...",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Flipped Classroom • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Classwork • xxx (Cycle xxx)",
          },
          {
            link: "/courses/beginner/class-2/",
            linkLabel: "Homework • xxx (Cycle xxx)",
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
