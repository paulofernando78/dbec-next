import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson3FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={[
          "Lesson 3",
          "Flipped classroom",
          "Good memories (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
