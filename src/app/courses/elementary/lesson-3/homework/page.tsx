import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLessonHomework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson", "Homework", "Where are you from? (Cycle 2)"]}
      />
      <div className="line-break">
       <p>Coming soon!</p>
      </div>
    </>
  );
}
