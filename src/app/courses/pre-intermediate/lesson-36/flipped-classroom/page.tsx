import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson36FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={[
          "Lesson 36",
          "Flipped classroom",
          "Now I get it! (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
