import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson38FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={[
          "Lesson 38",
          "Flipped classroom",
          "A law must be passed! (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
