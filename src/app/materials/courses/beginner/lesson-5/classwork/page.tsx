import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson5Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={["Lesson 5", "Classwork", "Where are my keys? (Cycle 2)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
