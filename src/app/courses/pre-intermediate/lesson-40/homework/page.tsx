import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson40Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={["Lesson 40", "Homework", "Making excuses (Cycle 1)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
