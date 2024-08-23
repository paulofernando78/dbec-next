import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson39FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 39",
          "Flipped Classroom",
          "What are you doing later? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}