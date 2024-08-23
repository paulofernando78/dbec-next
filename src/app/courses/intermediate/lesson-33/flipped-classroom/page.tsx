import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson33FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 33",
          "Flipped classroom",
          "What might have been (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}