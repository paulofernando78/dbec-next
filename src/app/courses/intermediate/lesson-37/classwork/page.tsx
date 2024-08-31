import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function IntermediateLesson37Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Intermediate"
        descriptions={[
          "Lesson 37",
          "Classwork",
          "Review lessons 33-36",
          "+ Written and Oral Quiz",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
