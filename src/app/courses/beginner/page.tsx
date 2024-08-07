import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

const contents = [
  {
    subContents: [
      {
        bgColor: "black",
        textColor: "white",
        label: "CEFR (Common European Framework of Reference)",
        contents: [
          {
            content: "• Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has.",
          },
          {
            content: "• Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.",
          },
          {
            content: "• Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.",
          },
        ],
      },
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
      {
        bgColor: "black",
        textColor: "white",
        label: "Lesson 2",
        contents: [
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
    ],
  },
];

export default function Travel() {
  return (
    <>
      <Whiteboard title="Courses" subtitle="Beginner" descriptions={['43 lessons']}/>
      <div className="line-break">
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
