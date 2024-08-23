import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson12Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 12",
          "Classwork",
          "Expanding your horizons (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}