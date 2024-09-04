import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson30Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={[
          "Lesson 30",
          "Homework",
          "It's important to get rest (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}