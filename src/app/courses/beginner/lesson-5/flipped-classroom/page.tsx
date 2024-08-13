import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson5FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 5", "Flipped classroom", "Where are my keys? (Cycle 2)"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
