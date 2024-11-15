import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson3Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={["Lesson 3", "Homework", "Good memories (Cycle 2)  "]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
