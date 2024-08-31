import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function PreIntermediateLessonXXXFlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={["Lesson XXX", "Flipped classroom", "..."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
