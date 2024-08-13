import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLesson() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson", "Classwork", "Review lessons 23-26", "+ Written and Oral Quiz"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  );
}
