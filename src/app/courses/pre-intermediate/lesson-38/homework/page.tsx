import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson38Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Pre-Intermediate"
        descriptions={[
          "Lesson 38",
          "Homework",
          "I wouldn't do that? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
