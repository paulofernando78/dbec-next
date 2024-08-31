import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLesson15Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={["Lesson 15", "Classwork", "Sure! I'll do it. (Cycle 2)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
