import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson5FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={[
          "Lesson 5",
          "Flipped classroom",
          "Life in the city (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
