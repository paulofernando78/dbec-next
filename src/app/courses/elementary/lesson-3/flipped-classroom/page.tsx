import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson3FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={["Lesson", "Flipped Classroom", "..."]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
