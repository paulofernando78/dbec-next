import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLessonXXXHomework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={["Lesson XXX", "Homework", "..."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
