import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson39Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={[
          "Lesson 39",
          "Homework",
          "Where were you born? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
