import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function BeginnerLessonXXXClasswork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={[
          "Lesson 11",
          "Review",
          "Review lessons 7-10 ",
          "+ Written and Oral Quiz",
        ]}
      />
    </>
  );
}
