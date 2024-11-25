import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function PreIntermediateLesson19Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={["Lesson 19", "Classwork", "Time to celebrate (Cycle 1)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
