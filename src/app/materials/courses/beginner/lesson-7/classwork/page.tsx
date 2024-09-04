import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function BeginnerLesson7Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={[
          "Lesson 7",
          "Classwork",
          "Where are you from? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
