import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson4FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={[
          "Lesson 4",
          "Flipped classroom",
          "Life in the city (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}