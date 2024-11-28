import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function BeginnerLesson22Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={[
          "Lesson 22",
          "Classwork",
          "Review lessons 2-20 ",
          "+ Written Quiz",
        ]}
      />
    </>
  );
}
