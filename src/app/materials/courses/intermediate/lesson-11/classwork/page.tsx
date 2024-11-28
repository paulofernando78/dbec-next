import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function IntermediateLesson11Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 11",
          "Classwork",
          "Review lessons 7-10",
          "+ Written and Oral Quiz",
        ]}
      />
    </>
  );
}
