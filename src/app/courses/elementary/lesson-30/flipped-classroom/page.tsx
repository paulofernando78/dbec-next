import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson30FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={[
          "Lesson 30",
          "Flipped Classroom",
          "It's important to get rest (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
