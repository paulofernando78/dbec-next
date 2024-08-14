import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function IntermediateLesson42Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Intermediate"
        descriptions={[
          "Lesson 42",
          "Classwork",
          "Review lessons 38-41",
          " + Written and Oral Quiz",
        ]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  );
}
