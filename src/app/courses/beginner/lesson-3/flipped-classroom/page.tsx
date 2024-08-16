import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { UnderConstruction } from '@/components/UnderConstruction'

export default function BeginnerLesson3FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 3", "Flipped classroom", "What's your name? (Cycle 2)"]}
      />
      <div className="line-break">
      <UnderConstruction />
      </div>
    </>
  )
}
