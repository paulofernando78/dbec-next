import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLessonXXXHomework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={["Lesson ...", "Homework", "..."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
