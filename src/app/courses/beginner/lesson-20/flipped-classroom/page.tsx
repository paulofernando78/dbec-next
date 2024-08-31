import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson20FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={[
          "Lesson 20",
          "Flipped classroom",
          "Where do you work? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
