import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson9Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={["Lesson 9", "Homework", "Is this your coat? (Cycle 1)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
