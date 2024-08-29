import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson14Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={["Lesson 14", "Classwork", "That needs fixing (Cycle 1)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
