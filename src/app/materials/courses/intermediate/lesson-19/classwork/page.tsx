import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson19Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={[
          "Lesson 19",
          "Classwork",
          "Never stop learning (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
