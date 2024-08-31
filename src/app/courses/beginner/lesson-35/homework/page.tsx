import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson35Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={["Lesson 35", "Homework", "I had a good time. (Cycle 1)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
