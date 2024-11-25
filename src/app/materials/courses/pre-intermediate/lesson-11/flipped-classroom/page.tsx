import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function PreIntermediateLessonXXXFlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={["Lesson XXX", "Flipped classroom", "..."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
