import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson2FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Flipped classroom", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
