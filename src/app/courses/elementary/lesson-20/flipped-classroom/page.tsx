import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLesson20FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 20",
          "Flipped Classroom",
          "How's the neighborhood? (Cycle 2)",
        ]}
      />
        <UnderConstruction />
      <div className="line-break">
      </div>
    </>
  );
}
