import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson43Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 42",
          "Classwork",
          "Review lessons 23-41",
          "+ Written Test",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}