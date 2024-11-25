import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function ElementaryLesson40Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 40",
          "Homework",
          "How have you changed? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
