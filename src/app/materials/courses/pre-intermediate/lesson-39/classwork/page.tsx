import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson39Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={[
          "Lesson 39",
          "Classwork",
          "I wouldn't do that? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
