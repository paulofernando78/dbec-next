import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLessonXXXFlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson ...", "Flipped classroom", "..."]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
