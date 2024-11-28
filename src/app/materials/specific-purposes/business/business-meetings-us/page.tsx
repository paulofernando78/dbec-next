import { ContentCard } from "@/components/Molecules/Cards/ContentCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { title } from "process";

const whiteboard = {
  title: "Specific Purposes",
  subtitle: "Business",
  descriptions: ["Business MEetings (US)"],
};

const contents = [
  // Present
  {
    cardContents: [
      {
        bgColor: "black",
        textColor: "white",
        cardLabel: "Present",
        contents: [
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-1",
            checkboxLabel: "Lesson 1 • Starting a Meeting",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-2",
            checkboxLabel: "Lesson 2 • Introducing the Participants",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-3",
            checkboxLabel: "Lesson 3 • Beginning a Presentation",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-4",
            checkboxLabel: "Lesson 4 • Giving a Presentation (Part A)",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-5",
            checkboxLabel: "Lesson 5 • Giving a Presentation (Part B)",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-6",
            checkboxLabel: "Lesson 6 • Ending a Presentation",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-7",
            checkboxLabel: "Lesson 7 • Managing a Discussion",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-8",
            checkboxLabel: "Lesson 8 • Taking Questions",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-9",
            checkboxLabel:
              "Lesson 9 • Ending a Topic / Planning for the Future",
          },
          {
            checkboxLink:
              "/materials/specific-purposes/business/business-meetings-us/lesson-10",
            checkboxLabel: "Lesson 10 • Ending a Meeting",
          },
        ],
      },
    ],
  },
];

export default function BusinessMeetingUs() {
  return (
    <>
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
