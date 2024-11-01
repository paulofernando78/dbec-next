import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson32Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={[
          "Lesson 32",
          "Classwork",
          "Review essons 28-31",
          " + Written and Oral Quiz",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
