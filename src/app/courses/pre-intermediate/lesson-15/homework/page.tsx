import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson15Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={["Lesson 15", "Homework", "Sure! I'll do it. (Cycle 2)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}