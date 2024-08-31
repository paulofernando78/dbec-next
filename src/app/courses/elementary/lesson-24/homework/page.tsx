import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson24Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={[
          "Lesson 24",
          "Homework",
          "What does she look like? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
