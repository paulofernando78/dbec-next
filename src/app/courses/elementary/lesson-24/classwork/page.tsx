import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson24Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 24",
          "Classwork",
          "What does she look like? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
