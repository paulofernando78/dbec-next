import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLesson4FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson 4", "Flipped Classroom", "What do you do? (Cycle 1)"]}
      />
      <div className="line-break">
       <p>Coming soon!</p>
      </div>
    </>
  );
}
