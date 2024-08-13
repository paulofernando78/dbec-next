import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function ElementaryLesson42CLasswork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson 42", "Classwork", "Review lessons 38-41", "+ Written and Oral Quiz"]}
      />
      <div className="line-break">
       <p>Coming soon!</p>
      </div>
    </>
  );
}
