import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson40Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
        descriptions={[
          "Lesson 40",
          "Classwork",
          "Can I take a message? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
