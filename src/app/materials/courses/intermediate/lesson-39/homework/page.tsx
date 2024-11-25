import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function IntermediateLesson39Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 39",
          "Homework",
          "A law must be passed! (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
