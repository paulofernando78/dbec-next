import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson31FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={[
          "Lesson 31",
          "Flipped classroom",
          "How do you feel? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
