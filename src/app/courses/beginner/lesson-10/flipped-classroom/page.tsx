import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson10FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 10", "Flipped classroom", "Is this your coat? (Cycle 2)"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
