import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson10Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={[
          "Lesson 10",
          "Classwork",
          "Do you play the guitar? (Cycle 2)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
