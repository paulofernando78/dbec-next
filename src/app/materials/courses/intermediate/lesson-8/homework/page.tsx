import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson8Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={["Lesson 8", "Homework", "Lend a hand (Cycle 2)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}