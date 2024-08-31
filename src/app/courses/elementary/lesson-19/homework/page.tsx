import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function ElementaryLesson19Homework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Elementary (A2)"
        descriptions={[
          "Lesson 19",
          "Homework",
          "How's the neighborhood? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
