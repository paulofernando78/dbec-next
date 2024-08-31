import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function IntermediateLesson29Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={["Lesson 29", "Classwork", "Rites of passage (Cycle 2)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
