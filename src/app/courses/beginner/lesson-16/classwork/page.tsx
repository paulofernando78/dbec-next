import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function BeginnerLesson16Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={[
          "Lesson 16",
          "Classwork",
          "Review lessons 12-15 ",
          "+ Written and Oral Quiz",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
