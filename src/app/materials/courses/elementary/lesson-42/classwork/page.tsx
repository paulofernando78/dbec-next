import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function ElementaryLesson42CLasswork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={[
          "Lesson 42",
          "Classwork",
          "Review lessons 38-41",
          "+ Written and Oral Quiz",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
