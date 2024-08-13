import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLesson9FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson 9", "Flipped Classroom", "Do you play the guitar? (Cycle 1)"]}
      />
      <div className="line-break">
       <p>Coming soon!</p>
      </div>
    </>
  );
}
