import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson3FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 3", "Flipped classroom", "What's your name? (Cycle 2)"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
