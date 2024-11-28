import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function ElementaryLesson18FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 18",
          "Flipped Classroom",
          "We went dancing! (Cycle 2)",
        ]}
      />
    </>
  );
}
