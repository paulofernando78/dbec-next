import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function BeginnerLesson10Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Pre-Intermediate"
        descriptions={[
          "Lesson 10",
          "Homework",
          "Have you ever tried it? (Cycle 2)",
        ]}
      />
    </>
  );
}
