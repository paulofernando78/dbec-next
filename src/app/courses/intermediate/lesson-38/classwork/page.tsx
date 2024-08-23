import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson38Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 38",
          "Classwork",
          "A law must be passed! (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}